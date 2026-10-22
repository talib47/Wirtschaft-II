/* ================= Kurzfragen (Teil I) und Probeklausur ================= */
const KURZ=[
 {id:"k01", g:"strom", q:"Benennen Sie a) zwei Stromgrößen und b) eine Bestandsgröße.", k:["Erste Stromgröße korrekt (z. B. BIP, Konsum, Investitionen, Exporte, Löhne, Haushaltsdefizit)","Zweite Stromgröße korrekt","Bestandsgröße korrekt (z. B. Staatsverschuldung, Vermögen der Haushalte, Kapitalstock)"], m:"a) Stromgrößen: Bruttoinlandsprodukt, privater Konsum (auch: Investitionen, Exporte, Löhne, staatliches Haushaltsdefizit)\nb) Bestandsgröße: Staatsverschuldung (auch: Nettovermögen der Haushalte, Wert des Kapitalstocks)\nUnterschied: Ströme werden für einen **Zeitraum** gemessen, Bestände zu einem **Zeitpunkt**."},
 {id:"k02", g:"strom", q:"Erläutern Sie den Unterschied zwischen dem realen und dem nominalen BIP.", k:["Nominales BIP: zu laufenden Preisen","Reales BIP: in Preisen eines Basisjahres (preisbereinigt)","Reales Wachstum ≈ nominales Wachstum − Inflation (mit Beispiel)"], m:"1. Nominales BIP: die Produktion zu **laufenden Preisen**\n2. Reales BIP: in **Preisen eines Basisjahres**, also um Preisänderungen bereinigt\n3. Zusammenhang: reales Wachstum ≈ nominales Wachstum − Inflation. Beispiel: nominal +4 %, Inflation 1 % ⇒ real etwa +3 %"},
 {id:"k03", g:"bip", q:"Erläutern Sie eine Kritik am Konzept des BIP aus Sicht des Keynesianismus.", k:["Ziel: BIP soll die aggregierte, beschäftigungswirksame Nachfrage messen","Problem: enthält Komponenten ohne monetäre, beschäftigungswirksame Ausgaben","Beispiel: imputierte Mieten für selbst genutztes Wohneigentum oder impliziter Konsum von Finanzdienstleistungen"], m:"1. Ziel: Aus keynesianischer Sicht soll das BIP die **beschäftigungswirksame Nachfrage** messen.\n2. Problem: Es enthält Komponenten ohne echte Geldausgaben, etwa **imputierte Mieten** für selbst genutztes Wohneigentum. Es wird so getan, als vermieteten Eigentümer an sich selbst.\n3. Folge: Steigen die Mieten, steigen privater Konsum und BIP, ohne dass mehr Beschäftigung entsteht."},
 {id:"k04", g:"bip", q:"Erläutern Sie eine Kritik am Konzept des BIP aus Sicht der Feministischen Ökonomik.", k:["Ziel: BIP soll die gesamte ökonomische Arbeit erfassen","Problem: unbezahlte (Sorge-)Arbeit bleibt unberücksichtigt","Vertiefung: Produktivität bei Sorgearbeit kaum messbar, oder Widerspruch zu imputierten Mieten, oder ungleiche Verteilung zwischen Frauen und Männern"], m:"1. Ziel: Aus feministischer Sicht soll das BIP die **gesamte ökonomische Arbeit** erfassen.\n2. Problem: **Unbezahlte Sorgearbeit** im Haushalt fehlt, obwohl Frauen sie überwiegend leisten. Ihre Produktivität ist zudem kaum messbar.\n3. Widerspruch: Man unterstellt, dass Eigentümer sich Miete zahlen, aber niemandem Lohn für Kinderbetreuung."},
 {id:"k05", g:"bip", q:"Erläutern Sie eine Kritik am Konzept des BIP aus neoklassischer Sicht.", k:["Ziel: BIP soll ein Wohlfahrtsmaß sein","Externalitäten bleiben weitgehend unberücksichtigt (Beispiel: Beseitigung von Umweltschäden erhöht das BIP)","Preise aus unvollständiger Konkurrenz überschätzen die Wohlfahrt"], m:"1. Ziel: Neoklassisch soll das BIP die **Wohlfahrt** messen.\n2. Problem: **Externalitäten** fehlen weitgehend. Ausgaben zur Beseitigung von Umweltschäden erhöhen sogar das BIP.\n3. Problem: Preise aus unvollständiger Konkurrenz (Monopole, Oligopole) **überschätzen** die Wohlfahrt."},
 {id:"k06", g:"bip", q:"Erläutern Sie eine Kritik am Konzept des BIP aus klassischer bzw. marxistischer Sicht.", k:["Ziel: BIP soll Grundlage für die Verteilung zwischen Klassen sein","Finanzsektor ist unproduktiv, verschiebt nur Werte, sollte nicht Teil des BIP sein","Kapitaleinkommen sind leistungslose Renten, keine Faktoreinkommen"], m:"1. Ziel: Klassisch-marxistisch soll das BIP die **Verteilung zwischen Klassen** zeigen.\n2. Problem: Der **Finanzsektor ist unproduktiv**, er verschiebt nur Werte. Finanzdienstleistungen sollten nicht Teil des BIP sein.\n3. Folge: Kapitaleinkommen sind **leistungslose Renten**, keine Faktoreinkommen."},
 {id:"k07", g:"bip", q:"Erläutern Sie eine Kritik am Konzept des BIP aus ökologischer Sicht.", k:["Einbettung der Ökonomie ins Ökosystem bleibt außen vor","Luxuskonsum zählt wie Grundbedürfnisse","Folge: BIP-Wachstum kann mit wachsenden Umweltschäden und Emissionen einhergehen"], m:"1. Problem: Das BIP lässt die **Einbettung der Ökonomie ins Ökosystem** außen vor.\n2. Problem: Energieintensiver **Luxuskonsum** zählt genauso wie Konsum für Grundbedürfnisse.\n3. Folge: Steigendes BIP kann mit steigenden Emissionen einhergehen, ohne dass der Verlust an natürlichen Lebensgrundlagen sichtbar wird."},
 {id:"k08", g:"export", q:"Erläutern Sie, welche Probleme sich in einer offenen Volkswirtschaft ergeben, wenn alle Länder einen Exportüberschuss anstreben.", k:["Nettoexporte der Welt sind immer null (Welt ist geschlossene Volkswirtschaft)","Überschüsse eines Landes erfordern Defizite und Verschuldung anderer","Streben alle Überschüsse an (und sparen binnenwirtschaftlich), droht ein weltweiter Nachfragemangel mit Arbeitslosigkeit"], m:"1. Die Welt ist eine geschlossene Volkswirtschaft: Die **Nettoexporte aller Länder summieren sich zu null**.\n2. Ein Überschuss setzt voraus, dass andere Länder **Defizite** haben und sich verschulden.\n3. Streben alle Überschüsse an und sparen im Inland, entsteht ein **weltweiter Nachfragemangel** mit Arbeitslosigkeit."},
 {id:"k09", g:"zb", q:"Ein negativer Nachfrageschock trifft die Wirtschaft (i/Y-Diagramm mit Zinslinie). Erläutern Sie, wie die Zentralbank reagieren sollte, wenn sie die Output-Lücke schließen möchte.", k:["Schock verschiebt die Nachfragekurve nach links, Output fällt bei altem Zins unter Y_POT","Zentralbank senkt den Zins (Zinslinie nach unten)","Begründung: niedrigerer Zins regt die Investitionen an (I = d − n·i), Output steigt zurück auf Y_POT"], m:"1. Der Schock verschiebt die Nachfragekurve **nach links**. Beim alten Zins liegt der Output unter dem Potenzial.\n2. Die Zentralbank sollte den **Zins senken**.\n3. Begründung: Ein niedrigerer Zins erhöht über I = d − n·i die **Investitionen**, bis der Output wieder dem Potenzial entspricht."},
 {id:"k10", g:"begriff", q:"Erläutern Sie das Keynes'sche Sparparadox.", k:["Wollen alle mehr sparen, sinkt die Konsumnachfrage","Investitionen steigen nicht automatisch, über den Multiplikator sinken Einkommen","Ergebnis: gesamtwirtschaftlich wird nicht mehr gespart (S = I), nur das Einkommen ist gesunken"], m:"1. Wollen alle mehr sparen, sinkt die **Konsumnachfrage**.\n2. Die Unternehmen investieren deshalb nicht mehr, über den **Multiplikator** sinken die Einkommen.\n3. Am Ende wird **nicht mehr gespart**, denn S = I, und I hat sich nicht verändert. Individuell vernünftig, gesamtwirtschaftlich kontraproduktiv."},
 {id:"k11", g:"begriff", q:"Erläutern Sie das Kostenparadox.", k:["Voraussetzung: Lohnbezieher:innen haben höhere Konsumneigung als Gewinnbezieher:innen","Höhere Löhne erhöhen die Güternachfrage und das Einkommen","Paradox: alle haben höhere Kosten, trotzdem können gesamtwirtschaftliche Gewinne Π = Y − W steigen"], m:"1. Voraussetzung: Lohnbezieher:innen haben eine **höhere Konsumneigung** als Gewinnbezieher:innen.\n2. Höhere Reallöhne erhöhen dann Güternachfrage und Einkommen.\n3. Paradox: Alle Unternehmen haben höhere Kosten, trotzdem können die **Gewinne** Π = Y − W **steigen**. Einzelne Lohnabschlüsse haben externe Effekte."},
 {id:"k12", g:"begriff", q:"Was versteht man unter Hysterese am Arbeitsmarkt?", k:["Ein vorübergehender Nachfragemangel wirkt dauerhaft nach","Mechanismus: Langzeitarbeitslose verlieren Qualifikation/Bezug, Unternehmen unterlassen Investitionen","Folge: strukturelle Arbeitslosigkeit steigt, Produktionspotenzial sinkt"], m:"1. Definition: Ein Zustand **dauert fort**, auch wenn die Ursache weggefallen ist.\n2. Mechanismus: Langzeitarbeitslose verlieren Qualifikation und Bezug zur Arbeitswelt, Unternehmen stellen **Investitionen** zurück.\n3. Folge: Strukturelle Arbeitslosigkeit steigt, das **Produktionspotenzial sinkt**. Aus einem konjunkturellen wird ein strukturelles Problem."},
 {id:"k13", g:"begriff", q:"Was besagt die Ricardianische Äquivalenz, und was folgt daraus für den Multiplikator?", k:["Haushalte erwarten bei kreditfinanzierten Staatsausgaben künftige Steuererhöhungen","Sie sparen schon heute mehr, der private Konsum sinkt","Der Multiplikator ist sehr klein bzw. null (Neuklassik)"], m:"1. Rationale Haushalte erwarten, dass kreditfinanzierte Staatsausgaben später über **höhere Steuern** bezahlt werden.\n2. Sie **sparen schon heute mehr**, der private Konsum sinkt.\n3. Folge: Der Multiplikator wird sehr klein, im Extremfall **null**. Argument der Neuklassik gegen Konjunkturpolitik."},
 {id:"k14", g:"begriff", q:"Warum ist der Multiplikator der Staatsausgaben größer als der Multiplikator einer Steuersenkung?", k:["m_G = 1/(1 − c₁), m_T = c₁/(1 − c₁)","Staatsausgaben gehen voll in die Nachfrage ein","Von einer Steuersenkung wird ein Teil (1 − c₁) gespart, nur c₁ wird nachfragewirksam"], m:"1. Formeln: Staatsausgaben 1/(1 − c₁), Steuern c₁/(1 − c₁)\n2. Staatsausgaben gehen **voll** in die Nachfrage ein.\n3. Eine Steuersenkung erhöht nur das verfügbare Einkommen, davon wird der Anteil 1 − c₁ **gespart**. Die Differenz der Multiplikatoren beträgt genau 1."},
 {id:"k15", g:"begriff", q:"Nennen Sie die Ziele des magischen Vierecks und erklären Sie, warum es „magisch“ heißt.", k:["Hoher Beschäftigungsstand und stabiles Preisniveau","Außenwirtschaftliches Gleichgewicht und angemessenes, stetiges Wachstum","„Magisch“: Ziele lassen sich wegen Zielkonflikten kaum gleichzeitig erreichen"], m:"1. Ziele nach dem Stabilitäts- und Wachstumsgesetz von 1967: hoher Beschäftigungsstand, stabiles Preisniveau\n2. außerdem: außenwirtschaftliches Gleichgewicht, angemessenes und stetiges Wachstum\n3. „Magisch“: Wegen **Zielkonflikten** lassen sich die Ziele kaum alle gleichzeitig erreichen, etwa Vollbeschäftigung und Preisstabilität."},
 {id:"k16", g:"begriff", q:"Unterscheiden Sie automatische Stabilisatoren und diskretionäre Fiskalpolitik.", k:["Automatische Stabilisatoren wirken ohne Beschluss mit der Konjunktur","Beispiel: Steuereinnahmen, Arbeitslosenunterstützung/Bürgergeld","Diskretionär: fallweise beschlossene Maßnahmen, z. B. Konjunkturprogramm"], m:"1. Automatische Stabilisatoren wirken **ohne politische Entscheidung**: Im Abschwung steigt das Defizit von selbst und stützt die Nachfrage.\n2. Beispiele: Steuereinnahmen, Ausgaben für Arbeitslose (Bürgergeld)\n3. Diskretionäre Fiskalpolitik: **fallweise beschlossene** Maßnahmen, etwa ein Konjunkturprogramm"},
 {id:"k17", g:"begriff", q:"Warum gilt in einer geschlossenen Volkswirtschaft ohne Staat immer S = I, und worüber streiten Neoklassik und Keynesianismus dabei?", k:["Herleitung: Y = C + I und Y = C + S, also S = I","Identität: gilt immer, unabhängig von der Theorie","Streit um Kausalität: Neoklassik S → I (Zins), Keynesianismus I → S (Einkommen)"], m:"1. Herleitung: Y = C + I und Y = C + S, also **S = I**.\n2. Das ist eine **Identität**, sie gilt immer.\n3. Streit um die **Kausalität**: neoklassisch S → I (Ersparnis bestimmt über den Zins die Investitionen), keynesianisch I → S (Investitionen bestimmen über das Einkommen die Ersparnis)."},
 {id:"k18", g:"begriff", q:"Was ist die NAIRU, und wie verläuft die langfristige Phillips-Kurve laut Monetarismus?", k:["NAIRU: Arbeitslosenquote, bei der die Inflation nicht beschleunigt (natürliche Arbeitslosigkeit)","Langfristige Phillips-Kurve vertikal bei der NAIRU","Nachfragepolitik darüber hinaus führt nur zu steigender Inflation"], m:"1. NAIRU: die Arbeitslosenquote, bei der die Inflation **nicht beschleunigt** (non-accelerating inflation rate of unemployment)\n2. Laut Monetarismus ist die langfristige Phillips-Kurve dort **vertikal**.\n3. Drückt Nachfragepolitik die Arbeitslosigkeit darunter, beschleunigt sich nur die Inflation, weil die Inflationserwartungen steigen."},
 {id:"k19", g:"begriff", q:"Erläutern Sie die Investitionsfalle.", k:["Investitionen reagieren wegen pessimistischer Erwartungen nicht auf den Zins","Nachfragekurve im i/Y-Diagramm senkrecht, Zinssenkung wirkungslos","Nur expansive Fiskalpolitik hilft"], m:"1. Die Erwartungen der Unternehmen sind so schlecht, dass die Investitionen **nicht auf Zinssenkungen reagieren**.\n2. Im i/Y-Diagramm verläuft die Nachfragekurve **senkrecht**, eine niedrigere Zinslinie ändert den Output nicht.\n3. Nur **expansive Fiskalpolitik** kann die Kurve nach rechts verschieben."},
 {id:"k20", g:"begriff", q:"Was ist der Beutelsbacher Konsens?", k:["Überwältigungsverbot","Kontroversitätsgebot","Schülerorientierung / Analyse der eigenen Interessenlage"], m:"1. Überwältigungsverbot: Schüler:innen dürfen nicht im Sinne erwünschter Meinungen überrumpelt werden.\n2. Kontroversitätsgebot: Was in Wissenschaft und Politik kontrovers ist, muss im Unterricht kontrovers erscheinen.\n3. Schülerorientierung: Schüler:innen sollen eine politische Situation und ihre eigene Interessenlage analysieren können."},
 {id:"k21", g:"begriff", q:"Was ist ein exportgetriebenes, was ein schuldengetriebenes Wachstumsmodell?", k:["Export-led: Lohnzurückhaltung, schwache Binnennachfrage, Leistungsbilanzüberschüsse (Deutschland)","Debt-led: Konsum unterer Einkommen auf Kredit, Defizite (USA)","Gemeinsam: Ersatz für fehlende Lohnnachfrage seit den 1980ern, Krise seit 2008"], m:"1. Ausgangslage: Seit den 1980ern fallen die **Löhne der Mittelschicht** als Basis der Nachfrage aus.\n2. Schuldengetrieben (USA, UK): Untere Einkommensgruppen **konsumieren auf Kredit**, dazu Staats- und Leistungsbilanzdefizite.\n3. Exportgetrieben (Deutschland, Japan, China): **Lohnzurückhaltung** und hohe Ersparnis von Unternehmen und Staat schwächen die Binnennachfrage, Wachstum kommt über **Leistungsbilanzüberschüsse**."},
 {id:"k22", g:"begriff", q:"Warum kann ein Individuum in Form von Geld sparen, aber nicht die gesamte Gesellschaft?", k:["Ausgaben des einen sind Einnahmen des anderen","Gesamtwirtschaftlich S = I: Gesellschaft spart nur, indem sie investiert","Summe der Geldvermögen ist null; wollen alle nur Geld sparen, sinkt Y"], m:"1. Was ein Haushalt nicht ausgibt, fehlt einem anderen als **Einnahme**.\n2. Gesamtwirtschaftlich gilt **S = I**: Die Gesellschaft kann nur sparen, indem sie investiert. Jedem Geldvermögen steht eine Schuld gegenüber.\n3. Wollten alle nur Geld sparen, wäre Y = C + I = 0, und niemand hätte Einkommen."}
];

/* ---------- Kurzfragen üben ---------- */
function kurzScore(id){ return (state.kurz||{})[id]; }
function pickKurz(){ const w=KURZ.map(x=>{ const s=kurzScore(x.id); return !s?4:(s.p<3?3:1); }); let r=Math.random()*w.reduce((a,b)=>a+b,0), i=0; for(;i<KURZ.length;i++){ r-=w[i]; if(r<=0) break; } return KURZ[Math.min(i,KURZ.length-1)]; }
function openKurz(){ cur.kz=pickKurz(); cur.kzph="schreiben"; cur.kzc={}; cur.kzt=""; go("kurz"); }
function renderKurz(){
  const x=cur.kz, done=Object.keys(state.kurz||{}).length;
  $("#app").innerHTML=`${backTo("Üben")}
    <p class="eyebrow">Teil I · Kurzfrage · 3 Punkte · ${done} von ${KURZ.length} bearbeitet</p>
    <div class="block"><p style="margin:0"><b>${x.q}</b></p><p class="small muted" style="margin:8px 0 0">In der Klausur hast du etwa 3 Minuten. Antworte in zwei bis vier Sätzen.</p></div>
    <div class="essay">${cur.kzph==="schreiben"?`
      <label class="small muted" for="kt">Deine Antwort</label>
      <textarea id="kt" style="margin-top:6px;min-height:8rem">${esc(cur.kzt)}</textarea>
      <div class="row" style="margin-top:10px"><button class="btn" id="kd">Antwort prüfen</button></div>`:`
      <div class="block"><h3>Erwartungshorizont (je 1 Punkt)</h3>${x.k.map((k,j)=>`<label class="check"><input type="checkbox" id="q${j}" ${cur.kzc[j]?"checked":""}><span>${k}</span></label>`).join("")}
        <div class="row"><button class="btn" id="ks">Speichern und weiter</button><button class="btn ghost" id="kn">Ohne Speichern weiter</button></div></div>
      ${cur.kzt?`<div class="block"><h3>Deine Antwort</h3><p style="white-space:pre-wrap;margin:0">${esc(cur.kzt)}</p></div>`:""}
      <div class="block lesson card-like"><h3>Musterlösung</h3><div class="ml">${richText(x.m)}</div></div>`}
    </div>`;
  bindCrumb(()=>go("practice"));
  if($("#kd")) $("#kd").onclick=()=>{ cur.kzt=$("#kt").value; cur.kzph="bewerten"; renderKurz(); window.scrollTo(0,0); };
  document.querySelectorAll(".check input").forEach(c=>c.onchange=()=>{ cur.kzc[+c.id.slice(1)]=c.checked; });
  if($("#ks")) $("#ks").onclick=()=>{ state.kurz=state.kurz||{}; const p=x.k.filter((_,j)=>cur.kzc[j]).length; state.kurz[x.id]={p,t:Date.now()}; logDay(); save(); toast(`${p} von 3 Punkten gespeichert`); openKurz(); };
  if($("#kn")) $("#kn").onclick=openKurz;
}

/* ---------- Probeklausur ---------- */
const EXAM_GRAPHS=["g6a","g7a","g4a","g2"];
const EXAM_ESSAYS=()=>Object.values(ESSAYS).flat().filter(e=>e.pts===24);
function findGraph(id){ return Object.values(GRAPHS).flat().find(g=>g.id===id); }
function newExam(min){
  const bip=shuffle(KURZ.filter(x=>x.g==="bip"))[0], other=shuffle(KURZ.filter(x=>x.g!=="bip"&&x.g!=="begriff"))[0], beg=shuffle(KURZ.filter(x=>x.g==="begriff"))[0];
  const numT=pick(["schuld","salden"]);
  const texts=shuffle([bip,other,beg]);
  const vgr=(()=>{ for(;;){ const d=TYPES.vgr.gen(); if(d.steps.filter(s=>s.final).length===2) return d; } })();
  return {start:Date.now(), min, phase:"run",
    teil1:[...texts.map(x=>({kind:"text",id:x.id,ans:""})), {kind:"num",data:TYPES[numT].gen(),ans:""}],
    vgr:{data:vgr, ans:{}}, komb:{data:TYPES.klausur.gen(), herl:"", ans:{}},
    graph:pick(EXAM_GRAPHS), essay:pick(EXAM_ESSAYS()).id, essayTxt:"", grade:{}};
}
let examTimer=null, examStrokes=[];
function openExam(){ cur.examSetup=true; go("exam"); }
function examLeft(){ const e=state.examRun; return e? e.start+e.min*60000-Date.now() : 0; }
const mmss=ms=>{ const s=Math.max(0,Math.round(ms/1000)); return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0"); };
let examSaveT=null; function examSave(){ clearTimeout(examSaveT); examSaveT=setTimeout(()=>save(),1200); }
function renderExam(){
  clearInterval(examTimer);
  const e=state.examRun;
  if(!e){
    const hist=(state.exams||[]).slice(-5).reverse();
    $("#app").innerHTML=`${backTo("Üben")}<p class="eyebrow">Alle Teile · wie die Klausuren 2024</p><h1>Probeklausur</h1>
      <div class="block"><p>Aufbau wie in den Altklausuren: Teil I vier Kurzfragen (12 P.), Teil II VGR-Tabelle, Modell mit Staat und eine Grafik (24 P.), Teil III ein Essay (24 P.). Die Aufgaben werden jedes Mal neu zusammengestellt.</p>
      <p class="small muted">Rechenteile werden automatisch korrigiert. Kurzfragen, Herleitung, Grafik und Essay bewertest du nach der Abgabe mit dem Erwartungshorizont.</p>
      <div class="row"><button class="btn" id="x60">Start mit 60 Minuten</button><button class="btn ghost" id="x90">90 Minuten</button></div></div>
      ${hist.length?`<div class="block"><h3>Letzte Probeklausuren</h3>${hist.map(h=>`<div class="srow"><span>${new Date(h.t).toLocaleDateString("de-DE")}</span><span class="small muted">I ${h.parts[0]} · II ${h.parts[1]} · III ${h.parts[2]}</span><span class="pts">${h.pts} / 60</span></div>`).join("")}</div>`:""}`;
    bindCrumb(()=>go("practice"));
    $("#x60").onclick=()=>{ state.examRun=newExam(60); examStrokes=[]; save(); renderExam(); window.scrollTo(0,0); };
    $("#x90").onclick=()=>{ state.examRun=newExam(90); examStrokes=[]; save(); renderExam(); window.scrollTo(0,0); };
    return;
  }
  if(e.phase==="grade") return renderExamGrade();
  const K=e.komb.data, V=e.vgr.data, G=findGraph(e.graph), E=EXAM_ESSAYS().find(x=>x.id===e.essay);
  const kurzQ=(t,i)=>t.kind==="text"? KURZ.find(x=>x.id===t.id).q : t.data.q;
  const vF=V.steps.filter(s=>s.final), kF=K.steps.filter(s=>s.final);
  const inp=(key,obj,i,lab)=>`<div style="margin-top:8px"><label for="${key}${i}" class="small" style="font-weight:600">${lab}</label><div class="inp" style="margin-top:4px"><input id="${key}${i}" data-k="${key}" data-i="${i}" inputmode="decimal" autocomplete="off" value="${esc(obj[i]||"")}"></div></div>`;
  $("#app").innerHTML=`
    <div class="block row between" style="position:sticky;top:env(safe-area-inset-top,0px);z-index:4"><span><b>Probeklausur</b> <span class="small muted">60 Punkte</span></span><span class="pts" id="clock" style="font-size:1.3rem">${mmss(examLeft())}</span></div>
    <h2>Teil I: Kurz-Fragen (12 Punkte)</h2>
    ${e.teil1.map((t,i)=>`<div class="block"><p style="margin:0 0 6px"><b>${i+1}. ${t.kind==="num"?t.data.intro+" ":""}${kurzQ(t,i)}</b> <span class="small muted">(3 P.)</span></p>
      ${t.kind==="text"?`<textarea class="ta" data-t="${i}" style="width:100%;min-height:6rem;border:1px solid var(--line);border-radius:10px;background:var(--bg);padding:10px">${esc(t.ans)}</textarea>`
        :`<div class="inp"><input data-t="${i}" class="ta" inputmode="decimal" autocomplete="off" value="${esc(t.ans)}" aria-label="Antwort"><span class="small muted">in %</span></div>`}</div>`).join("")}
    <h2>Teil II: Technische Analysen (24 Punkte)</h2>
    <div class="block"><p style="margin:0"><b>5.</b> ${V.intro}</p>${V.table}<p style="margin:8px 0 0">${V.q} <span class="small muted">(je 3 P.)</span></p>
      ${vF.map((s,i)=>inp("v",e.vgr.ans,i,s.lab)).join("")}</div>
    <div class="block"><p style="margin:0"><b>6.</b> ${K.intro} Der Potenzialoutput ist in der Tabelle angegeben.</p>${K.table}
      <p style="margin:8px 0 0"><b>a)</b> Leiten Sie das gleichgewichtige Einkommen Y* allgemein her. <span class="small muted">(2 P.)</span></p>
      <textarea class="hl" style="width:100%;min-height:6rem;border:1px solid var(--line);border-radius:10px;background:var(--bg);padding:10px;margin-top:6px">${esc(e.komb.herl)}</textarea>
      <p style="margin:10px 0 0">${K.q} <span class="small muted">(b, c, d je 3 P.)</span></p>
      ${kF.map((s,i)=>inp("k",e.komb.ans,i,s.lab)).join("")}
      <p style="margin:14px 0 0"><b>e)</b> ${G.task} <span class="small muted">(7 P.)</span></p>
      <div class="gbox" style="margin-top:8px"><svg viewBox="0 0 400 300" aria-hidden="true">${GFX[G.id].base()}</svg><canvas id="xc" aria-label="Zeichenfläche"></canvas></div>
      <div class="row" style="margin-top:8px"><button class="btn ghost small" id="xu">Zurück</button><button class="btn ghost small" id="xx">Leeren</button></div></div>
    <h2>Teil III: Essay (24 Punkte)</h2>
    <div class="block"><p style="margin:0"><b>7.</b> ${E.q}</p>
      <textarea class="es" style="width:100%;min-height:18rem;border:1px solid var(--line);border-radius:10px;background:var(--bg);padding:12px;margin-top:8px;font:1rem/1.55 var(--sans)">${esc(e.essayTxt)}</textarea></div>
    <div class="row" style="margin-bottom:20px"><button class="btn" id="xsub">${cur.xArm?"Wirklich abgeben":"Abgeben und bewerten"}</button><button class="btn warn" id="xq">${cur.xQuit?"Wirklich abbrechen":"Abbrechen"}</button></div>`;
  document.querySelectorAll(".ta").forEach(t=>t.oninput=()=>{ e.teil1[+t.dataset.t].ans=t.value; examSave(); });
  document.querySelectorAll("input[data-k]").forEach(t=>t.oninput=()=>{ (t.dataset.k==="v"?e.vgr.ans:e.komb.ans)[+t.dataset.i]=t.value; examSave(); });
  $(".hl").oninput=ev=>{ e.komb.herl=ev.target.value; examSave(); };
  $(".es").oninput=ev=>{ e.essayTxt=ev.target.value; examSave(); };
  const s=drawSurface($("#xc"),examStrokes); $("#xu").onclick=()=>s.undo(); $("#xx").onclick=()=>s.clear();
  $("#xsub").onclick=()=>{ if(!cur.xArm){ cur.xArm=true; $("#xsub").textContent="Wirklich abgeben"; return; } cur.xArm=false; e.phase="grade"; e.used=Date.now()-e.start; save(); renderExam(); window.scrollTo(0,0); };
  $("#xq").onclick=()=>{ if(!cur.xQuit){ cur.xQuit=true; $("#xq").textContent="Wirklich abbrechen"; return; } cur.xQuit=false; state.examRun=null; save(); renderExam(); };
  examTimer=setInterval(()=>{ const c=$("#clock"); if(!c||view!=="exam"){ clearInterval(examTimer); return; } const l=examLeft(); c.textContent=mmss(l); if(l<=0){ c.textContent="Zeit um"; c.style.color="var(--bad)"; } },1000);
}
function examAuto(){
  const e=state.examRun, V=e.vgr.data.steps.filter(s=>s.final), K=e.komb.data.steps.filter(s=>s.final), num=e.teil1[3];
  const ok=(s,v)=>!!judge(s,v||"");
  const n1=ok(num.data.steps.find(s=>s.final),num.ans)?3:0;
  const v=V.map((s,i)=>ok(s,e.vgr.ans[i])?3:0);
  const k=[ok(K[0],e.komb.ans[0])?2:0, ok(K[1],e.komb.ans[1])?1:0, ok(K[2],e.komb.ans[2])?3:0, ok(K[3],e.komb.ans[3])?3:0];
  return {n1,v,k};
}
function renderExamGrade(){
  const e=state.examRun, a=examAuto(), g=e.grade, G=findGraph(e.graph), E=EXAM_ESSAYS().find(x=>x.id===e.essay);
  const K=e.komb.data, V=e.vgr.data;
  const cnt=key=>Object.keys(g).filter(x=>x.startsWith(key)&&g[x]).length;
  const t1=()=>e.teil1.slice(0,3).reduce((s,_,i)=>s+cnt("t"+i+"_"),0)+a.n1;
  const herlP=()=>Math.min(2,cnt("h_"));
  const gP=()=>Math.round(7*cnt("g_")/G.check.length);
  const t2=()=>a.v[0]+a.v[1]+herlP()+a.k.reduce((x,y)=>x+y,0)+gP();
  const t3=()=>Math.round(24*cnt("e_")/E.k.length);
  const box=(key,list)=>list.map((k,j)=>`<label class="check"><input type="checkbox" data-g="${key}${j}" ${g[key+j]?"checked":""}><span>${k}</span></label>`).join("");
  const res=(ok,p,max,txt)=>`<p class="res ${p===max?"good":"bad"}" style="margin:4px 0">${p} / ${max} P. ${txt}</p>`;
  const sol=steps=>`<div class="stack" style="margin-top:6px">${steps.map((s,i)=>`<div><div class="small" style="font-weight:600">${s.lab}</div><div class="eq">${esc(s.calc)}</div></div>`).join("")}</div>`;
  $("#app").innerHTML=`<p class="eyebrow">Probeklausur · Bewertung · ${Math.round((e.used||0)/60000)} von ${e.min} Minuten genutzt</p>
    <div class="block row between" style="position:sticky;top:env(safe-area-inset-top,0px);z-index:4"><span><b>Ergebnis</b></span><span class="pts" id="tot" style="font-size:1.3rem"></span></div>
    <h2>Teil I</h2>
    ${e.teil1.slice(0,3).map((t,i)=>{ const x=KURZ.find(y=>y.id===t.id); return `<div class="block"><p style="margin:0"><b>${i+1}. ${x.q}</b></p>
      <p class="small" style="white-space:pre-wrap;background:var(--bg);border-radius:8px;padding:8px">${esc(t.ans)||'<span class="muted">keine Antwort</span>'}</p>
      ${box("t"+i+"_",x.k)}<details><summary class="small">Musterlösung</summary><div class="small ml">${richText(x.m)}</div></details></div>`;}).join("")}
    <div class="block"><p style="margin:0"><b>4.</b> ${e.teil1[3].data.q}</p>${res(a.n1,a.n1,3,"Deine Antwort: "+esc(e.teil1[3].ans||"–"))}${sol(e.teil1[3].data.steps)}</div>
    <h2>Teil II</h2>
    <div class="block"><p style="margin:0"><b>5.</b> VGR-Tabelle</p>${V.steps.filter(s=>s.final).map((s,i)=>res(0,a.v[i],3,s.lab+": "+esc(e.vgr.ans[i]||"–"))).join("")}${sol(V.steps)}</div>
    <div class="block"><p style="margin:0"><b>6a.</b> Herleitung</p><p class="small" style="white-space:pre-wrap;background:var(--bg);border-radius:8px;padding:8px">${esc(e.komb.herl)||'<span class="muted">keine Antwort</span>'}</p>
      ${box("h_",["Nachfrage Y^N = c₀ + c₁(Y − T) + d − n·i + G aufgestellt und Gleichgewicht Y^A = Y^N angesetzt","Korrekt aufgelöst: Y* = 1/(1 − c₁) · (c₀ − c₁T + d − n·i + G)"])}
      <p style="margin:12px 0 0"><b>6b–d.</b></p>${K.steps.filter(s=>s.final).map((s,i)=>res(0,a.k[i],[2,1,3,3][i],s.lab+": "+esc(e.komb.ans[i]||"–"))).join("")}${sol(K.steps)}
      <p style="margin:12px 0 0"><b>6e.</b> ${G.t}</p>
      <div class="gbox" style="margin-top:8px"><svg viewBox="0 0 400 300" aria-hidden="true">${GFX[G.id].base()}</svg><canvas id="xc"></canvas><svg class="solsvg" viewBox="0 0 400 300">${GFX[G.id].sol()}</svg></div>
      <p class="small muted">Blau ist die Musterlösung über deiner Zeichnung. Je Haken gibt es anteilig von 7 Punkten.</p>${box("g_",G.check)}</div>
    <h2>Teil III</h2>
    <div class="block"><p style="margin:0"><b>7.</b> ${E.q}</p>${box("e_",E.k)}
      <details><summary class="small">Deine Antwort</summary><p class="small" style="white-space:pre-wrap">${esc(e.essayTxt)||"–"}</p></details>
      <details><summary class="small">Musterlösung</summary>${E.m.split("\n\n").map(p=>`<p class="small">${p}</p>`).join("")}</details>
      <button class="btn ghost small" id="xcl" style="margin-top:8px">Essay für Claude kopieren</button><div id="xcp"></div></div>
    <div class="block"><h3 id="sum"></h3><p class="small muted" id="weak"></p><div class="row"><button class="btn" id="xsave">Ergebnis speichern</button><button class="btn ghost" id="xnew">Verwerfen</button></div></div>`;
  const s=drawSurface($("#xc"),examStrokes); void s;
  const upd=()=>{ const p=[t1(),t2(),t3()], tot=p[0]+p[1]+p[2]; $("#tot").textContent=`${tot} / 60`; $("#sum").textContent=`Teil I ${p[0]}/12 · Teil II ${p[1]}/24 · Teil III ${p[2]}/24 = ${tot} Punkte (${Math.round(tot/60*100)} %)`;
    const r=[p[0]/12,p[1]/24,p[2]/24], w=r.indexOf(Math.min(...r)); $("#weak").textContent=["Am meisten holst du in Teil I: Kurzfragen im Üben-Tab und Karten wiederholen.","Am meisten holst du in Teil II: Rechentrainer in der Stufe Frei und die Grafiken üben.","Am meisten holst du in Teil III: Essays mit Erwartungshorizont schreiben, die Paradigmen-Vergleiche (Kap. 3.7) wiederholen."][w]; return p; };
  document.querySelectorAll("[data-g]").forEach(c=>c.onchange=()=>{ g[c.dataset.g]=c.checked; upd(); examSave(); });
  upd();
  $("#xcl").onclick=async()=>{ const prompt=`Bewerte bitte meinen Essay aus einer Probeklausur „Einführung in die Makroökonomik“ (UDE, Folien van Treeck), 24 Punkte.\n\nAufgabe:\n${E.q}\n\nErwartungshorizont:\n${E.k.map(k=>"- "+k).join("\n")}\n\nMein Essay:\n${e.essayTxt}\n\nGib mir eine Punktzahl mit Begründung je Kriterium und zwei konkrete Verbesserungen.`;
    try{ await navigator.clipboard.writeText(prompt); toast("Kopiert. In den Claude-Chat einfügen."); }catch(x){ $("#xcp").innerHTML=`<textarea style="width:100%;min-height:8rem;margin-top:8px" readonly>${esc(prompt)}</textarea>`; $("#xcp textarea").select(); } };
  $("#xsave").onclick=()=>{ const p=upd(); state.exams=state.exams||[]; state.exams.push({t:Date.now(),pts:p[0]+p[1]+p[2],parts:p,min:e.min}); state.examRun=null; examStrokes=[]; logDay(); save(); toast("Ergebnis gespeichert"); renderExam(); window.scrollTo(0,0); };
  $("#xnew").onclick=()=>{ if(!cur.xDel){ cur.xDel=true; $("#xnew").textContent="Wirklich verwerfen"; return; } cur.xDel=false; state.examRun=null; examStrokes=[]; save(); renderExam(); };
}
