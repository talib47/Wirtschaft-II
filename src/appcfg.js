/* ================= Einstellungen nur dieser App für die gemeinsamen Bausteine (status.js) ================= */
const APP={
 name:"Wirtschaft II",
 halves:false,
 chap:n=>CHAPTERS.find(c=>c.n===n),
 unit:()=>"Kapitel",
 unitNo:c=>c.n,
 examTs:()=>examDateTs(),
 examAssumed:()=>examAssumed(),                 /* kein Termin eingetragen: Stichtag 31.01. */
 todos:{main:[
  {id:"w2-plan", t:"Entschieden: Makro in diesem Semester schreiben", d:"sonst im Sommersemester"},
  {id:"w2-his", t:"Zur Klausur in HIS in One angemeldet", d:"Frist im HIS prüfen"},
  {id:"w2-termin", t:"Klausurtermin unter „Prüfung“ eingetragen", d:"bis dahin gilt der Stichtag 31.01."}
 ]}
};
