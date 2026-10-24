/* ===== القرآن الكريم — ختمة ===== */
const APP_VERSION = '1.1.0';

/* ===== بيانات السور ===== */
const S=[
{n:1,nm:"الفاتحة",a:7,t:"meccan"},{n:2,nm:"البقرة",a:286,t:"medinan"},{n:3,nm:"آل عمران",a:200,t:"medinan"},
{n:4,nm:"النساء",a:176,t:"medinan"},{n:5,nm:"المائدة",a:120,t:"medinan"},{n:6,nm:"الأنعام",a:165,t:"meccan"},
{n:7,nm:"الأعراف",a:206,t:"meccan"},{n:8,nm:"الأنفال",a:75,t:"medinan"},{n:9,nm:"التوبة",a:129,t:"medinan"},
{n:10,nm:"يونس",a:109,t:"meccan"},{n:11,nm:"هود",a:123,t:"meccan"},{n:12,nm:"يوسف",a:111,t:"meccan"},
{n:13,nm:"الرعد",a:43,t:"medinan"},{n:14,nm:"إبراهيم",a:52,t:"meccan"},{n:15,nm:"الحجر",a:99,t:"meccan"},
{n:16,nm:"النحل",a:128,t:"meccan"},{n:17,nm:"الإسراء",a:111,t:"meccan"},{n:18,nm:"الكهف",a:110,t:"meccan"},
{n:19,nm:"مريم",a:98,t:"meccan"},{n:20,nm:"طه",a:135,t:"meccan"},{n:21,nm:"الأنبياء",a:112,t:"meccan"},
{n:22,nm:"الحج",a:78,t:"medinan"},{n:23,nm:"المؤمنون",a:118,t:"meccan"},{n:24,nm:"النور",a:64,t:"medinan"},
{n:25,nm:"الفرقان",a:77,t:"meccan"},{n:26,nm:"الشعراء",a:227,t:"meccan"},{n:27,nm:"النمل",a:93,t:"meccan"},
{n:28,nm:"القصص",a:88,t:"meccan"},{n:29,nm:"العنكبوت",a:69,t:"meccan"},{n:30,nm:"الروم",a:60,t:"meccan"},
{n:31,nm:"لقمان",a:34,t:"meccan"},{n:32,nm:"السجدة",a:30,t:"meccan"},{n:33,nm:"الأحزاب",a:73,t:"medinan"},
{n:34,nm:"سبأ",a:54,t:"meccan"},{n:35,nm:"فاطر",a:45,t:"meccan"},{n:36,nm:"يس",a:83,t:"meccan"},
{n:37,nm:"الصافات",a:182,t:"meccan"},{n:38,nm:"ص",a:88,t:"meccan"},{n:39,nm:"الزمر",a:75,t:"meccan"},
{n:40,nm:"غافر",a:85,t:"meccan"},{n:41,nm:"فصلت",a:54,t:"meccan"},{n:42,nm:"الشورى",a:53,t:"meccan"},
{n:43,nm:"الزخرف",a:89,t:"meccan"},{n:44,nm:"الدخان",a:59,t:"meccan"},{n:45,nm:"الجاثية",a:37,t:"meccan"},
{n:46,nm:"الأحقاف",a:35,t:"meccan"},{n:47,nm:"محمد",a:38,t:"medinan"},{n:48,nm:"الفتح",a:29,t:"medinan"},
{n:49,nm:"الحجرات",a:18,t:"medinan"},{n:50,nm:"ق",a:45,t:"meccan"},{n:51,nm:"الذاريات",a:60,t:"meccan"},
{n:52,nm:"الطور",a:49,t:"meccan"},{n:53,nm:"النجم",a:62,t:"meccan"},{n:54,nm:"القمر",a:55,t:"meccan"},
{n:55,nm:"الرحمن",a:78,t:"medinan"},{n:56,nm:"الواقعة",a:96,t:"meccan"},{n:57,nm:"الحديد",a:29,t:"medinan"},
{n:58,nm:"المجادلة",a:22,t:"medinan"},{n:59,nm:"الحشر",a:24,t:"medinan"},{n:60,nm:"الممتحنة",a:13,t:"medinan"},
{n:61,nm:"الصف",a:14,t:"medinan"},{n:62,nm:"الجمعة",a:11,t:"medinan"},{n:63,nm:"المنافقون",a:11,t:"medinan"},
{n:64,nm:"التغابن",a:18,t:"medinan"},{n:65,nm:"الطلاق",a:12,t:"medinan"},{n:66,nm:"التحريم",a:12,t:"medinan"},
{n:67,nm:"الملك",a:30,t:"meccan"},{n:68,nm:"القلم",a:52,t:"meccan"},{n:69,nm:"الحاقة",a:52,t:"meccan"},
{n:70,nm:"المعارج",a:44,t:"meccan"},{n:71,nm:"نوح",a:28,t:"meccan"},{n:72,nm:"الجن",a:28,t:"meccan"},
{n:73,nm:"المزمل",a:20,t:"meccan"},{n:74,nm:"المدثر",a:56,t:"meccan"},{n:75,nm:"القيامة",a:40,t:"meccan"},
{n:76,nm:"الإنسان",a:31,t:"medinan"},{n:77,nm:"المرسلات",a:50,t:"meccan"},{n:78,nm:"النبأ",a:40,t:"meccan"},
{n:79,nm:"النازعات",a:46,t:"meccan"},{n:80,nm:"عبس",a:42,t:"meccan"},{n:81,nm:"التكوير",a:29,t:"meccan"},
{n:82,nm:"الانفطار",a:19,t:"meccan"},{n:83,nm:"المطففين",a:36,t:"meccan"},{n:84,nm:"الانشقاق",a:25,t:"meccan"},
{n:85,nm:"البروج",a:22,t:"meccan"},{n:86,nm:"الطارق",a:17,t:"meccan"},{n:87,nm:"الأعلى",a:19,t:"meccan"},
{n:88,nm:"الغاشية",a:26,t:"meccan"},{n:89,nm:"الفجر",a:30,t:"meccan"},{n:90,nm:"البلد",a:20,t:"meccan"},
{n:91,nm:"الشمس",a:15,t:"meccan"},{n:92,nm:"الليل",a:21,t:"meccan"},{n:93,nm:"الضحى",a:11,t:"meccan"},
{n:94,nm:"الشرح",a:8,t:"meccan"},{n:95,nm:"التين",a:8,t:"meccan"},{n:96,nm:"العلق",a:19,t:"meccan"},
{n:97,nm:"القدر",a:5,t:"meccan"},{n:98,nm:"البينة",a:8,t:"medinan"},{n:99,nm:"الزلزلة",a:8,t:"medinan"},
{n:100,nm:"العاديات",a:11,t:"meccan"},{n:101,nm:"القارعة",a:11,t:"meccan"},{n:102,nm:"التكاثر",a:8,t:"meccan"},
{n:103,nm:"العصر",a:3,t:"meccan"},{n:104,nm:"الهمزة",a:9,t:"meccan"},{n:105,nm:"الفيل",a:5,t:"meccan"},
{n:106,nm:"قريش",a:4,t:"meccan"},{n:107,nm:"الماعون",a:7,t:"meccan"},{n:108,nm:"الكوثر",a:3,t:"meccan"},
{n:109,nm:"الكافرون",a:6,t:"meccan"},{n:110,nm:"النصر",a:3,t:"medinan"},{n:111,nm:"المسد",a:5,t:"meccan"},
{n:112,nm:"الإخلاص",a:4,t:"meccan"},{n:113,nm:"الفلق",a:5,t:"meccan"},{n:114,nm:"الناس",a:6,t:"meccan"}
];
/* رقم الآية في المصحف كاملاً (1..6236) لملفات الصوت */
const OFF=[0]; S.forEach(s=>OFF.push(OFF[OFF.length-1]+s.a));
const globalAyah=(s,a)=>OFF[s-1]+a;
const verseText=(s,a)=>window.QURAN_TEXT[s-1][a-1];

const JUZ=[
[1,1,1],[2,2,142],[3,2,253],[4,3,93],[5,4,24],[6,4,148],[7,5,82],[8,6,111],[9,7,88],[10,8,41],
[11,9,93],[12,11,6],[13,12,53],[14,15,1],[15,17,1],[16,18,75],[17,21,1],[18,23,1],[19,25,21],[20,27,56],
[21,29,46],[22,33,31],[23,36,28],[24,39,32],[25,41,47],[26,46,1],[27,51,31],[28,58,1],[29,67,1],[30,78,1]
];
const QUARTERS=[
[1,1],[2,26],[2,44],[2,60],[2,75],[2,92],[2,106],[2,124],[2,142],[2,158],[2,177],[2,189],[2,203],[2,219],[2,233],[2,243],[2,253],[2,263],[2,272],[2,283],[3,15],[3,33],[3,52],[3,75],[3,93],[3,113],[3,133],[3,153],[3,171],[3,186],[4,1],[4,12],[4,24],[4,36],[4,58],[4,74],[4,88],[4,100],[4,114],[4,135],[4,148],[4,163],[5,1],[5,12],[5,27],[5,41],[5,51],[5,67],[5,82],[5,97],[5,109],[6,13],[6,36],[6,59],[6,74],[6,95],[6,111],[6,127],[6,141],[6,151],[7,1],[7,31],[7,47],[7,65],[7,88],[7,117],[7,142],[7,156],[7,171],[7,189],[8,1],[8,22],[8,41],[8,61],[9,1],[9,19],[9,34],[9,46],[9,60],[9,75],[9,93],[9,111],[9,122],[10,11],[10,26],[10,53],[10,71],[10,90],[11,6],[11,24],[11,41],[11,61],[11,84],[11,108],[12,7],[12,30],[12,53],[12,77],[12,101],[13,5],[13,19],[13,35],[14,10],[14,28],[15,1],[15,49],[16,1],[16,30],[16,51],[16,75],[16,90],[16,111],[17,1],[17,23],[17,50],[17,70],[17,99],[18,17],[18,32],[18,51],[18,75],[18,99],[19,22],[19,59],[20,1],[20,55],[20,83],[20,111],[21,1],[21,29],[21,51],[21,83],[22,1],[22,19],[22,38],[22,60],[23,1],[23,36],[23,75],[24,1],[24,21],[24,35],[24,53],[25,1],[25,21],[25,53],[26,1],[26,52],[26,111],[26,181],[27,1],[27,27],[27,56],[27,82],[28,12],[28,29],[28,51],[28,76],[29,1],[29,26],[29,46],[30,1],[30,31],[30,54],[31,22],[32,11],[33,1],[33,18],[33,31],[33,51],[33,60],[34,10],[34,24],[34,46],[35,15],[35,41],[36,28],[36,60],[37,22],[37,83],[37,145],[38,21],[38,52],[39,8],[39,32],[39,53],[40,1],[40,21],[40,41],[40,66],[41,9],[41,25],[41,47],[42,13],[42,27],[42,51],[43,24],[43,57],[44,17],[45,12],[46,1],[46,21],[47,10],[47,33],[48,18],[49,1],[49,14],[50,27],[51,31],[52,24],[53,26],[54,9],[55,1],[56,1],[56,75],[57,16],[58,1],[58,14],[59,11],[60,7],[62,1],[63,4],[65,1],[66,1],[67,1],[68,1],[69,1],[70,19],[72,1],[73,20],[75,1],[76,19],[78,1],[80,1],[82,1],[84,1],[87,1],[90,1],[94,1],[100,9]
];

/* ===== تخزين آمن ===== */
const store={
    get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v);}catch(e){return d;}},
    set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
};
/* الإصدارات السابقة حفظت بعض القيم كنص عادي */
(function migrate(){try{const t=localStorage.getItem('q_th');if(t==='dark'||t==='light')localStorage.setItem('q_th',JSON.stringify(t));
const r=localStorage.getItem('q_reciter');if(r&&r[0]!=='"')localStorage.setItem('q_reciter',JSON.stringify(r));}catch(e){}})();

/* ===== الحالة ===== */
let filter='all', curS=null, partMode='juz', searchMode='surahs', searchTimer=null;
let fs=store.get('q_fs',24), bks=store.get('q_bk',[]).map(Number);
let dark=store.get('q_th','light')==='dark';
let lastRead=store.get('q_last',null);
let completed=store.get('q_completed',[]).map(Number);
const $=id=>document.getElementById(id);

/* ===== التنقل بين الصفحات ===== */
function show(view){
    $('home').classList.toggle('hidden',view!=='home');
    $('reader').style.display=view==='reader'?'block':'none';
    $('bbar').classList.toggle('show',view==='reader');
    document.body.classList.toggle('reading',view==='reader');
    $('adhkarPage').classList.toggle('show',view==='adhkarPage');
    $('aboutPage').classList.toggle('show',view==='aboutPage');
    $('downloadsPage').classList.toggle('show',view==='downloadsPage');
    if(view!=='reader')stopPlay();
    if(view!=='adhkarPage')stopAdhkarAudio();
    refreshDlProgress();
}
function showPage(id){
    show(id); history.pushState({v:id},'');
    if(id==='adhkarPage')renderAdhkar();
    if(id==='downloadsPage')refreshDlUI();
    window.scrollTo({top:0});
}
function goHome(){
    if(history.state&&history.state.v){history.back();return;}
    homeView();
}
function homeView(){
    curS=null; show('home'); render(); renderContinue(); renderKhatma();
}
window.addEventListener('popstate',e=>{
    const v=e.state&&e.state.v;
    if(v==='reader'&&e.state.s){openS(e.state.s,{noPush:true});}
    else if(v==='adhkarPage'||v==='aboutPage'||v==='downloadsPage'){show(v);if(v==='adhkarPage')renderAdhkar();if(v==='downloadsPage')refreshDlUI();}
    else homeView();
});

/* ===== الأجزاء والأحزاب والأرباع ===== */
function setPart(m){
    partMode=m;
    document.querySelectorAll('.section-tab').forEach(b=>b.classList.toggle('on',b.dataset.part===m));
    renderParts();
}
function renderParts(){
    const g=$('partGrid'); const nm=s=>S[s-1].nm;
    let items;
    if(partMode==='juz'){items=JUZ.map(([j,s,a])=>({label:'الجزء '+j,s,a}));$('partCount').textContent='30 جزءًا';}
    else if(partMode==='hizb'){items=Array.from({length:60},(_,i)=>{const [s,a]=QUARTERS[i*4];return{label:'الحزب '+(i+1),s,a};});$('partCount').textContent='60 حزبًا';}
    else{items=QUARTERS.map(([s,a],i)=>({label:'ربع '+(i+1),s,a}));$('partCount').textContent='240 ربعًا';}
    g.innerHTML=items.map(it=>`<button class="part-btn" onclick="openAt(${it.s},${it.a})"><b>${it.label}</b><span>${nm(it.s)} • ${it.a}</span></button>`).join('');
}
function openAt(s,a){
    openS(s,{ayah:a});
}

/* ===== البحث ===== */
function setSearchMode(mode){
    searchMode=mode;
    $('tabSurahs').classList.toggle('on',mode==='surahs');
    $('tabAyahs').classList.toggle('on',mode==='ayahs');
    $('sinp').placeholder=mode==='ayahs'?'اكتب كلمة أو جزءًا من آية...':'ابحث عن سورة باسمها أو رقمها...';
    handleSearch();
}
function handleSearch(){
    clearTimeout(searchTimer);
    const q=$('sinp').value.trim();
    if(searchMode==='surahs'){
        $('searchResults').classList.remove('show'); $('list').classList.remove('hidden'); render(); return;
    }
    $('list').classList.toggle('hidden',!!q);
    if(!q){$('searchResults').classList.remove('show');return;}
    searchTimer=setTimeout(()=>searchAyahs(q),250);
}
function normArabic(v){
    return v.replace(/[ؐ-ًؚ-ٰٟۖ-ۭ]/g,'').replace(/[إأآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/ؤ/g,'و').replace(/ئ/g,'ي').replace(/ـ/g,'').replace(/\s+/g,' ');
}
let searchIndex=null;
function loadSearchIndex(){
    if(searchIndex)return Promise.resolve(searchIndex);
    return new Promise((ok,no)=>{
        const sc=document.createElement('script'); sc.src='quran-search.js';
        sc.onload=()=>{searchIndex=window.QURAN_SEARCH.map(sv=>sv.map(normArabic));ok(searchIndex);};
        sc.onerror=no; document.head.appendChild(sc);
    });
}
async function searchAyahs(q){
    const box=$('searchResults');
    box.classList.add('show');
    box.innerHTML='<div class="search-note"><i class="fas fa-spinner fa-spin"></i> جاري البحث...</div>';
    let idx; try{idx=await loadSearchIndex();}catch(e){box.innerHTML='<div class="search-note">تعذر تجهيز البحث</div>';return;}
    if($('sinp').value.trim()!==q)return;
    const nq=normArabic(q); const res=[]; let total=0;
    for(let s=0;s<114;s++)for(let a=0;a<idx[s].length;a++){
        if(idx[s][a].includes(nq)){total++; if(res.length<100)res.push([s+1,a+1]);}
    }
    if(!total){box.innerHTML='<div class="search-note"><p>لم يتم العثور على نتائج</p><small>جرّب كلمة أخرى أو اكتبها بدون تشكيل</small></div>';return;}
    box.innerHTML='<div class="search-note" style="padding:8px">عدد النتائج: '+total+(total>100?' (تظهر أول 100)':'')+'</div>'+
        res.map(([s,a])=>`<div class="search-result" onclick="openSearchResult(${s},${a})"><div class="sr-meta">سورة ${S[s-1].nm} • الآية ${a}</div><div class="sr-text">${verseText(s,a)}</div></div>`).join('');
}
function openSearchResult(s,a){
    $('sinp').value=''; setSearchMode('surahs'); openS(s,{ayah:a,flash:true});
}

/* ===== قائمة السور ===== */
function render(){
    const grid=$('sgrid'); const q=searchMode==='surahs'?$('sinp').value.trim():'';
    $('nores').classList.add('hidden'); $('nosave').classList.add('hidden');
    let list=[...S];
    if(filter==='meccan')list=list.filter(s=>s.t==='meccan');
    else if(filter==='medinan')list=list.filter(s=>s.t==='medinan');
    else if(filter==='saved')list=list.filter(s=>bks.includes(s.n));
    if(q){const nq=normArabic(q);list=list.filter(s=>normArabic(s.nm).includes(nq)||s.n.toString()===q);}
    if(!list.length){grid.innerHTML='';(filter==='saved'&&!q?$('nosave'):$('nores')).classList.remove('hidden');return;}
    grid.innerHTML=list.map((s,i)=>{
        const isB=bks.includes(s.n), isD=completed.includes(s.n);
        return `<div class="sc" style="animation-delay:${Math.min(i,30)*.012}s" onclick="openS(${s.n})" tabindex="0" role="button" aria-label="سورة ${s.nm}">
            <div class="sn">${s.n}</div>
            <div class="si"><div class="snn">${s.nm}</div>
                <div class="sm"><span>${s.t==='meccan'?'مكية':'مدنية'}</span><span>${s.a} آية</span>${isD?'<span class="ck"><i class="fas fa-circle-check"></i> مقروءة</span>':''}${isDownloaded(s.n)?'<span class="ac"><i class="fas fa-headphones"></i> محمّلة</span>':''}</div></div>
            <div class="sa"><button onclick="event.stopPropagation();toggleBkList(${s.n})" class="${isB?'bk':''}" aria-label="حفظ"><i class="${isB?'fas':'far'} fa-bookmark"></i></button></div>
        </div>`;
    }).join('');
}
function setF(f){
    filter=f; document.querySelectorAll('.cb[data-f]').forEach(b=>b.classList.toggle('on',b.dataset.f===f)); render();
}

/* ===== القارئ ===== */
function openS(num,opt={}){
    const s=S[num-1]; if(!s)return;
    stopPlay(); curS=s;
    if(!opt.noPush)history.pushState({v:'reader',s:num},'');
    show('reader');
    $('rname').textContent='سورة '+s.nm;
    $('rmeta').textContent=(s.t==='meccan'?'مكية':'مدنية')+' • '+s.a+' آية';
    $('bism').style.display=(num===1||num===9)?'none':'block';
    updateBkBtn(); updateDoneBtn(); updateDlBtn();
    const c=$('vcont'); let h='';
    const verses=window.QURAN_TEXT[num-1];
    const lastHere=lastRead&&lastRead.surah===num?lastRead.ayah:0;
    verses.forEach((t,i)=>{
        const n=i+1;
        h+=`<span class="vv${n===lastHere?' reading':''}" id="ayah-${n}" data-n="${n}">${t}</span>`+
           `<span class="vn"><svg viewBox="0 0 30 30" fill="none" stroke="currentColor"><path d="M15 1L29 15L15 29L1 15Z" stroke-width="1.2"/><circle cx="15" cy="15" r="8" stroke-width=".8"/></svg><span>${n}</span></span> `;
    });
    c.innerHTML=h; c.style.fontSize=fs+'px'; $('flbl').textContent=fs;
    const target=opt.ayah||lastHere;
    if(target>1){
        const el=$('ayah-'+target);
        if(opt.ayah&&!opt.flash){setLast(num,opt.ayah,true);}
        setTimeout(()=>{el&&el.scrollIntoView({block:'center'});if(opt.flash&&el){el.classList.add('now');setTimeout(()=>el.classList.remove('now'),2500);}},60);
    }else window.scrollTo({top:0});
}
/* ضغطة: نسخ الآية • ضغطتان: حفظ موضع القراءة */
let tapTimer=null,tapN=0;
document.addEventListener('click',e=>{
    const v=e.target.closest('.vv'); if(!v||!curS)return;
    const n=+v.dataset.n;
    if(tapTimer&&tapN===n){clearTimeout(tapTimer);tapTimer=null;markRead(n);return;}
    tapN=n; tapTimer=setTimeout(()=>{tapTimer=null;copyV(n);},320);
});
function setLast(s,a,silent){
    lastRead={surah:s,ayah:a,ts:Date.now()}; store.set('q_last',lastRead);
    document.querySelectorAll('.vv.reading').forEach(x=>x.classList.remove('reading'));
    $('ayah-'+a)?.classList.add('reading');
    if(!silent)toast('تم حفظ موضع القراءة عند الآية '+a);
}
function markRead(n){ if(curS)setLast(curS.n,n); }
function renderContinue(){
    const box=$('continueBox');
    if(!lastRead||!S[lastRead.surah-1]){box.classList.add('hidden');return;}
    const s=S[lastRead.surah-1];
    box.classList.remove('hidden');
    box.innerHTML=`<div class="ct"><span class="ic"><i class="fas fa-book-open"></i></span><div><strong>متابعة القراءة</strong><small>سورة ${s.nm} • الآية ${lastRead.ayah}</small></div></div><button onclick="openS(${s.n})">متابعة <i class="fas fa-arrow-left"></i></button>`;
}
function copyV(n){
    if(!curS)return;
    const t=verseText(curS.n,n)+' ﴿'+n+'﴾ [سورة '+curS.nm+']';
    const done=()=>toast('تم نسخ الآية '+n+' • اضغط مرتين لحفظ موضع القراءة');
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(done,()=>fallbackCopy(t,done));
    else fallbackCopy(t,done);
}
function fallbackCopy(t,done){
    const ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');done();}catch(e){toast('تعذر النسخ');}ta.remove();
}
function navS(d){ if(!curS)return; const nn=curS.n+d; if(nn>=1&&nn<=114)openS(nn,{noPush:true}); history.replaceState({v:'reader',s:curS.n},''); }
function chFont(d){
    fs=Math.max(16,Math.min(48,fs+d)); store.set('q_fs',fs);
    $('flbl').textContent=fs; $('vcont').style.fontSize=fs+'px';
}

/* ===== الختمة ===== */
function renderKhatma(){
    const count=new Set(completed).size, pct=Math.round(count/114*100);
    $('kcount').textContent=count+' من 114 سورة'; $('kfill').style.width=pct+'%'; $('kpercent').textContent=pct+'%';
}
function updateDoneBtn(){
    if(!curS)return; const b=$('donebtn'), d=completed.includes(curS.n);
    b.querySelector('i').className=(d?'fas':'far')+' fa-circle-check'; b.style.color=d?'var(--gd)':'';
}
function toggleDoneSurah(){
    if(!curS)return; const i=completed.indexOf(curS.n);
    if(i>-1){completed.splice(i,1);toast('تمت إزالة السورة من الختمة');}
    else{completed.push(curS.n);toast('تم تسجيل إتمام سورة '+curS.nm);
        if(new Set(completed).size===114)setTimeout(()=>toast('مبارك! أتممت ختمة القرآن الكريم 🤍'),2600);}
    store.set('q_completed',completed); renderKhatma(); updateDoneBtn();
}
function resetKhatma(){
    if(!completed.length){toast('الختمة جديدة بالفعل');return;}
    if(confirm('هل تريد بدء ختمة جديدة ومسح السور المكتملة؟')){completed=[];store.set('q_completed',[]);renderKhatma();render();toast('بدأت ختمة جديدة');}
}

/* ===== المحفوظات ===== */
function toggleBkList(n){
    const i=bks.indexOf(n);
    if(i>-1){bks.splice(i,1);toast('تمت الإزالة من المحفوظات');}else{bks.push(n);toast('تمت الإضافة إلى المحفوظات');}
    store.set('q_bk',bks); render();
}
function toggleBk(){ if(!curS)return; toggleBkList(curS.n); updateBkBtn(); }
function updateBkBtn(){
    if(!curS)return; const b=$('bkbtn'), is=bks.includes(curS.n);
    b.querySelector('i').className=(is?'fas':'far')+' fa-bookmark'; b.style.color=is?'var(--gd)':'';
}

/* ===== التلاوة: آيةً آيةً، مع البسملة في أول السورة ===== */
const RECITERS={
'ar.alafasy':{name:'مشاري راشد العفاسي',bitrate:128},
'ar.abdulbasitmurattal':{name:'عبد الباسط عبد الصمد',bitrate:192},
'ar.minshawi':{name:'محمد صديق المنشاوي',bitrate:128}
};
let reciter=store.get('q_reciter','ar.alafasy');
if(reciter==='ar.abdulbasit')reciter='ar.abdulbasitmurattal';
if(!RECITERS[reciter])reciter='ar.alafasy';
const reciterInfo=()=>RECITERS[reciter];
const audioUrl=(g,r=reciter)=>'https://cdn.islamic.network/quran/audio/'+RECITERS[r].bitrate+'/'+r+'/'+g+'.mp3';
let playing=false, playQueue=[], playIndex=0, playToken=0;

function initReciters(){
    const opts=Object.entries(RECITERS).map(([k,v])=>`<option value="${k}">${v.name}</option>`).join('');
    $('reciterSel').innerHTML=opts; $('dlReciter').innerHTML=opts;
    syncReciterUI();
}
function syncReciterUI(){ $('reciterSel').value=reciter; $('dlReciter').value=reciter; $('reciterLabel').textContent='تلاوة الشيخ '+reciterInfo().name; }
function changeReciter(v){
    if(!RECITERS[v])return; const was=playing; stopPlay(); reciter=v; store.set('q_reciter',v); syncReciterUI();
    loadDownloaded(v); refreshDlUI(); render();
    toast('تم اختيار '+reciterInfo().name); if(was&&curS)togglePlay();
}
function buildQueue(s,from){
    const q=[];
    if(from===1&&s!==1&&s!==9)q.push({g:1,ayah:0});
    for(let a=from;a<=S[s-1].a;a++)q.push({g:globalAyah(s,a),ayah:a});
    return q;
}
function highlightNow(a){
    document.querySelectorAll('.vv.now').forEach(x=>x.classList.remove('now'));
    if(a){const el=$('ayah-'+a); if(el){el.classList.add('now'); el.scrollIntoView({behavior:'smooth',block:'center'});}}
}
async function playNext(token){
    if(token!==playToken||!playing)return;
    const au=$('audio');
    if(playIndex>=playQueue.length){const nm=curS.nm;stopPlay();toast('اكتملت تلاوة سورة '+nm);return;}
    const it=playQueue[playIndex]; highlightNow(it.ayah);
    const src=await resolveAudio(it.g);
    if(token!==playToken||!playing)return;
    au.src=src;
    const p=au.play(); if(p&&p.catch)p.catch(err=>{ if(token===playToken&&err.name!=='AbortError'){toast(audioErrorMsg());stopPlay();} });
    // تجهيز الآية التالية مسبقاً لتقليل التقطيع (فقط إذا كانت السورة غير محمّلة)
    const nx=playQueue[playIndex+1]; if(nx&&!isDownloaded(curS.n)&&navigator.onLine){const pre=new Audio();pre.preload='auto';pre.src=audioUrl(nx.g);}
}
function audioErrorMsg(){
    if(curS&&!isDownloaded(curS.n))return 'تعذر تشغيل التلاوة. بدون إنترنت تحتاج تحمّل السورة أولاً من زر التحميل ⬇';
    return 'تعذر تشغيل التلاوة';
}
function togglePlay(){
    if(!curS)return;
    if(playing){stopPlay();return;}
    if(!navigator.onLine&&!isDownloaded(curS.n)){toast('أنت بدون إنترنت وهذه السورة غير محمّلة. اضغط زر التحميل ⬇ عندما يتوفر الإنترنت لتسمعها بعدها بدون إنترنت');return;}
    // يبدأ من موضع القراءة إذا كان محفوظاً في هذه السورة
    const from=(lastRead&&lastRead.surah===curS.n&&lastRead.ayah>1)?lastRead.ayah:1;
    playQueue=buildQueue(curS.n,from); playIndex=0; const token=++playToken; playing=true;
    const au=$('audio'), pb=$('plbtn');
    $('aplayer').classList.add('show'); pb.classList.add('ply'); pb.querySelector('i').className='fas fa-pause';
    au.onended=()=>{if(token!==playToken)return; playIndex++; playNext(token);};
    au.onerror=()=>{if(token!==playToken||!playing)return; toast(audioErrorMsg()); stopPlay();};
    if(from>1)toast('التلاوة من الآية '+from+' (موضع القراءة)');
    playNext(token);
}
function stopPlay(){
    playToken++; const au=$('audio'), pb=$('plbtn');
    if(au){au.onended=null;au.onerror=null;au.pause();au.removeAttribute('src');au.load();}
    playQueue=[];playIndex=0;playing=false; highlightNow(0);
    if(pb){pb.classList.remove('ply');pb.querySelector('i').className='fas fa-play';}
    $('aplayer')?.classList.remove('show');
}

/* ===== الأذكار ===== */
let adhkarTab=store.get('q_adhkar_tab','morning');
let adhkarPlay={token:0,id:null};
function adhkarCounts(){ const d=new Date().toDateString(); const c=store.get('q_adhkar_counts',{}); return c.day===d?c:{day:d}; }
function renderAdhkar(){
    $('adhkarTabs').innerHTML=window.ADHKAR_TABS.map(t=>`<button class="adhkar-tab${t.id===adhkarTab?' on':''}" onclick="setAdhkar('${t.id}')">${t.label}</button>`).join('');
    const counts=adhkarCounts();
    $('adhkarList').innerHTML=window.ADHKAR[adhkarTab].map((d,i)=>{
        const key=adhkarTab+':'+i, left=Math.max(0,d.count-(counts[key]||0));
        let body;
        if(d.q){
            body='<div class="adhkar-text quran">'+d.q.map(([s,f,t])=>{
                let parts=[]; for(let a=f;a<=t;a++)parts.push(verseText(s,a)+'<span class="qsep">﴿'+a+'﴾</span>');
                return (d.basmala?'<span style="color:var(--gd)">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span><br>':'')+parts.join(' ');
            }).join('<br><br>')+'</div>';
        }else body='<div class="adhkar-text">'+d.text+'</div>';
        const hasAudio=!!(d.q||d.audio);
        const isPlaying=adhkarPlay.id===key;
        return `<div class="adhkar-card${left===0?' done':''}" id="dk-${i}"><h3>${d.title}</h3>${body}
          <div class="adhkar-source">${d.count>1?'يُقرأ '+d.count+' مرات — ':''}${d.src||''}</div>
          <div class="adhkar-actions">
            <button class="adhkar-count${left===0?' zero':''}" onclick="countDhikr(${i})">${left===0?'✓ تمّ':'المتبقي: '+left}</button>
            ${hasAudio?`<button class="adhkar-action${isPlaying?' playing':''}" onclick="playDhikr(${i})"><i class="fas fa-${isPlaying?'stop':'volume-high'}"></i> ${isPlaying?'إيقاف':'استماع'}</button>`:''}
            ${left!==d.count?`<button class="adhkar-action" onclick="resetDhikr(${i})" aria-label="إعادة العد"><i class="fas fa-rotate-left"></i></button>`:''}
          </div></div>`;
    }).join('');
}
function setAdhkar(k){ stopAdhkarAudio(); adhkarTab=k; store.set('q_adhkar_tab',k); renderAdhkar(); }
function countDhikr(i){
    const d=window.ADHKAR[adhkarTab][i], c=adhkarCounts(), key=adhkarTab+':'+i;
    if((c[key]||0)>=d.count)return;
    c[key]=(c[key]||0)+1; store.set('q_adhkar_counts',c);
    if(navigator.vibrate)try{navigator.vibrate(25);}catch(e){}
    renderAdhkar();
}
function resetDhikr(i){ const c=adhkarCounts(); delete c[adhkarTab+':'+i]; store.set('q_adhkar_counts',c); renderAdhkar(); }
function playDhikr(i){
    const key=adhkarTab+':'+i, d=window.ADHKAR[adhkarTab][i];
    if(adhkarPlay.id===key){stopAdhkarAudio();renderAdhkar();return;}
    stopAdhkarAudio();
    let items=[];
    if(d.q){d.q.forEach(([s,f,t])=>{ if(d.basmala)items.push(1); for(let a=f;a<=t;a++)items.push(globalAyah(s,a)); });}
    else if(d.audio)items=[d.audio];
    if(!items.length)return;
    const token=++adhkarPlay.token; adhkarPlay.id=key; let k=0;
    const au=$('adhkarAudio');
    const next=()=>{
        if(token!==adhkarPlay.token)return;
        if(k>=items.length){adhkarPlay.id=null;renderAdhkar();return;}
        const it=items[k++];
        (typeof it==='number'?resolveAudio(it):Promise.resolve(it)).then(src=>{
        if(token!==adhkarPlay.token)return;
        au.src=src; const p=au.play();
        if(p&&p.catch)p.catch(err=>{if(token===adhkarPlay.token&&err.name!=='AbortError'){toast(adhkarAudioErr());stopAdhkarAudio();renderAdhkar();}});
        });
    };
    au.onended=next;
    au.onerror=()=>{if(token!==adhkarPlay.token)return;toast(adhkarAudioErr());stopAdhkarAudio();renderAdhkar();};
    renderAdhkar(); next();
}
function stopAdhkarAudio(){
    adhkarPlay.token++; adhkarPlay.id=null;
    const au=$('adhkarAudio'); if(au){au.onended=null;au.onerror=null;au.pause();au.removeAttribute('src');au.load();}
}

/* ===== تحميل التلاوات للاستماع بدون إنترنت =====
   في تطبيق الأندرويد: الملفات تُحفظ داخل التطبيق عن طريق QuranNative (AudioStore.java).
   في المتصفح: تُحفظ في ذاكرة المتصفح (Cache Storage). */
const NATIVE=window.QuranNative||null;
const LOCAL_AUDIO='https://appassets.androidplatform.net/audio/';
const RECITER_MB={'ar.alafasy':1100,'ar.abdulbasitmurattal':2300,'ar.minshawi':1300}; // حجم تقريبي للمصحف كاملاً
const TEXT_LEN=window.QURAN_TEXT.map(v=>v.reduce((n,t)=>n+t.length,0));
const TEXT_TOTAL=TEXT_LEN.reduce((a,b)=>a+b,0);
const surahMB=(s,r=reciter)=>RECITER_MB[r]*TEXT_LEN[s-1]/TEXT_TOTAL;
const fmtMB=mb=>mb>=1000?(mb/1000).toFixed(1)+' غيغابايت':(mb<1?'أقل من 1 ميغابايت':Math.round(mb)+' ميغابايت');
const surahOf=g=>{let lo=1,hi=114;while(lo<hi){const m=(lo+hi+1)>>1;if(OFF[m-1]<g)lo=m;else hi=m-1;}return lo;};
const DL_CACHE=r=>'quran-dl-'+r;
let dlState={}, dlJob=null, blobUrls=[];

function dlSet(r=reciter){return dlState[r]||(dlState[r]=new Set());}
function loadDownloaded(r=reciter){
    if(NATIVE){try{dlState[r]=new Set(JSON.parse(NATIVE.downloaded(r)));}catch(e){dlState[r]=new Set();}}
    else dlState[r]=new Set(store.get('q_dl_'+r,[]));
    return dlState[r];
}
function saveWebDl(r){ if(!NATIVE)store.set('q_dl_'+r,[...dlSet(r)]); }
function isDownloaded(s,r=reciter){return dlSet(r).has(s);}
function surahFiles(s){const a=[];if(s!==1&&s!==9)a.push(1);for(let i=1;i<=S[s-1].a;i++)a.push(globalAyah(s,i));return a;}

/* رابط ملف الآية: من الجهاز إذا كانت محمّلة، وإلا من الإنترنت */
async function resolveAudio(g){
    const have=g===1?dlSet().size>0:isDownloaded(surahOf(g));
    if(have){
        if(NATIVE)return LOCAL_AUDIO+reciter+'/'+g+'.mp3';
        try{
            const c=await caches.open(DL_CACHE(reciter)); const r=await c.match(audioUrl(g));
            if(r){const u=URL.createObjectURL(await r.blob()); blobUrls.push(u); if(blobUrls.length>8)URL.revokeObjectURL(blobUrls.shift()); return u;}
        }catch(e){}
    }
    return audioUrl(g);
}
function adhkarAudioErr(){ return navigator.onLine?'تعذر تشغيل الصوت':'بدون إنترنت: حمّل سورة البقرة والمعوذات من صفحة «تحميل التلاوات» لتسمع هذه الأذكار'; }

function startDownload(surahs){
    if(dlJob){toast('يوجد تحميل جارٍ، انتظر حتى ينتهي أو أوقفه');return;}
    surahs=surahs.filter(s=>!isDownloaded(s));
    if(!surahs.length){toast('محمّلة مسبقاً');return;}
    if(!navigator.onLine){toast('التحميل يحتاج اتصالاً بالإنترنت');return;}
    const total=surahs.reduce((n,s)=>n+surahFiles(s).length,0);
    dlJob={reciter,surahs,done:0,total,cancelled:false};
    refreshDlUI();
    if(NATIVE){
        try{NATIVE.download(reciter,String(RECITERS[reciter].bitrate),JSON.stringify(surahs.map(s=>[s,surahFiles(s)])));}
        catch(e){finishDl(false,'تعذر بدء التحميل');}
    }else{
        try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist();}catch(e){}
        webDownload(dlJob);
    }
}
async function webDownload(job){
    let cache;
    try{cache=await caches.open(DL_CACHE(job.reciter));}catch(e){finishDl(false,'التحميل غير مدعوم في هذا المتصفح. استخدم تطبيق الأندرويد');return;}
    for(const s of job.surahs){
        for(const g of surahFiles(s)){
            if(job.cancelled){finishDl(false,null,true);return;}
            const url=audioUrl(g,job.reciter);
            if(!(await cache.match(url))){
                let ok=false;
                for(let i=0;i<3&&!ok&&!job.cancelled;i++){
                    try{const r=await fetch(url,{mode:'cors'}); if(r.ok){await cache.put(url,r); ok=true;}}catch(e){}
                    if(!ok)await new Promise(res=>setTimeout(res,800*(i+1)));
                }
                if(job.cancelled){finishDl(false,null,true);return;}
                if(!ok){finishDl(false,'تعذر تحميل بعض الملفات. تحقق من الإنترنت وحاول مرة أخرى (يكمل من حيث توقف)');return;}
            }
            job.done++; refreshDlProgress();
        }
        dlSet(job.reciter).add(s); saveWebDl(job.reciter); onSurahDownloaded();
    }
    finishDl(true);
}
/* أحداث التحميل من تطبيق الأندرويد */
window.__audioEvt=function(e){
    if(!dlJob)return;
    if(e.t==='p'){dlJob.done=e.done; dlJob.total=e.total; refreshDlProgress();}
    else if(e.t==='s'){dlSet(dlJob.reciter).add(e.s); onSurahDownloaded();}
    else if(e.t==='e'){finishDl(!!e.ok, e.ok?null:(e.err==='space'?'المساحة غير كافية على الجهاز':'تعذر تحميل بعض الملفات. تحقق من الإنترنت وحاول مرة أخرى (يكمل من حيث توقف)'), !!e.cancelled);}
};
function onSurahDownloaded(){ refreshDlUI(); if($('home')&&!$('home').classList.contains('hidden'))render(); }
function finishDl(ok,err,cancelled){
    const job=dlJob; dlJob=null; refreshDlUI(); render();
    if(!job)return;
    if(cancelled)toast('تم إيقاف التحميل');
    else if(ok)toast(job.surahs.length===1?'تم تحميل سورة '+S[job.surahs[0]-1].nm+' ✓ تقدر تسمعها بدون إنترنت':'اكتمل تحميل '+job.surahs.length+' سورة ✓');
    else toast(err||'تعذر التحميل');
}
function cancelDownload(){ if(!dlJob)return; dlJob.cancelled=true; if(NATIVE)try{NATIVE.cancel();}catch(e){} }
async function deleteSurahAudio(s,r=reciter){
    const files=surahFiles(s).filter(g=>g!==1);
    if(NATIVE){try{NATIVE.remove(r,JSON.stringify(files),s);}catch(e){}}
    else{try{const c=await caches.open(DL_CACHE(r)); await Promise.all(files.map(g=>c.delete(audioUrl(g,r))));}catch(e){}}
    dlSet(r).delete(s); saveWebDl(r); refreshDlUI(); render();
    toast('تم حذف تلاوة سورة '+S[s-1].nm+' من الجهاز');
}
async function deleteAllAudio(r=reciter){
    if(NATIVE){try{NATIVE.removeAll(r);}catch(e){}}
    else{try{await caches.delete(DL_CACHE(r));}catch(e){}}
    dlState[r]=new Set(); saveWebDl(r); refreshDlUI(); render();
    toast('تم حذف كل تحميلات '+RECITERS[r].name);
}

/* زر التحميل في صفحة السورة */
function updateDlBtn(){
    if(!curS)return; const b=$('dlbtn'); if(!b)return; const s=curS.n;
    b.classList.remove('dl-ok');
    if(dlJob&&dlJob.reciter===reciter&&dlJob.surahs.includes(s)){
        b.innerHTML='<span class="dlpct">'+Math.floor(dlJob.done/dlJob.total*100)+'%</span>'; b.title='جاري التحميل • اضغط للإيقاف';
    }else if(isDownloaded(s)){
        b.innerHTML='<i class="fas fa-headphones"></i>'; b.classList.add('dl-ok'); b.title='التلاوة محمّلة وتعمل بدون إنترنت • اضغط للحذف';
    }else{
        b.innerHTML='<i class="fas fa-download"></i>'; b.title='تحميل تلاوة السورة للاستماع بدون إنترنت';
    }
}
function toggleSurahDownload(){
    if(!curS)return; const s=curS.n;
    if(dlJob){ if(dlJob.reciter===reciter&&dlJob.surahs.includes(s))cancelDownload(); else toast('يوجد تحميل جارٍ، انتظر حتى ينتهي'); return; }
    if(isDownloaded(s)){ if(confirm('حذف تلاوة سورة '+curS.nm+' بصوت '+reciterInfo().name+' من الجهاز؟'))deleteSurahAudio(s); return; }
    startDownload([s]);
    if(dlJob)toast('جاري تحميل سورة '+curS.nm+' بصوت '+reciterInfo().name+' (حوالي '+fmtMB(surahMB(s))+')');
}

/* صفحة تحميل التلاوات */
function remainingMB(){ let mb=0; for(let s=1;s<=114;s++)if(!isDownloaded(s))mb+=surahMB(s); return mb; }
function refreshDlProgress(){
    const on=!!dlJob, pct=on?Math.floor(dlJob.done/Math.max(1,dlJob.total)*100):0;
    const p=$('dlProgress'); if(p)p.classList.toggle('hidden',!on);
    if(on){
        $('dlFill').style.width=pct+'%';
        $('dlText').textContent=(dlJob.surahs.length===1?'سورة '+S[dlJob.surahs[0]-1].nm:'تحميل '+dlJob.surahs.length+' سورة')+' • '+pct+'% • '+RECITERS[dlJob.reciter].name;
    }
    const chip=$('dlChip');
    if(chip){ chip.classList.toggle('show',on&&!$('downloadsPage').classList.contains('show')); if(on)chip.querySelector('span').textContent='جاري التحميل '+pct+'%'; }
    updateDlBtn();
}
function refreshDlUI(){
    refreshDlProgress();
    const list=$('dlList'); if(!list)return;
    const n=dlSet().size, rem=remainingMB();
    $('dlSummary').innerHTML='<b>'+n+'</b> من 114 سورة محمّلة بصوت '+reciterInfo().name;
    $('dlAllBtn').innerHTML='<i class="fas fa-download"></i> '+(n===114?'القرآن كامل محمّل ✓':(n?'تحميل باقي السور':'تحميل القرآن كاملاً')+' (حوالي '+fmtMB(rem)+')');
    $('dlAllBtn').disabled=n===114||!!dlJob;
    $('dlDelAll').classList.toggle('hidden',n===0);
    if(!$('downloadsPage').classList.contains('show'))return;
    list.innerHTML=S.map(s=>{
        const d=isDownloaded(s.n), busy=dlJob&&dlJob.reciter===reciter&&dlJob.surahs.includes(s.n)&&!d;
        return `<div class="dl-row"><span class="sn">${s.n}</span><div class="si"><div class="dl-name">${s.nm}</div><div class="sm">${fmtMB(surahMB(s.n))}</div></div>`+
          (d?`<button class="dl-act ok" onclick="if(confirm('حذف تلاوة سورة ${s.nm}؟'))deleteSurahAudio(${s.n})" aria-label="حذف"><i class="fas fa-circle-check"></i> محمّلة</button>`
           :busy?`<button class="dl-act" onclick="cancelDownload()"><i class="fas fa-spinner fa-spin"></i> إيقاف</button>`
           :`<button class="dl-act" onclick="startDownload([${s.n}])" ${dlJob?'disabled':''}><i class="fas fa-download"></i> تحميل</button>`)+`</div>`;
    }).join('');
}
function downloadAllConfirm(){
    const rem=remainingMB();
    if(confirm('سيتم تحميل '+(dlSet().size?'باقي السور':'القرآن كاملاً')+' بصوت '+reciterInfo().name+'، الحجم حوالي '+fmtMB(rem)+'.\nيُفضّل استخدام الواي فاي وإبقاء التطبيق مفتوحاً حتى ينتهي.\nهل تريد المتابعة؟'))
        startDownload(S.map(s=>s.n));
}
function deleteAllConfirm(){ if(confirm('حذف كل التلاوات المحمّلة بصوت '+reciterInfo().name+'؟'))deleteAllAudio(); }

/* ===== الوضع الليلي ===== */
function applyTheme(){
    document.documentElement.setAttribute('data-theme',dark?'dark':'light');
    $('thm').querySelector('i').className='fas fa-'+(dark?'sun':'moon');
    document.querySelector('meta[name=theme-color]').content=dark?'#0D1A12':'#1B6B3A';
}
function toggleTheme(){ dark=!dark; store.set('q_th',dark?'dark':'light'); applyTheme(); }

/* ===== التنبيهات ===== */
let tt; function toast(m){ const t=$('toast'); t.textContent=m; t.classList.add('show'); clearTimeout(tt); tt=setTimeout(()=>t.classList.remove('show'),2600); }

/* ===== لوحة المفاتيح ===== */
document.addEventListener('keydown',e=>{
    if(e.key==='Enter'&&e.target.classList&&e.target.classList.contains('sc')){e.target.click();return;}
    if(!curS||e.target.tagName==='INPUT'||e.target.tagName==='SELECT')return;
    if(e.key==='Escape')goHome();
    if(e.key==='ArrowLeft')navS(1);
    if(e.key==='ArrowRight')navS(-1);
    if(e.key==='+'||e.key==='=')chFont(2);
    if(e.key==='-')chFont(-2);
});

/* ===== بدء التطبيق ===== */
(function init(){
    $('appVersion').textContent=APP_VERSION;
    applyTheme(); initReciters(); loadDownloaded(); renderParts(); renderKhatma(); renderContinue(); render();
    history.replaceState({v:null},'');
    if('serviceWorker' in navigator && location.protocol==='https:' && location.hostname!=='appassets.androidplatform.net'){navigator.serviceWorker.register('sw.js').catch(()=>{});}
})();
