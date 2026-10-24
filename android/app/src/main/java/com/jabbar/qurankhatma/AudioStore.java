package com.jabbar.qurankhatma;

import android.content.Context;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import org.json.JSONArray;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * تحميل ملفات التلاوة وحفظها داخل التطبيق حتى تشتغل بدون إنترنت.
 * الصفحة تستدعيه باسم window.QuranNative، والملفات تُعرض لها على
 * https://appassets.androidplatform.net/audio/&lt;القارئ&gt;/&lt;رقم الآية&gt;.mp3
 */
final class AudioStore {

    private static final String CDN = "https://cdn.islamic.network/quran/audio/";
    private static final long MIN_FREE_BYTES = 50L * 1024 * 1024;

    private final WebView web;
    private final File root;
    private final ExecutorService exec = Executors.newSingleThreadExecutor();
    private volatile boolean cancel;

    AudioStore(Context context, WebView web) {
        this.web = web;
        this.root = rootDir(context);
    }

    static File rootDir(Context context) {
        File f = new File(context.getFilesDir(), "audio");
        //noinspection ResultOfMethodCallIgnored
        f.mkdirs();
        return f;
    }

    private static String safe(String s) {
        return s == null ? "" : s.replaceAll("[^A-Za-z0-9._-]", "");
    }

    private File dir(String reciter) {
        File d = new File(root, safe(reciter));
        //noinspection ResultOfMethodCallIgnored
        d.mkdirs();
        return d;
    }

    /** أرقام السور المحمّلة بالكامل لهذا القارئ، كـ JSON */
    @JavascriptInterface
    public String downloaded(String reciter) {
        JSONArray a = new JSONArray();
        File[] files = dir(reciter).listFiles();
        if (files != null) {
            for (File f : files) {
                String n = f.getName();
                if (n.startsWith("s") && n.endsWith(".done")) {
                    try {
                        a.put(Integer.parseInt(n.substring(1, n.length() - 5)));
                    } catch (NumberFormatException ignored) {
                    }
                }
            }
        }
        return a.toString();
    }

    @JavascriptInterface
    public void cancel() {
        cancel = true;
    }

    /** jobsJson = [[رقم السورة, [أرقام الآيات في المصحف...]], ...] */
    @JavascriptInterface
    public void download(final String reciter, final String bitrate, final String jobsJson) {
        cancel = false;
        exec.execute(() -> run(reciter, bitrate, jobsJson));
    }

    private void run(String reciter, String bitrate, String jobsJson) {
        try {
            JSONArray jobs = new JSONArray(jobsJson);
            int total = 0;
            for (int i = 0; i < jobs.length(); i++) total += jobs.getJSONArray(i).getJSONArray(1).length();
            File d = dir(reciter);
            int done = 0;
            long lastEmit = 0;
            for (int i = 0; i < jobs.length(); i++) {
                JSONArray job = jobs.getJSONArray(i);
                int surah = job.getInt(0);
                JSONArray ayahs = job.getJSONArray(1);
                for (int k = 0; k < ayahs.length(); k++) {
                    if (cancel) {
                        end(false, true, null);
                        return;
                    }
                    int g = ayahs.getInt(k);
                    File f = new File(d, g + ".mp3");
                    if (!(f.exists() && f.length() > 0)) {
                        if (root.getUsableSpace() < MIN_FREE_BYTES) {
                            end(false, false, "space");
                            return;
                        }
                        String url = CDN + safe(bitrate) + "/" + safe(reciter) + "/" + g + ".mp3";
                        if (!fetchWithRetry(url, f)) {
                            end(false, cancel, cancel ? null : "net");
                            return;
                        }
                    }
                    done++;
                    long now = System.currentTimeMillis();
                    if (now - lastEmit > 300 || done == total) {
                        lastEmit = now;
                        emit("{\"t\":\"p\",\"done\":" + done + ",\"total\":" + total + "}");
                    }
                }
                //noinspection ResultOfMethodCallIgnored
                new File(d, "s" + surah + ".done").createNewFile();
                emit("{\"t\":\"s\",\"s\":" + surah + "}");
            }
            end(true, false, null);
        } catch (Exception e) {
            end(false, false, "io");
        }
    }

    private boolean fetchWithRetry(String url, File out) {
        for (int i = 0; i < 3; i++) {
            if (cancel) return false;
            if (fetch(url, out)) return true;
            try {
                Thread.sleep(800L * (i + 1));
            } catch (InterruptedException e) {
                return false;
            }
        }
        return false;
    }

    private boolean fetch(String url, File out) {
        HttpURLConnection c = null;
        File tmp = new File(out.getPath() + ".part");
        try {
            c = (HttpURLConnection) new URL(url).openConnection();
            c.setConnectTimeout(15000);
            c.setReadTimeout(30000);
            if (c.getResponseCode() != 200) return false;
            try (InputStream in = new BufferedInputStream(c.getInputStream());
                 OutputStream o = new FileOutputStream(tmp)) {
                byte[] buf = new byte[16384];
                int n;
                while ((n = in.read(buf)) > 0) {
                    if (cancel) return false;
                    o.write(buf, 0, n);
                }
            }
            return tmp.length() > 0 && tmp.renameTo(out);
        } catch (Exception e) {
            return false;
        } finally {
            if (c != null) c.disconnect();
            if (tmp.exists()) //noinspection ResultOfMethodCallIgnored
                tmp.delete();
        }
    }

    /** حذف سورة: علامة الاكتمال وملفات آياتها */
    @JavascriptInterface
    public void remove(final String reciter, final String ayahsJson, final int surah) {
        exec.execute(() -> {
            File d = dir(reciter);
            //noinspection ResultOfMethodCallIgnored
            new File(d, "s" + surah + ".done").delete();
            try {
                JSONArray a = new JSONArray(ayahsJson);
                for (int i = 0; i < a.length(); i++) //noinspection ResultOfMethodCallIgnored
                    new File(d, a.getInt(i) + ".mp3").delete();
            } catch (Exception ignored) {
            }
        });
    }

    @JavascriptInterface
    public void removeAll(final String reciter) {
        exec.execute(() -> {
            File[] files = dir(reciter).listFiles();
            if (files != null) for (File f : files) //noinspection ResultOfMethodCallIgnored
                f.delete();
        });
    }

    private void end(boolean ok, boolean cancelled, String err) {
        emit("{\"t\":\"e\",\"ok\":" + ok + ",\"cancelled\":" + cancelled
                + (err != null ? ",\"err\":\"" + err + "\"" : "") + "}");
    }

    private void emit(final String json) {
        web.post(() -> web.evaluateJavascript("window.__audioEvt&&window.__audioEvt(" + json + ")", null));
    }
}
