/* ================= Grafiken (SVG, Raster 400 × 300) ================= */
const tri=(x,y,dir,cls)=>{ const s=7, p={up:[[x,y],[x-s/1.6,y+s],[x+s/1.6,y+s]],right:[[x,y],[x-s,y-s/1.6],[x-s,y+s/1.6]],down:[[x,y],[x-s/1.6,y-s],[x+s/1.6,y-s]]}[dir]; return `<polygon class="${cls}" points="${p.map(q=>q.join(",")).join(" ")}"/>`; };
const ln=(x1,y1,x2,y2,cls)=>`<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
const tx=(x,y,s,cls="",anchor="start",size)=>`<text class="${cls}" x="${x}" y="${y}" text-anchor="${anchor}"${size?` style="font-size:${size}px"`:""}>${s}</text>`;
const dot=(x,y,cls="dot")=>`<circle class="${cls}" cx="${x}" cy="${y}" r="5"/>`;
function axes(xl,yl){ return ln(50,260,384,260,"ax")+tri(390,260,"right","arrowhead")+ln(50,260,50,16,"ax")+tri(50,10,"up","arrowhead")+tx(392,282,xl,"","end")+tx(58,18,yl); }
const GFX={
  g1:{base:()=>axes("Y<tspan baseline-shift='super' font-size='9'>A</tspan>, Y<tspan baseline-shift='super' font-size='9'>VT</tspan>","Y<tspan baseline-shift='super' font-size='9'>N</tspan>")
      +ln(50,260,285,25,"base")+tx(86,250,"45°: Y<tspan baseline-shift='super' font-size='9'>A</tspan> = Y","bt","start",12)
      +ln(50,200,380,35,"base")+tx(352,58,"Y<tspan baseline-shift='super' font-size='9'>N</tspan>","bt")+tx(2,204,"c₀+I+G","","start",11)
      +ln(170,140,170,260,"ax dash")+dot(170,140)+tx(160,134,"A","bt","end")+tx(170,278,"Y*","bt","middle"),
      sol:()=>ln(50,160,330,20,"sol")+tx(300,52,"Y<tspan baseline-shift='super' font-size='9'>N</tspan>′","st")+tx(2,164,"c₀+I+G′","st","start",11)
      +ln(64,197,64,168,"sol thin")+tri(64,161,"up","sarrow")+tx(70,180,"ΔG","st")
      +ln(250,60,250,260,"sol dash thin")+dot(250,60,"sdot")+tx(244,52,"B","st","end")+tx(252,278,"Y*neu","st","middle")
      +ln(176,240,240,240,"sol thin")+tri(246,240,"right","sarrow")+tx(208,234,"ΔY > ΔG","st","middle",11)},
  g2:{base:()=>axes("Y","i")+ln(100,40,330,230,"base")+tx(334,232,"Y<tspan baseline-shift='super' font-size='9'>N</tspan> = Y<tspan baseline-shift='super' font-size='9'>A</tspan>","bt")
      +ln(220,24,220,260,"ax dash")+tx(220,278,"Y<tspan baseline-shift='sub' font-size='9'>POT</tspan>","bt","middle")
      +ln(50,139,380,139,"base")+tx(42,143,"i₀","bt","end")+dot(220,139)+tx(228,132,"A","bt"),
      sol:()=>ln(50,48,270,230,"sol")+tx(80,88,"Y<tspan baseline-shift='super' font-size='9'>N</tspan>′","st","end")
      +dot(160,139,"sdot")+tx(152,158,"B","st","end")
      +ln(160,248,220,248,"sol thin")+ln(160,242,160,254,"sol thin")+ln(220,242,220,254,"sol thin")+tx(190,242,"Lücke","st","middle",11)
      +ln(50,189,380,189,"sol")+tx(42,193,"i₁","st","end")+dot(220,189,"sdot")+tx(212,208,"C","st","end")
      +ln(360,146,360,178,"sol thin")+tri(360,185,"down","sarrow")},
  g3:{base:()=>axes("Y","i")+ln(150,28,150,250,"base")+tx(158,40,"Y<tspan baseline-shift='super' font-size='9'>N</tspan> = Y<tspan baseline-shift='super' font-size='9'>A</tspan>","bt")
      +ln(270,24,270,260,"ax dash")+tx(270,278,"Y<tspan baseline-shift='sub' font-size='9'>POT</tspan>","bt","middle")
      +ln(50,150,380,150,"base")+tx(42,154,"i₀","bt","end")+dot(150,150),
      sol:()=>ln(50,215,380,215,"sol")+tx(42,219,"i₁","st","end")+dot(150,215,"sdot")+tx(158,236,"Output unverändert","st","start",11)
      +ln(270,28,270,250,"sol")+tx(276,48,"nach Fiskal-","st","start",11)+tx(276,62,"politik","st","start",11)
      +ln(160,100,256,100,"sol thin")+tri(263,100,"right","sarrow")}
};
const figSVG=(id,sol=true)=>`<svg class="fig" viewBox="0 0 400 300" role="img" aria-label="Grafik">${GFX[id].base()}${sol?GFX[id].sol():""}</svg>`;

/* Zeichenfläche für den Stift, wiederverwendbar */
function drawSurface(c,strokes){
  const ctx=c.getContext("2d"); let penSeen=false, cur=null;
  const color=()=>getComputedStyle(document.documentElement).getPropertyValue("--gold").trim()||"#A87B1F";
  function size(){ const r=c.getBoundingClientRect(), dpr=window.devicePixelRatio||1; c.width=r.width*dpr; c.height=r.height*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); draw(); }
  function draw(){ const r=c.getBoundingClientRect(); ctx.clearRect(0,0,r.width,r.height); ctx.lineCap="round"; ctx.lineJoin="round"; ctx.strokeStyle=color();
    for(const s of strokes){ for(let i=1;i<s.length;i++){ ctx.lineWidth=s[i][2]; ctx.beginPath(); ctx.moveTo(s[i-1][0]*r.width,s[i-1][1]*r.height); ctx.lineTo(s[i][0]*r.width,s[i][1]*r.height); ctx.stroke(); } } }
  const pt=e=>{ const r=c.getBoundingClientRect(); const p=e.pressure&&e.pointerType==="pen"?e.pressure:.5; return [(e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height,1.2+p*2.6]; };
  c.onpointerdown=e=>{ if(e.pointerType==="pen") penSeen=true; if(penSeen&&e.pointerType==="touch") return; cur=[pt(e)]; strokes.push(cur); try{c.setPointerCapture(e.pointerId);}catch(x){} };
  c.onpointermove=e=>{ if(!cur) return; const evs=e.getCoalescedEvents?e.getCoalescedEvents():[e]; for(const ev of evs) cur.push(pt(ev)); draw(); };
  c.onpointerup=c.onpointercancel=()=>{ cur=null; };
  size(); window.addEventListener("resize",size);
  return {undo(){ strokes.pop(); draw(); }, clear(){ strokes.length=0; draw(); }};
}

/* ================= Fortschritt ================= */
function lessonState(id){ return (state.lessons||{})[id]; }
function cardBox(id){ return (state.box||{})[id]||0; }
function chapterProgress(n){
  const L=LESSONS[n]||[], K=CARDS[n]||[], C=CALC[n]||[], G=GRAPHS[n]||[], E=ESSAYS[n]||[];
  if(!L.length) return null;
  const l=L.filter(x=>lessonState(x.id)).length/L.length;
  const k=K.length? K.filter(x=>cardBox(x.id)>=3).length/K.length : 1;
  const c=C.length? C.filter(t=>lvlOf(t)===3 && (acc(t)||0)>=.6).length/C.length : 1;
  const g=G.length? G.filter(x=>(state.graphs||{})[x.id]).length/G.length : 1;
  const e=E.length? E.filter(x=>(state.essays||{})[x.id]).length/E.length : 1;
  const parts=[[l,.3,1],[k,.25,K.length],[c,.25,C.length],[g,.1,G.length],[e,.1,E.length]].filter(p=>p[2]);
  const wsum=parts.reduce((s,p)=>s+p[1],0);
  return {l,k,c,g,e,total:Math.round(parts.reduce((s,p)=>s+p[0]*p[1],0)/wsum*100)};
}
function acc(t){ const h=state.hist[t]; return h&&h.n? h.r/h.n : null; }
/* Was ist als Nächstes dran? Theorie zuerst, dann abfragen, rechnen, zeichnen, schreiben */
function nextStep(){
  for(const ch of CHAPTERS){ const n=ch.n; if(!LESSONS[n]) continue;
    const L=LESSONS[n], li=L.findIndex(x=>!lessonState(x.id));
    if(li>=0) return {label:`Kapitel ${n} · Theorie`, title:L[li].t, go:()=>openLesson(n,li)};
    if((CARDS[n]||[]).some(x=>!isSeen(x.id))) return {label:`Kapitel ${n} · Karten`, title:"Begriffe und Kurzfragen festigen", go:()=>openCards(n)};
    const ct=(CALC[n]||[]).find(t=>lvlOf(t)<3);
    if(ct) return {label:`Kapitel ${n} · Rechnen`, title:TYPES[ct].name, go:()=>startTask(ct,false)};
    const g=(GRAPHS[n]||[]).findIndex(x=>!(state.graphs||{})[x.id]);
    if(g>=0) return {label:`Kapitel ${n} · Grafik`, title:GRAPHS[n][g].t, go:()=>openGraph(n,g)};
    const e=(ESSAYS[n]||[]).findIndex(x=>!(state.essays||{})[x.id]);
    if(e>=0) return {label:`Kapitel ${n} · Essay`, title:"Klausuressay schreiben", go:()=>openEssay(n,e)};
  }
  return {label:"Wiederholen", title:"Gemischt üben hält alles frisch", go:()=>openCards(0)};
}

/* ================= Navigation ================= */
let view="home", task=null, cur={};
const TABS=[["home","Lernpfad"],["practice","Üben"],["stats","Statistik"]];
const TAB_OF={home:"home",chapter:"home",lesson:"home",graph:"home",essay:"home",cards:"practice",calc:"practice",task:"practice",practice:"practice",stats:"stats",exam:"practice",kurz:"practice",sym:"practice",recall:"practice",who:"practice",sessdone:"home"};
function renderNav(){
  $("#nav").innerHTML=TABS.map(([k,l])=>`<button data-v="${k}"${TAB_OF[view]===k?' aria-current="page"':""}>${l}</button>`).join("");
  $("#nav").querySelectorAll("button").forEach(b=>b.onclick=()=>go(b.dataset.v));
}
function go(v){ view=v; render(); window.scrollTo(0,0); }
function render(){ renderNav(); ({home:renderHome,chapter:renderChapter,lesson:renderLesson,cards:renderCards,graph:renderGraph,essay:renderEssay,practice:renderPractice,calc:renderCalc,task:renderTask,stats:renderStats,exam:renderExam,kurz:renderKurz,sym:renderSym,recall:renderRecall,who:renderWho,sessdone:renderHome})[view](); }
const backTo=(label,fn)=>`<button class="crumb" id="crumb">← ${label}</button>`;
function bindCrumb(fn){ const b=$("#crumb"); if(b) b.onclick=fn; }

/* ================= Lernpfad ================= */
function renderHome(){
  const nx=nextStep();
  $("#app").innerHTML=`
    <p class="eyebrow">Wirtschaft II · Makroökonomik</p>
    <h1>Lernpfad</h1>
    <p class="muted">Alles für die Klausur in einer App: Theorie lesen, Kurzfragen abfragen, rechnen, Grafiken zeichnen, Essays schreiben.</p>
    ${todayBlock()}
    ${homeReview()}
    <div class="block">
      <p class="eyebrow">Als Nächstes · ${nx.label}</p>
      <h2>${nx.title}</h2>
      <button class="btn" id="goNext">Weiter lernen</button>
    </div>
    <div class="block"><div class="tlist">${CHAPTERS.map(ch=>{ const p=chapterProgress(ch.n);
      return `<button class="chap${p?"":" off"}" data-n="${ch.n}" ${p?"":"disabled"}>
        <span class="no">${ch.n}</span><span class="t">${ch.title}</span>${p?`<span class="chip ${p.total>=80?"l3":p.total>0?"l2":""}">${p.total} %</span>`:`<span class="chip soon">folgt</span>`}
        <span class="d">${ch.teaser}</span>${p?`<span class="bar"><i style="width:${p.total}%"></i></span>`:""}
      </button>`;}).join("")}</div></div>
    <div class="block">
      <h2>So ist die Klausur gebaut</h2>
      <div class="klist">
        <b>Termin</b><span>${examDateTs()?`${fmtDate(examDateTs())} ${new Date(examDateTs()).getFullYear()}, noch ${Math.max(0,Math.ceil((examDateTs()-dayStart())/864e5))} Tage`:`steht noch nicht fest. Eintragen kannst du ihn unter Statistik.`}</span>
        <b>Dauer</b><span>90 Minuten laut Modul. Die Altklausuren 2024 hatten 60 Minuten, also kommt eher mehr Stoff dazu.</span>
        <b>Hilfsmittel</b><span>Taschenrechner, Geodreieck, Buntstifte</span>
      </div>
      <p class="small muted" style="margin:0 0 6px">Aufbau beider Altklausuren 2024, je 60 Punkte:</p>
      <div class="partlist">
        <span>Teil I</span><span>Kurzfragen: Begriffe, BIP-Kritik, Salden, Schuldenquote</span><b>12&nbsp;P.</b>
        <span>Teil II</span><span>Rechnen: VGR-Tabelle, Modell mit Staat, eine Grafik</span><b>24&nbsp;P.</b>
        <span>Teil III</span><span>Essay: These aus mehreren Paradigmen diskutieren</span><b>24&nbsp;P.</b>
      </div>
    </div>`;
  bindReview();
  $("#goNext").onclick=nx.go;
  $("#goSess").onclick=()=>{ if(sess) runStep(); else startSession(); };
  document.querySelectorAll(".chap").forEach(b=>b.onclick=()=>{ if(b.disabled) return; cur.ch=+b.dataset.n; go("chapter"); });
}

/* ================= Kapitel ================= */
function renderChapter(){
  const n=cur.ch, ch=CHAPTERS.find(c=>c.n===n), p=chapterProgress(n);
  const L=LESSONS[n]||[], K=CARDS[n]||[], C=CALC[n]||[], G=GRAPHS[n]||[], E=ESSAYS[n]||[];
  const nl=L.filter(x=>lessonState(x.id)).length, nk=K.filter(x=>cardBox(x.id)>=3).length;
  const nc=C.filter(t=>lvlOf(t)===3).length, ng=G.filter(x=>(state.graphs||{})[x.id]).length, ne=E.filter(x=>(state.essays||{})[x.id]).length;
  $("#app").innerHTML=`${backTo("Lernpfad")}
    <p class="eyebrow">Kapitel ${n} · ${p.total} % geschafft</p>
    <h1>${ch.title}</h1>
    <div class="block"><div class="modes">
      <button class="mode" id="mL"><span class="t">Theorie</span><span class="n">${nl}/${L.length}</span><span class="d">${L.length} kurze Lektionen mit Verständnisfragen. Hier fängst du an.</span></button>
      ${K.length?`<button class="mode" id="mK"><span class="t">Karten</span><span class="n">${dueCards(n).length} fällig · ${K.filter(x=>!isSeen(x.id)).length} neu</span><span class="d">Kurzfragen für Teil I. Gewusste Karten kommen nach 1, 3, 7, 16 und 35 Tagen wieder.</span></button>`:""}
      ${SYMBOL_GROUPS.some(g=>[].concat(g.kap).includes(n))?`<button class="mode" id="mS"><span class="t">Symbole</span><span class="n">${SYMBOL_GROUPS.filter(g=>[].concat(g.kap).includes(n)).reduce((k,g)=>k+g.items.length,0)} Zeichen</span><span class="d">Erst die Zeichen sicher kennen, dann rechnet es sich leichter.</span></button>`:""}
      ${C.length?`<button class="mode" id="mC"><span class="t">Rechnen</span><span class="n">${nc}/${C.length} frei</span><span class="d">Teil II mit immer neuen Zahlen: erst vorgerechnet, dann geführt, dann frei.</span></button>`:""}
      ${G.length?`<button class="mode" id="mG"><span class="t">Grafiken</span><span class="n">${ng}/${G.length}</span><span class="d">Mit dem Stift zeichnen, dann die Musterlösung darüberlegen.</span></button>`:""}
      ${E.length?`<button class="mode" id="mE"><span class="t">Essay</span><span class="n">${ne}/${E.length}</span><span class="d">Teil III im Klausurformat mit Erwartungshorizont.</span></button>`:""}
    </div></div>
    <div class="block"><h3>Lektionen</h3><p class="small muted" style="margin:0 0 6px">${tagOf("")} brauchst du für die Klausur. ${tagOf("1-1")} einmal lesen und abhaken.</p><div class="tlist">${L.map((x,i)=>{ const s=lessonState(x.id);
      return `<button class="titem" data-i="${i}"><span class="t">${i+1}. ${x.t} ${tagOf(x.id)}</span>${isUnclear(x.id)?`<span class="chip unk">unklar</span>`:`<span class="chip ${s?(s.ok?"l3":"l2"):""}">${s?(s.ok?"sicher":"wiederholen"):"offen"}</span>`}</button>`;}).join("")}</div></div>`;
  bindCrumb(()=>go("home"));
  $("#mL").onclick=()=>openLesson(n,Math.max(0,L.findIndex(x=>!lessonState(x.id))));
  if($("#mK")) $("#mK").onclick=()=>openCards(n);
  if($("#mS")) $("#mS").onclick=()=>go("sym");
  if($("#mC")) $("#mC").onclick=()=>{ cur.calcCh=n; go("calc"); };
  if($("#mG")) $("#mG").onclick=()=>openGraph(n,Math.max(0,G.findIndex(x=>!(state.graphs||{})[x.id])));
  if($("#mE")) $("#mE").onclick=()=>openEssay(n,Math.max(0,E.findIndex(x=>!(state.essays||{})[x.id])));
  document.querySelectorAll(".titem").forEach(b=>b.onclick=()=>openLesson(n,+b.dataset.i));
}

/* ================= Lektion ================= */
function openLesson(n,i){ cur.ch=n; cur.li=i; cur.ans={}; cur.shown={}; go("lesson"); }
function renderLesson(){
  const n=cur.ch, L=LESSONS[n], x=L[cur.li];
  const html=nb(x.html).replace(/\{\{fig:(\w+)\}\}/g,(_,id)=>figSVG(id,true));
  const allAns=x.check.every((_,j)=>cur.ans[j]!==undefined);
  $("#app").innerHTML=`${backTo("Kapitel "+n)}
    <p class="eyebrow">Kapitel ${n} · Lektion ${cur.li+1} von ${L.length} ${tagOf(x.id)}</p>
    <article class="block lesson"><h1>${x.t}</h1>${html}</article>
    <div class="block unc">${isUnclear(x.id)
      ?`<span class="small" style="flex:1;min-width:12rem"><b>Als unklar markiert.</b> Den Prompt kannst du in Claude einfügen.</span><button class="btn ghost small" id="uncCopy">Prompt nochmal kopieren</button><button class="btn small" id="uncOk">Jetzt verstanden</button>`
      :`<span class="small muted" style="flex:1;min-width:12rem">Etwas unklar? Markiert die Lektion und kopiert einen fertigen Prompt für Claude.</span><button class="btn ghost small" id="uncSet">Verstehe ich nicht</button>`}<div id="uncBox" style="width:100%"></div></div>
    ${wipoccBox(x.id)}
    <div class="block"><h3>Kurz prüfen</h3>${x.check.map((c,j)=>qBlock(c,j,cur.ans[j],(cur.shown||{})[j],j===0)).join("")}
    </div>
    <div class="lnav">
      ${cur.li>0?`<button class="btn ghost" id="prev">← Vorherige</button>`:"<span></span>"}
      ${allAns&&sess&&sess.steps[sess.i]&&sess.steps[sess.i].k==="lesson"?sessBtn():allAns?(cur.li<L.length-1?`<button class="btn" id="next">Nächste Lektion →</button>`:`<button class="btn" id="fin">Kapitel-Übersicht</button>`):`<span class="small muted">Beantworte die Fragen, dann geht es weiter.</span>`}
    </div>`;
  bindCrumb(()=>go("chapter"));
  const keep=f=>{ const y=window.scrollY; f(); renderLesson(); window.scrollTo(0,y); };
  document.querySelectorAll("[data-show]").forEach(b=>b.onclick=()=>keep(()=>{ cur.shown=cur.shown||{}; cur.shown[+b.dataset.show]=true; }));
  document.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{
    const j=+b.dataset.q, k=+b.dataset.k; if(cur.ans[j]!==undefined) return; cur.ans[j]=k; qGrade(qid(x.id,j),k===x.check[j].a);
    if(x.check.every((_,q)=>cur.ans[q]!==undefined)){ state.lessons=state.lessons||{}; const ok=x.check.every((c,q)=>cur.ans[q]===c.a);
      state.lessons[x.id]={ok, t:Date.now()}; logDay(); save(); }
    const y=window.scrollY; renderLesson(); window.scrollTo(0,y);
  });
  const unc=()=>copyText(unclearPrompt(n,x),"#uncBox");
  if($("#uncSet")) $("#uncSet").onclick=()=>{ state.unclear=state.unclear||{}; state.unclear[x.id]=Date.now(); save(); const y=window.scrollY; renderLesson(); window.scrollTo(0,y); unc(); };
  if($("#uncCopy")) $("#uncCopy").onclick=unc;
  if($("#uncOk")) $("#uncOk").onclick=()=>{ delete state.unclear[x.id]; save(); toast("Markierung entfernt"); const y=window.scrollY; renderLesson(); window.scrollTo(0,y); };
  if($("#prev")) $("#prev").onclick=()=>openLesson(n,cur.li-1);
  if($("#next")) $("#next").onclick=()=>openLesson(n,cur.li+1);
  if($("#fin")) $("#fin").onclick=()=>go("chapter");
}
/* Klausurkern oder Hintergrund (laut Altklausuren 2024 und Aufgabenblättern) */
const HINTERGRUND=new Set(["1-1","1-3","1-4","1-5","2-7","2-8","2-9","2-10","3-6","6-1","7-1","8-1","8-2","8-3","8-4"]);
const tagOf=id=>HINTERGRUND.has(id)?'<span class="tag bg">Hintergrund</span>':'<span class="tag core">Klausurkern</span>';
function logDay(){ const k=today(); state.days[k]=(state.days[k]||0)+1; }

/* Rückmeldung zu Verständnisfragen: warum falsch, was richtig ist */
function feedback(c,a){
  const right=`<b>Richtig</b><span>${inl(c.o[c.a])}</span>`;
  if(a===c.a) return `<div class="fb good"><p class="fh">Richtig.</p><p style="margin:0">${inl(c.ex)}</p></div>`;
  if(a===-1) return `<div class="fb idk"><p class="fh">Kein Problem, die Frage kommt später noch einmal.</p><div class="dlist">${right}<b>Warum</b><span>${inl(c.ex)}</span></div></div>`;
  const why=c.w&&c.w[a];
  return `<div class="fb bad"><p class="fh">Nicht ganz.</p><div class="dlist">${why?`<b>Warum nicht</b><span>${inl(why)}</span>`:""}${right}<b>${why?"Der Unterschied":"Warum"}</b><span>${inl(c.ex)}</span></div></div>`;
}

/* „Verstehe ich nicht“: Markierung und fertiger Prompt für Claude */
const isUnclear=id=>!!(state.unclear||{})[id];
function unclearPrompt(n,x){
  const d=document.createElement("div"); d.innerHTML=x.html.replace(/\{\{fig:\w+\}\}/g,"[Grafik]");
  d.querySelectorAll("li").forEach(li=>li.prepend("- ")); d.querySelectorAll("p,div,li,tr,h3").forEach(el=>el.append("\n"));
  d.querySelectorAll("td,th").forEach(el=>el.append(" | "));
  const txt=d.textContent.replace(/[ \t]+\n/g,"\n").replace(/\n{3,}/g,"\n\n").trim();
  const ch=CHAPTERS.find(c=>c.n===n);
  return `Ich lerne für die Klausur „Einführung in die Makroökonomik“ (Wirtschaft II, UDE, Lehramt GyGe, Folien von Till van Treeck). Diese Lektion verstehe ich noch nicht.

Thema: ${ch.title}
Lektion: ${x.t}

Lektionstext:
${txt}

Bitte erkläre mir das einfacher: kurze Sätze, Fachbegriffe kurz erklärt, mit einem Beispiel aus dem Alltag oder aus der Schule. Bleib bei den Begriffen und Formeln der Vorlesung. Stell mir danach zwei Kontrollfragen, damit ich prüfen kann, ob ich es verstanden habe. Die Lösungen bitte erst, wenn ich geantwortet habe.`;
}
function chapterOfCard(id){ const n=+String(id).replace(/^c(\d+)-.*/,"$1"), ch=CHAPTERS.find(c=>c.n===n); return ch?ch.title:""; }

/* Startseite: unklare Lektionen und Fragen, die später wiederkommen */
function lessonRef(id){ for(const ch of CHAPTERS){ const i=(LESSONS[ch.n]||[]).findIndex(x=>x.id===id); if(i>=0) return {n:ch.n,i,t:LESSONS[ch.n][i].t,ch:ch.title}; } return null; }
function homeReview(){
  const unc=Object.keys(state.unclear||{}).map(lessonRef).filter(Boolean);
  const again=[];
  if(!unc.length) return "";
  const row=(r,lab)=>`<button class="titem rv" data-n="${r.n}" data-i="${r.i}"><span class="t">${r.t}</span><span class="chip ${lab==="unklar"?"unk":"l2"}">${lab}</span><span class="d">${r.ch}</span></button>`;
  return `<div class="block"><h3>Nochmal anschauen</h3><p class="small muted" style="margin:0 0 4px">Als unklar markiert. Tippe auf „Jetzt verstanden“ in der Lektion, wenn es sitzt.</p><div class="tlist">${unc.map(r=>row(r,"unklar")).join("")}${again.slice(0,5).map(r=>row(r,"Fragen")).join("")}</div></div>`;
}
function bindReview(){ document.querySelectorAll(".rv").forEach(b=>b.onclick=()=>openLesson(+b.dataset.n,+b.dataset.i)); }

/* ================= Karten (Karteikasten, Fächer 0–5) ================= */
const deckLabel=n=>DECK_NAME[n]?"Symbole":n?"Kapitel "+n:"Üben";
const deckBack=n=>DECK_NAME[n]?go("sym"):n?go("chapter"):go("practice");
function allCards(n){ return n? (CARDS[n]||[]) : Object.values(CARDS).flat(); }
/* Wiederholung mit Fälligkeitsdatum (wie Anki): sicherer gewusst = längerer Abstand */
const INTERVAL=[0,0,1,3,7,16];   // Tage bis zur nächsten Abfrage je Fach; Fach 5 erneut gewusst: 35 Tage
const dayStart=(t=Date.now())=>{ const d=new Date(t); d.setHours(0,0,0,0); return d.getTime(); };
const isSeen=id=>!!(state.box||{})[id];
const isDue=id=>isSeen(id) && ((state.due||{})[id]||0)<=Date.now();
function dueCards(n){ return allCards(n).filter(x=>isDue(x.id)).sort((a,b)=>((state.due||{})[a.id]||0)-((state.due||{})[b.id]||0)); }
function openCards(n,free,deck){ cur.cardCh=n; cur.free=!!free; cur.deck=deck?deck.slice():(free?buildDeck(n):buildDueDeck(n)); cur.ci=0; cur.flip=false; cur.right=0; cur.unsure=0; cur.typed=""; cur.tyOpen=false; cur.hist=[]; cur.requeued={}; go("cards"); }
function buildDueDeck(n){
  const due=dueCards(n), fresh=n? allCards(n).filter(x=>!isSeen(x.id)) : [];
  return due.concat(fresh).slice(0,Math.max(10,Math.min(due.length,30)));
}
function buildDeck(n){
  const pool=allCards(n).slice(), deck=[];
  while(deck.length<Math.min(10,pool.length)){
    const w=pool.map(x=>[6,5,4,3,2,1][cardBox(x.id)]); let r=Math.random()*w.reduce((a,b)=>a+b,0), i=0;
    for(;i<pool.length;i++){ r-=w[i]; if(r<=0) break; } deck.push(pool.splice(Math.min(i,pool.length-1),1)[0]);
  }
  return deck;
}
function renderCards(){
  const D=cur.deck, n=cur.cardCh;
  if(cur.ci>=D.length){
    const left=dueCards(n).length+(n?allCards(n).filter(x=>!isSeen(x.id)).length:0);
    const nextDue=allCards(n).filter(x=>isSeen(x.id)&&!isDue(x.id)).map(x=>(state.due||{})[x.id]).sort((a,b)=>a-b)[0];
    const when=nextDue? Math.round((dayStart(nextDue)-dayStart())/864e5) : null;
    $("#app").innerHTML=`${backTo(deckLabel(n))}<h1>${D.length?(left?"Runde geschafft":"Für heute erledigt"):"Nichts fällig"}</h1>
      <div class="block">${D.length?`<p>${cur.right} sicher, ${cur.unsure||0} nicht sicher.</p>`:""}
      <p class="small muted">${left?`Noch ${left} Karten fällig oder neu.`:`Alle Karten${n?" dieses Kapitels":""} sind auf dem Stand. ${when!=null?`Die nächsten werden ${when<=0?"heute":when===1?"morgen":"in "+when+" Tagen"} fällig.`:""}`} Sichere Karten kommen nach 1, 3, 7, 16 und 35 Tagen wieder, nicht sichere gleich in dieser Runde und morgen noch einmal.</p>
      <div class="row">${sess?sessBtn():`${left?`<button class="btn" id="again">Weiter</button>`:""}<button class="btn ghost" id="free">Freiwillig weiterüben</button><button class="btn ghost" id="out">Fertig</button>`}</div></div>`;
    bindCrumb(()=>deckBack(n)); if($("#again")) $("#again").onclick=()=>openCards(n); if($("#free")) $("#free").onclick=()=>openCards(n,true); if($("#out")) $("#out").onclick=()=>deckBack(n); return;
  }
  const c=D[cur.ci], b=cardBox(c.id);
  const esc=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;");
  $("#app").innerHTML=`${backTo(deckLabel(n))}
    <div class="row between"><p class="eyebrow" style="margin:0">Karte ${cur.ci+1} von ${D.length}${cur.free?" · freiwillig":isSeen(c.id)?" · fällig":" · neu"}</p><span class="crt">${cur.hist.length?`<button class="cundo" id="cprev" aria-label="Eine Karte zurück" title="Eine Karte zurück"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg></button>`:""}<span class="dots" aria-label="Fach ${b} von 5">${[1,2,3,4,5].map(i=>`<i class="${i<=b?"on":""}"></i>`).join("")}</span></span></div>
    <div class="swipewrap">
    <div class="block card${cur.enter?" enter":""}" id="theCard" style="margin-top:8px" role="button" tabindex="0" aria-label="Karte umdrehen"><i class="tint" aria-hidden="true"></i><p class="cctx">${inl(CARD_CTX[c.id]||chapterOfCard(c.id))}</p>${n==="sym"?`<div class="front symf">${fx(symMain(c.f))}${symIn(c.f)?`<span class="symin">in ${fx(symIn(c.f))}</span>`:""}</div>`:`<div class="front">${inl(c.f)}</div>`}${cur.flip?`${cur.typed.trim()?`<div class="typed"><span class="small muted">Deine Antwort</span><p>${esc(cur.typed)}</p></div>`:""}<div class="back">${richText(c.b)}</div>${cardInfoHTML(c.id)}`:`<p class="tap">Tippen zum Umdrehen</p>`}</div></div>
    ${cur.flip?`<div class="grade"><button class="btn ghost" id="mid">← Nicht sicher</button><button class="btn" id="yes">Sicher →</button></div>`
      :`${cur.tyOpen||cur.typed?`<textarea id="cty" class="cty" rows="1" placeholder="Deine Antwort …" aria-label="Antwort tippen">${esc(cur.typed)}</textarea>`:""}
      <div class="row"><button class="btn" id="flip" style="flex:1">Antwort zeigen</button>${cur.tyOpen||cur.typed?"":`<button class="tylink" id="tyO">Tippen</button>`}</div><p class="hint">Erst antworten, dann aufdecken.</p>`}`;
  bindCrumb(()=>deckBack(n));
  if($("#tyO")) $("#tyO").onclick=()=>{ cur.tyOpen=true; renderCards(); $("#cty").focus(); };
  const ta=$("#cty"); if(ta){ const fit=()=>{ ta.style.height="auto"; ta.style.height=ta.scrollHeight+"px"; }; fit(); ta.oninput=()=>{ cur.typed=ta.value; fit(); }; }
  if($("#flip")) $("#flip").onclick=()=>{ cur.flip=true; renderCards(); };
  const cd=$("#theCard"); let moved=false;
  cd.onclick=e=>{ if(e.target.closest("a")||moved) return; cur.flip=!cur.flip; renderCards(); };
  cd.onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); cd.click(); } else if(cur.flip&&e.key==="ArrowRight") grade(2); else if(cur.flip&&e.key==="ArrowLeft") grade(1); };
  /* Wischen wie bei Dating-Apps, erst nach dem Aufdecken: rechts sicher, links nicht sicher.
     Die Karte folgt dem Finger, eine leichte Tönung zeigt die Richtung an. */
  if(cur.flip){ const tint=cd.querySelector(".tint"); let x0=null, y0=0, dx=0, raf=0, w=360, dir=0;
    /* Pro Bild nur transform und opacity ändern: beides läuft auf dem Grafikchip, nichts wird neu gezeichnet */
    const paint=()=>{ raf=0; const k=Math.min(1,Math.abs(dx)/(w*.35)), d=dx>0?1:-1;
      if(d!==dir){ dir=d; tint.className="tint "+(d>0?"ok":"no"); }
      cd.style.transform=`translate3d(${dx}px,0,0) rotate(${dx/45}deg)`; tint.style.opacity=k; };
    cd.onpointerdown=e=>{ if(e.target.closest("a")) return; x0=e.clientX; y0=e.clientY; dx=0; moved=false; w=cd.offsetWidth||360; };
    cd.onpointermove=e=>{ if(x0===null) return; const d=e.clientX-x0;
      if(!moved){ if(Math.abs(d)>6&&Math.abs(d)>Math.abs(e.clientY-y0)){ moved=true; x0+=d>0?6:-6; try{cd.setPointerCapture(e.pointerId);}catch(x){} cd.style.transition="none"; tint.style.transition="none"; } else return; }
      e.preventDefault(); dx=e.clientX-x0; if(!raf) raf=requestAnimationFrame(paint); };
    cd.onpointerup=cd.onpointercancel=()=>{ if(x0===null) return; x0=null; if(!moved) return; if(raf){ cancelAnimationFrame(raf); raf=0; }
      const lim=Math.min(100,w*.25);
      if(Math.abs(dx)>lim){ const out=(dx>0?1:-1)*(window.innerWidth+100);
        cd.style.transition="transform .3s cubic-bezier(.2,.7,.3,1), opacity .3s ease-out"; cd.style.transform=`translate3d(${out}px,0,0) rotate(${dx>0?12:-12}deg)`; cd.style.opacity="0";
        setTimeout(()=>{ cur.enter=true; grade(dx>0?2:1); },220); }
      else { cd.style.transition="transform .35s cubic-bezier(.3,1.4,.5,1)"; tint.style.transition="opacity .25s"; cd.style.transform=""; tint.style.opacity="0"; setTimeout(()=>{ moved=false; },0); } };
  }
  /* Bewertung: 2 sicher (nächstes Fach), 1 nicht sicher (ein Fach zurück, morgen wieder, in dieser Runde noch einmal) */
  function grade(lv){ state.box=state.box||{}; state.due=state.due||{}; state.lapses=state.lapses||{};
    const b0=cardBox(c.id), old=state.due[c.id]||0;
    cur.hist.push({ci:cur.ci, id:c.id, box:state.box[c.id], due:state.due[c.id], lapse:state.lapses[c.id], right:cur.right, unsure:cur.unsure, len:D.length, rq:Object.assign({},cur.requeued), typed:cur.typed});
    const b1= lv===2? Math.min(5,Math.max(b0,1)+1) : Math.max(1,b0-1);
    const nd= lv===2? dayStart()+(b0===5?35:INTERVAL[b1])*864e5 : dayStart()+864e5;
    if(!cur.free){ state.box[c.id]=b1; state.due[c.id]=nd; }
    else if(lv<2){ state.box[c.id]=Math.min(b0||1,b1); state.due[c.id]=Math.min(old||nd,nd); }
    if(lv===2) cur.right++;
    else { cur.unsure=(cur.unsure||0)+1; state.lapses[c.id]=(state.lapses[c.id]||0)+1; if(!cur.requeued[c.id]){ cur.requeued[c.id]=1; D.push(c); } }
    logDay(); save(); cur.ci++; cur.flip=false; cur.typed=""; renderCards(); window.scrollTo(0,0); }
  if($("#yes")) $("#yes").onclick=()=>{ cur.enter=true; grade(2); };
  if($("#mid")) $("#mid").onclick=()=>{ cur.enter=true; grade(1); };
  /* Eine Karte zurück: letzte Bewertung rückgängig machen */
  if($("#cprev")) $("#cprev").onclick=()=>{ const h=cur.hist.pop(); if(!h) return;
    const put=(o,k,v)=>{ if(v===undefined) delete o[k]; else o[k]=v; };
    put(state.box,h.id,h.box); put(state.due,h.id,h.due); put(state.lapses,h.id,h.lapse);
    cur.right=h.right; cur.unsure=h.unsure; D.length=h.len; cur.requeued=h.rq; cur.ci=h.ci; cur.flip=true; cur.typed=h.typed; save(); renderCards(); };
}

/* ================= Grafiken ================= */
let gStrokes={};
function openGraph(n,i){ cur.ch=n; cur.gi=i; cur.gshow=false; cur.gchecks={}; cur.gprev=(state.graphs||{})[GRAPHS[n][i].id]; go("graph"); }
function renderGraph(){
  const n=cur.ch, G=GRAPHS[n], g=G[cur.gi], st=cur.gprev;
  gStrokes[g.id]=gStrokes[g.id]||[];
  $("#app").innerHTML=`${backTo("Kapitel "+n)}
    <p class="eyebrow">Kapitel ${n} · Grafik ${cur.gi+1} von ${G.length}${g.klausur?" · "+g.klausur:""}</p>
    <h1>${g.t}</h1>
    <div class="block"><p style="margin:0"><b>${g.task}</b></p></div>
    <div class="gbox" id="gbox">
      <svg viewBox="0 0 400 300" aria-hidden="true">${GFX[g.id].base()}</svg>
      <canvas id="gc" aria-label="Zeichenfläche"></canvas>
      <svg class="solsvg" viewBox="0 0 400 300" ${cur.gshow?"":"hidden"}>${GFX[g.id].sol()}</svg>
    </div>
    <div class="row" style="margin:10px 0 14px"><button class="btn ghost small" id="gu">Zurück</button><button class="btn ghost small" id="gx">Leeren</button>
      <button class="btn small" id="gs" style="margin-left:auto">${cur.gshow?"Musterlösung ausblenden":"Musterlösung darüberlegen"}</button></div>
    ${cur.gshow?`<div class="block"><h3>Hast du das drin?</h3>${g.check.map((c,j)=>`<label class="check"><input type="checkbox" id="k${j}" ${cur.gchecks[j]?"checked":""}><span>${c}</span></label>`).join("")}
      <div class="row" style="margin-top:8px"><button class="btn" id="gsave">Ergebnis speichern</button>${st?`<span class="small muted">Zuletzt: ${st.p} von ${st.max}</span>`:""}</div></div>`
      :`<p class="hint">Mit dem Stift einzeichnen, die Lösung erscheint in Blau.</p>`}
    <div class="lnav">${cur.gi>0?`<button class="btn ghost" id="gp">← Vorherige</button>`:"<span></span>"}${cur.gi<G.length-1?`<button class="btn ghost" id="gn">Nächste →</button>`:""}</div>`;
  bindCrumb(()=>go("chapter"));
  const s=drawSurface($("#gc"),gStrokes[g.id]);
  $("#gu").onclick=()=>s.undo(); $("#gx").onclick=()=>s.clear();
  $("#gs").onclick=()=>{ cur.gshow=!cur.gshow; renderGraph(); };
  document.querySelectorAll(".check input").forEach(c=>c.onchange=()=>{ cur.gchecks[+c.id.slice(1)]=c.checked; });
  if($("#gsave")) $("#gsave").onclick=()=>{ const p=g.check.filter((_,j)=>cur.gchecks[j]).length; state.graphs=state.graphs||{}; state.graphs[g.id]={p,max:g.check.length,t:Date.now()}; logDay(); save(); toast(`Gespeichert: ${p} von ${g.check.length}`); renderGraph(); };
  if($("#gp")) $("#gp").onclick=()=>openGraph(n,cur.gi-1);
  if($("#gn")) $("#gn").onclick=()=>openGraph(n,cur.gi+1);
}

/* ================= Essay ================= */
function openEssay(n,i){ cur.ch=n; cur.ei=i; cur.eph="schreiben"; cur.echecks={}; cur.eprev=(state.essays||{})[ESSAYS[n][i].id]; go("essay"); }
function renderEssay(){
  const n=cur.ch, E=ESSAYS[n], e=E[cur.ei], st=cur.eprev;
  state.drafts=state.drafts||{}; const txt=state.drafts[e.id]||"";
  const per=Math.round(e.pts/e.k.length*10)/10;
  const pts=()=>Math.round(e.k.filter((_,j)=>cur.echecks[j]).length*per);
  $("#app").innerHTML=`${backTo("Kapitel "+n)}
    <p class="eyebrow">Kapitel ${n} · Essay ${cur.ei+1} von ${E.length} · ${e.pts} Punkte${e.klausur?" · "+e.klausur:""}</p>
    <div class="block"><p style="margin:0"><b>${e.q}</b></p><p class="small muted" style="margin:8px 0 0">In der Klausur hast du dafür etwa 20 bis 25 Minuten. Gliedere: These klären, Perspektiven darstellen, abwägen, Fazit.</p></div>
    <div class="essay">${cur.eph==="schreiben"?`
      <label class="small muted" for="et">Deine Antwort (Tastatur oder Stift mit Handschrift-Eingabe)</label>
      <textarea id="et" style="margin-top:6px">${esc(txt)}</textarea>
      <div class="row" style="margin-top:10px"><button class="btn" id="eDone">Fertig, Erwartungshorizont zeigen</button>${st?`<span class="small muted">Zuletzt: ${st.p} von ${e.pts} P.</span>`:""}</div>`:`
      <div class="block"><h3>Erwartungshorizont</h3><p class="small muted">Hake ab, was in deinem Text klar vorkommt. Jeder Punkt zählt etwa ${String(per).replace(".",",")} P.</p>
        ${e.k.map((k,j)=>`<label class="check"><input type="checkbox" id="q${j}" ${cur.echecks[j]?"checked":""}><span>${k}</span></label>`).join("")}
        <p class="pts" id="ep">${pts()} von ${e.pts} Punkten</p>${st?`<p class="small muted" style="margin-top:-6px">Zuletzt: ${st.p} von ${st.max} P.</p>`:""}
        <div class="row"><button class="btn" id="eSave">Ergebnis speichern</button><button class="btn ghost" id="eCl">Für Claude kopieren</button><button class="btn ghost" id="eEdit">Text überarbeiten</button></div>
        <div id="eCopy"></div></div>
      <div class="block"><h3>Deine Antwort</h3><p style="white-space:pre-wrap">${esc(txt)||'<span class="muted">Kein Text geschrieben.</span>'}</p></div>
      <div class="block lesson"><h3>Musterlösung</h3>${e.m.split("\n\n").map(p=>`<p>${p}</p>`).join("")}</div>`}
    </div>
    <div class="lnav">${cur.ei>0?`<button class="btn ghost" id="ep2">← Vorheriger</button>`:"<span></span>"}${cur.ei<E.length-1?`<button class="btn ghost" id="en">Nächster →</button>`:""}</div>`;
  bindCrumb(()=>go("chapter"));
  const ta=$("#et"); if(ta){ let tm=null; ta.oninput=()=>{ state.drafts[e.id]=ta.value; clearTimeout(tm); tm=setTimeout(()=>save(),800); }; }
  if($("#eDone")) $("#eDone").onclick=()=>{ if(ta) state.drafts[e.id]=ta.value; save(); cur.eph="bewerten"; renderEssay(); window.scrollTo(0,0); };
  document.querySelectorAll(".check input").forEach(c=>c.onchange=()=>{ cur.echecks[+c.id.slice(1)]=c.checked; $("#ep").textContent=`${pts()} von ${e.pts} Punkten`; });
  if($("#eSave")) $("#eSave").onclick=()=>{ state.essays=state.essays||{}; state.essays[e.id]={p:pts(),max:e.pts,t:Date.now()}; logDay(); save(); toast(`Gespeichert: ${pts()} von ${e.pts} Punkten`); };
  if($("#eEdit")) $("#eEdit").onclick=()=>{ cur.eph="schreiben"; renderEssay(); };
  if($("#eCl")) $("#eCl").onclick=async()=>{
    const prompt=`Bewerte bitte meinen Übungsessay für die Klausur „Einführung in die Makroökonomik“ (UDE, Lehramt). Beziehe dich auf die Vorlesungsinhalte (Folien van Treeck).\n\nAufgabe (${e.pts} Punkte):\n${e.q}\n\nErwartungshorizont:\n${e.k.map(k=>"- "+k).join("\n")}\n\nMein Essay:\n${txt}\n\nGib mir: Punktzahl mit Begründung je Kriterium, was fehlt oder ungenau ist, und zwei konkrete Formulierungen, mit denen ich den Text verbessern kann.`;
    try{ await navigator.clipboard.writeText(prompt); toast("Kopiert. In den Claude-Chat einfügen."); }
    catch(x){ $("#eCopy").innerHTML=`<textarea style="width:100%;min-height:8rem;margin-top:8px" readonly>${esc(prompt)}</textarea>`; const t=$("#eCopy textarea"); t.focus(); t.select(); toast("Text markiert, jetzt kopieren"); }
  };
  if($("#ep2")) $("#ep2").onclick=()=>openEssay(n,cur.ei-1);
  if($("#en")) $("#en").onclick=()=>openEssay(n,cur.ei+1);
}

/* ================= Üben (kapitelübergreifend) ================= */
function renderPractice(){
  const ready=CHAPTERS.filter(c=>LESSONS[c.n]).map(c=>c.n);
  $("#app").innerHTML=`<p class="eyebrow">Wiederholen</p><h1>Üben</h1>
    <p class="muted">Gemischt aus allen fertigen Kapiteln (${ready.join(", ")}). Gemischtes Üben ist anstrengender als blockweises, bleibt aber deutlich besser hängen.</p>
    <div class="block"><div class="modes">
      <button class="mode" id="pK"><span class="t">Fällige Karten</span><span class="n">${dueCards(0).length} fällig</span><span class="d">Alle Karten aus allen Kapiteln, die heute dran sind. Neue Karten lernst du im jeweiligen Kapitel.</span></button>
      <button class="mode" id="pR"><span class="t">Verständnisfragen</span><span class="n">${qDue().length} fällig</span><span class="d">Die Fragen aus den Lektionen kommen mit wachsendem Abstand wieder. Erst selbst überlegen, dann die Auswahl.</span></button>
      <button class="mode" id="pW"><span class="t">Wer sagt das?</span><span class="d">Aussagen den Denkschulen zuordnen. Das Gerüst für den Essay in Teil III.</span></button>
      <button class="mode" id="pS"><span class="t">Symbole und Formeln</span><span class="n">${dueCards("sym").length+dueCards("symr").length} fällig</span><span class="d">Was bedeuten Y, Π, G oder X − M? Mit Mini-Beispielen und Lexikon zum Nachschlagen.</span></button>
      <button class="mode" id="pC"><span class="t">Rechnen gemischt</span><span class="d">Wechselnde Aufgabentypen, bevorzugt was dir schwerfällt.</span></button>
      <button class="mode" id="pL"><span class="t">Alle Rechenaufgaben</span><span class="d">Einzelne Typen gezielt üben.</span></button>
      <button class="mode" id="pKz"><span class="t">Kurzfragen schreiben</span><span class="n">${Object.keys(state.kurz||{}).length}/${KURZ.length}</span><span class="d">Teil I wie in der Klausur: kurze Antwort schreiben, mit dem Erwartungshorizont vergleichen.</span></button>
      <button class="mode" id="pX"><span class="t">Probeklausur</span><span class="n">${state.examRun?"läuft":(state.exams||[]).length+"×"}</span><span class="d">Alle drei Teile mit Timer, jedes Mal neu zusammengestellt.</span></button>
    </div></div>`;
  $("#pK").onclick=()=>openCards(0);
  $("#pS").onclick=()=>go("sym");
  $("#pR").onclick=()=>openRecall();
  $("#pW").onclick=()=>openWho(8);
  $("#pC").onclick=()=>startTask(recommend(),true);
  $("#pL").onclick=()=>{ cur.calcCh=0; go("calc"); };
  $("#pKz").onclick=openKurz;
  $("#pX").onclick=openExam;
}
function calcTypes(n){ return n? (CALC[n]||[]) : [...new Set(Object.values(CALC).flat())]; }
function recommend(){
  const T=calcTypes(0), started=T.filter(t=>state.hist[t]&&state.hist[t].n);
  const fresh=T.find(t=>!started.includes(t)), weak=started.filter(t=>acc(t)<.7).sort((a,b)=>acc(a)-acc(b))[0];
  return weak||fresh||T[Math.floor(Math.random()*T.length)];
}
function renderCalc(){
  const n=cur.calcCh||0, T=calcTypes(n);
  $("#app").innerHTML=`${backTo(n?"Kapitel "+n:"Üben")}
    <p class="eyebrow">Teil II${n?" · Kapitel "+n:""}</p><h1>Rechnen</h1>
    <p class="muted">Jede Aufgabe läuft in drei Stufen: vorgerechnet, Schritt für Schritt geführt, dann frei wie in der Klausur. Nach zwei fehlerfreien Durchgängen steigst du auf.</p>
    <button class="btn" id="mix" style="width:100%;margin:4px 0 14px">Gemischt üben</button>
    <div class="block"><div class="tlist">${T.map(t=>{ const h=state.hist[t], a=acc(t), l=lvlOf(t);
      return `<button class="titem" data-t="${t}"><span class="t">${TYPES[t].name}</span><span class="chip l${l}">${LVL[l]}</span>
        <span class="d">${TYPES[t].desc}${h&&h.n?` · ${h.n}× gerechnet, ${Math.round(a*100)} % richtig`:""}</span>
        ${h&&h.n?`<span class="bar"><i style="width:${Math.round(a*100)}%"></i></span>`:""}</button>`;}).join("")}</div></div>`;
  bindCrumb(()=>{ if(n){ cur.ch=n; go("chapter"); } else go("practice"); });
  document.querySelectorAll(".titem").forEach(b=>b.onclick=()=>startTask(b.dataset.t,false));
  $("#mix").onclick=()=>startTask(recommend(),true);
}

/* ================= Statistik ================= */
let statsArmed=false;
function renderStats(){
  const days=[...Array(7)].map((_,i)=>{ const d=new Date(); d.setDate(d.getDate()-6+i); const k=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); return [d,state.days[k]||0]; });
  const mx=Math.max(1,...days.map(x=>x[1])), wd=["So","Mo","Di","Mi","Do","Fr","Sa"];
  const ready=CHAPTERS.filter(c=>LESSONS[c.n]);
  $("#app").innerHTML=`<h1>Statistik</h1>
    <div class="block"><h2>Letzte 7 Tage</h2>
      <p class="small muted" style="margin:0">Aktionen pro Tag: jede beantwortete Karte, Frage oder Rechenaufgabe zählt.</p>
      <div class="week7">${days.map(([d,n],i)=>`<div class="d${i===6?" today":""}" title="${n===1?"1 Aktion":n+" Aktionen"}">
        <div class="bw"><i style="height:${n?Math.max(4,Math.round(n/mx*100)):0}%"></i></div>
        <span class="wd">${wd[d.getDay()]}</span><span class="dt">${d.getDate()}.${d.getMonth()+1}.</span>
        <span class="n">${n||"–"}</span><span class="u">${n?(n===1?"Aktion":"Aktionen"):""}</span></div>`).join("")}</div></div>
    <div class="block"><h2>Nach Kapitel</h2>${ready.map(c=>{ const p=chapterProgress(c.n);
      return `<div class="srow ch"><span>${c.title}</span><span class="small muted">${[["Theorie",p.l,1],["Karten",p.k,(CARDS[c.n]||[]).length],["Rechnen",p.c,(CALC[c.n]||[]).length]].filter(x=>x[2]).map(x=>x[0]+" "+Math.round(x[1]*100)).join(" · ")}</span><span class="pts">${p.total} %</span></div>`;}).join("")}</div>
    <div class="block"><h2>Rechenaufgaben</h2>${calcTypes(0).map(t=>{ const h=state.hist[t]; return `<div class="srow"><span>${TYPES[t].short}</span><span class="chip l${lvlOf(t)}">${LVL[lvlOf(t)]}</span><span>${h&&h.n?`${h.r}/${h.n}`:"–"}</span></div>`;}).join("")}</div>
    ${examPlanBlock()}
    ${weakBlock()}
    ${syncBox()}
    <div class="block"><h3>Fortschritt zurücksetzen</h3><p class="small muted">Löscht deinen gesamten Lernstand, auch auf den verbundenen Geräten.</p>
      <button class="btn warn" id="rst">${statsArmed?"Wirklich zurücksetzen":"Zurücksetzen"}</button></div>`;
  bindSync(); bindExamPlan(); bindWeak();
  $("#rst").onclick=()=>{ if(!statsArmed){ statsArmed=true; renderStats(); return; } state={}; norm(); save(); flushPush(); statsArmed=false; toast("Zurückgesetzt"); renderStats(); };
}
