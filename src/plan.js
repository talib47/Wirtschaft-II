/* ================= Klausurtermin, Probeklausur-Plan und Schwachstellen ================= */
const fmtDate=t=>{ const d=new Date(t); return ["So","Mo","Di","Mi","Do","Fr","Sa"][d.getDay()]+" "+d.getDate()+"."+(d.getMonth()+1)+"."; };
const examDateTs=()=>{ const s=state.examDate; if(!s) return null; const [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d).getTime(); };
/* Plan: eine Probeklausur früh als Standortbestimmung, dann 21, 14 und 7 Tage vor dem Termin */
function examPlan(){
  const T=examDateTs(), ex=(state.exams||[]).map(e=>e.t).sort((a,b)=>a-b);
  const P=[{lab:"Standortbestimmung", when:null}];
  if(T) [21,14,7].forEach(d=>P.push({lab:`${d} Tage vor der Klausur`, when:T-d*864e5}));
  // jede geschriebene Probeklausur hakt den frühesten offenen Termin ab, dessen Zeitpunkt schon (fast) erreicht ist
  const used=new Set();
  P.forEach(p=>{ const i=ex.findIndex((t,k)=>!used.has(k)&&(p.when==null||t>=p.when-3*864e5)); if(i>=0){ used.add(i); p.done=ex[i]; } });
  return P;
}
function examPlanToday(){
  const P=examPlan(), now=Date.now(), open=P.find(p=>!p.done);
  if(!open) return "";
  if(open.when==null) return "Schreib bald eine als Standortbestimmung (unter Üben).";
  if(open.when-now<=864e5) return `Laut Plan ist jetzt die nächste dran (${open.lab}).`;
  return "";
}
function examPlanBlock(){
  const T=examDateTs(), P=examPlan(), days=T?Math.ceil((T-dayStart())/864e5):null;
  return `<div class="block"><h2>Klausur und Probeklausuren</h2>
    <div class="row" style="margin-bottom:8px"><label class="small" for="exD">Klausurtermin</label><input type="date" id="exD" value="${state.examDate||""}" class="dateinp"><button class="btn ghost small" id="exS">Speichern</button></div>
    ${T?`<p class="small" style="margin:0 0 6px">${days>0?`Noch <b>${days} Tage</b> bis zur Klausur.`:days===0?"<b>Heute ist Klausur.</b> Viel Erfolg!":"Der Termin liegt in der Vergangenheit."}</p>`:`<p class="small muted" style="margin:0 0 6px">Trag den Termin ein, sobald er feststeht. Dann plant die App drei Probeklausuren in den letzten Wochen.</p>`}
    <div class="klist">${P.map(p=>`<b>${p.done?"✓ ":""}${p.lab}</b><span>${p.done?`geschrieben am ${fmtDate(p.done)}`:p.when?fmtDate(p.when):"so bald wie möglich"}</span>`).join("")}</div></div>`;
}
function bindExamPlan(){ if($("#exS")) $("#exS").onclick=()=>{ const v=$("#exD").value; state.examDate=v||null; save(); toast(v?"Termin gespeichert":"Termin entfernt"); render(); }; }

/* Schwachstellen aus allen Übungsformen */
function weakBlock(){
  const lap=Object.entries(state.lapses||{}).filter(([id,n])=>n>=2).sort((a,b)=>b[1]-a[1]);
  const cardsAll=Object.values(CARDS).flat(), byId=Object.fromEntries(cardsAll.map(c=>[c.id,c]));
  const weakCards=lap.map(([id])=>byId[id]).filter(Boolean);
  const qs=allQuestions(), qById=Object.fromEntries(qs.map(q=>[q.id,q]));
  const weakQ=Object.entries(state.qlapses||{}).filter(([id,n])=>n>=1&&qById[id]&&((state.qbox||{})[id]||{}).b<=2).sort((a,b)=>b[1]-a[1]).map(([id])=>qById[id]);
  const weakCalc=calcTypes(0).filter(t=>{ const h=state.hist[t]; return h&&h.n>=2&&h.r/h.n<.7; }).sort((a,b)=>acc(a)-acc(b));
  const conf={}; Object.entries(state.who||{}).forEach(([id,h])=>{ if(h.conf&&!h.last){ const x=WHO.find(w=>w.id===id); if(x){ const k=SCHOOLS[x.s]+" ↔ "+SCHOOLS[h.conf]; conf[k]=(conf[k]||0)+1; } } });
  const confL=Object.entries(conf).sort((a,b)=>b[1]-a[1]).slice(0,3);
  const none=!weakCards.length&&!weakQ.length&&!weakCalc.length&&!confL.length;
  return `<div class="block"><h2>Deine Schwachstellen</h2>${none?`<p class="small muted" style="margin:0">Noch nichts Auffälliges. Die Übersicht füllt sich, sobald du übst: Karten, die du mehrmals nicht wusstest, falsche Verständnisfragen, Rechenaufgaben unter 70 % und verwechselte Denkschulen.</p>`:""}
    ${weakCards.length?`<h3>Karten, die du mehrmals nicht wusstest</h3><ul class="weak">${weakCards.slice(0,5).map(c=>`<li>${inl(c.f)}</li>`).join("")}</ul><button class="btn ghost small" id="wkC">Diese ${Math.min(weakCards.length,15)} Karten üben</button>`:""}
    ${weakQ.length?`<h3 style="margin-top:14px">Verständnisfragen mit Fehlern</h3><ul class="weak">${weakQ.slice(0,5).map(q=>`<li>${inl(q.c.q)}</li>`).join("")}</ul><button class="btn ghost small" id="wkQ">Diese Fragen üben</button>`:""}
    ${weakCalc.length?`<h3 style="margin-top:14px">Rechenaufgaben unter 70 %</h3>${weakCalc.map(t=>`<div class="srow"><span>${TYPES[t].short}</span><span class="small muted">${Math.round(acc(t)*100)} %</span><button class="btn ghost small" data-wt="${t}">Üben</button></div>`).join("")}`:""}
    ${confL.length?`<h3 style="margin-top:14px">Oft verwechselte Denkschulen</h3><ul class="weak">${confL.map(([k,n])=>`<li>${k} (${n}×)</li>`).join("")}</ul><button class="btn ghost small" id="wkW">„Wer sagt das?“ üben</button>`:""}
  </div>`;
}
function bindWeak(){
  const cardsAll=Object.values(CARDS).flat(), byId=Object.fromEntries(cardsAll.map(c=>[c.id,c]));
  if($("#wkC")) $("#wkC").onclick=()=>openCards(0,true,Object.entries(state.lapses||{}).filter(([,n])=>n>=2).sort((a,b)=>b[1]-a[1]).map(([id])=>byId[id]).filter(Boolean).slice(0,15));
  if($("#wkQ")) $("#wkQ").onclick=()=>{ const qById=Object.fromEntries(allQuestions().map(q=>[q.id,q])); openRecall(Object.entries(state.qlapses||{}).sort((a,b)=>b[1]-a[1]).map(([id])=>qById[id]).filter(Boolean).slice(0,8)); };
  document.querySelectorAll("[data-wt]").forEach(b=>b.onclick=()=>startTask(b.dataset.wt,false));
  if($("#wkW")) $("#wkW").onclick=()=>openWho(8);
}
