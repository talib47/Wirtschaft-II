/* ================= Einstellungen nur dieser App für die gemeinsamen Bausteine (status.js) ================= */
const APP={
 name:"Wirtschaft II",
 halves:false,
 chap:n=>CHAPTERS.find(c=>c.n===n),
 unit:()=>"Kapitel",
 unitNo:c=>c.n,
 examTs:()=>examDateTs(),
 focus:{                                        /* Lernmodus ohne Ablenkung (status.js) */
  views:["cards","recall","who","kurz","task","graph","essay","exam"],
  prog:()=>{ const P={cards:()=>cur.deck&&{i:cur.ci,n:cur.deck.length}, recall:()=>cur.rq&&{i:cur.rq.i,n:cur.rq.list.length},
    who:()=>cur.wh&&{i:cur.wh.i,n:cur.wh.list.length}, kreuz:()=>cur.kr&&{i:cur.kr.i,n:cur.kr.items.length}}[view];
    const r=P&&P(); return r&&r.n?r:null; },
  title:()=>({cards:"Karten",recall:"Verständnisfragen",who:"Wer sagt das?",kreuz:"Kreuzaufgaben",kurz:"Kurzfrage",task:"Rechenaufgabe",graph:"Grafik",essay:"Essay",exam:"Probeklausur"})[view]||"",
  exit:()=>go(TAB_OF[view]||"home")
 },
 examAssumed:()=>examAssumed(),                 /* kein Termin eingetragen: Stichtag 31.01. */
 todos:{main:[
  {id:"w2-plan", t:"Entschieden: Makro in diesem Semester schreiben", d:"sonst im Sommersemester"},
  {id:"w2-his", t:"Zur Klausur in HIS in One angemeldet", d:"Frist im HIS prüfen"},
  {id:"w2-termin", t:"Klausurtermin unter „Prüfung“ eingetragen", d:"bis dahin gilt der Stichtag 31.01."}
 ]}
};
