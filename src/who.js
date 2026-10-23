/* ================= „Wer sagt das?“: Aussagen den Denkschulen zuordnen =================
   Trainiert das Unterscheiden der Paradigmen, das Gerüst für den Essay in Teil III.
   s Schule (Schlüssel aus SCHOOLS), alt ähnliche Schulen, die nicht als falsche Antwort angeboten werden. */
const SCHOOLS={nk:"Neoklassik", key:"Keynesianismus", mon:"Monetarismus / Neuklassik", syn:"Neoklassische Synthese", nc:"Neuer Konsens", pk:"Postkeynesianismus", kl:"Klassik / Marxismus"};
const WHO=[
 {id:"w01", t:"Staatsausgaben verdrängen private Investitionen, weil die Produktion durch das Angebot begrenzt ist.", s:"nk", alt:["mon"], ex:"Crowding-out: Bei voller Auslastung geht jede zusätzliche Staatsausgabe zu Lasten privater Ausgaben."},
 {id:"w02", t:"Bei unterausgelasteten Kapazitäten ziehen Staatsausgaben private Ausgaben mit.", s:"key", alt:["pk"], ex:"Crowding-in über den Multiplikator: Die Nachfrage bestimmt die Produktion."},
 {id:"w03", t:"Kreditfinanzierte Staatsausgaben verpuffen, weil die Haushalte für künftige Steuern sparen.", s:"mon", alt:["nk"], ex:"Ricardianische Äquivalenz der Neuklassik: Der Multiplikator geht gegen null."},
 {id:"w04", t:"Kurzfristig zählt die Nachfrage, langfristig bestimmt der Arbeitsmarkt die Produktion.", s:"nc", alt:["syn"], ex:"Der Neue Konsens (Neukeynesianismus): kurzfristig keynesianisch, langfristig neoklassisch, mit Inflation Targeting."},
 {id:"w05", t:"Eine lange Nachfrageschwäche senkt das Produktionspotenzial dauerhaft.", s:"pk", alt:["key"], ex:"Hysterese: Langzeitarbeitslose verlieren Qualifikationen, Investitionen bleiben aus. Nachfrage wirkt auch langfristig."},
 {id:"w06", t:"Das Angebot schafft sich seine eigene Nachfrage.", s:"nk", alt:["kl","mon"], ex:"Das Saysche Gesetz, Grundsatz der Neoklassik: Ersparnis wird über den Zins zu Investitionen."},
 {id:"w07", t:"Die Investitionen bestimmen über das Einkommen die Ersparnis.", s:"key", alt:["pk"], ex:"I → S: Höhere Investitionen erhöhen über den Multiplikator das Einkommen, davon wird mehr gespart."},
 {id:"w08", t:"Die Ersparnis bestimmt über den Zins die Investitionen.", s:"nk", alt:["mon","syn","nc"], ex:"S → I über den Zinsmechanismus auf dem Kapitalmarkt."},
 {id:"w09", t:"Arbeiter:innen produzieren mehr Wert, als sie als Lohn erhalten.", s:"kl", ex:"Mehrwert und Ausbeutung bei Marx."},
 {id:"w10", t:"Langfristig ist die Phillips-Kurve senkrecht: Nachfragepolitik bringt nur Inflation.", s:"mon", alt:["nc"], ex:"Natürliche Arbeitslosigkeit (NAIRU) nach Friedman: kein dauerhafter Zielkonflikt."},
 {id:"w11", t:"Die Zentralbank richtet den Zins an einem Inflationsziel aus, die Fiskalpolitik bleibt passiv.", s:"nc", ex:"Inflation Targeting mit Zinsregel, passive Fiskalpolitik (Stabilitätspakt, Schuldenbremse)."},
 {id:"w12", t:"Staatsverschuldung ist kein Hindernis für Vollbeschäftigungspolitik.", s:"pk", alt:["key"], ex:"Functional Finance: Die Fiskalpolitik spielt die zentrale Rolle gegen Arbeitslosigkeit."},
 {id:"w13", t:"Arbeitslosigkeit entsteht durch zu hohe Löhne, die Lösung ist Deregulierung.", s:"nk", alt:["mon","nc"], ex:"Arbeitslosigkeit entsteht auf dem Arbeitsmarkt, etwa durch Mindestlohn oder Gewerkschaften."},
 {id:"w14", t:"Arbeitslosigkeit entsteht durch zu geringe Güternachfrage.", s:"key", alt:["pk"], ex:"Die Ursache liegt auf dem Gütermarkt: Gleichgewicht bei Unterbeschäftigung."},
 {id:"w15", t:"Exportüberschüsse spiegeln die Sparwünsche der Menschen, etwa Vorsorge für das Alter.", s:"nk", alt:["mon"], ex:"Ein mögliches Gleichgewicht der Präferenzen (so argumentiert Michael Hüther)."},
 {id:"w16", t:"Exportüberschüsse zeigen eine zu schwache Binnennachfrage, die ins Ausland verlagert wird.", s:"key", alt:["pk"], ex:"Andere Länder müssen sich verschulden. Streben alle Überschüsse an, fehlt weltweit Nachfrage."},
 {id:"w17", t:"Höhere Löhne können die Gewinne erhöhen, weil aus Löhnen mehr konsumiert wird.", s:"pk", alt:["key"], ex:"Kostenparadox mit kaleckianischer Konsumfunktion: b_W > b_Π."},
 {id:"w18", t:"Mehr Beschäftigung ohne Inflation erreicht man mit Einkommenspolitik statt Deregulierung.", s:"pk", ex:"Sozialpartner verzichten unter Vermittlung der Regierung auf Lohn-Preis-Spiralen."},
 {id:"w19", t:"Mehr Beschäftigung ohne Inflation erfordert eine Deregulierung des Arbeitsmarkts.", s:"nc", alt:["mon","nk"], ex:"Angebotspolitik: Die Lohnsetzung verschiebt sich, die NAIRU sinkt."},
 {id:"w20", t:"Der Kapitalismus führt zu wachsender Ungleichheit, erst die Vergesellschaftung der Produktionsmittel hilft.", s:"kl", ex:"Sozialphilosophie des Marxismus."},
 {id:"w21", t:"Steigt die Pacht der Grundbesitzer, sinken bei gegebener Produktion Gewinne und Investitionen.", s:"kl", ex:"Ricardos Modell mit drei Klassen: Politik für die Kapitalisten, gegen die Grundbesitzer."},
 {id:"w22", t:"Geld ist nur ein Schleier über einer realen Tauschwirtschaft.", s:"nk", alt:["mon"], ex:"Geld erleichtert nur den Tausch, an der Produktion ändert es nichts."},
 {id:"w23", t:"Wegen fundamentaler Unsicherheit wird Geld gehortet, ohne dass Produktion entsteht.", s:"key", alt:["pk"], ex:"Monetäre Produktionswirtschaft bei Keynes."},
 {id:"w24", t:"Wirtschaftspolitik kann die Menschen nicht systematisch täuschen.", s:"mon", alt:["nc"], ex:"Rationale Erwartungen der Neuklassik (Lucas)."},
 {id:"w25", t:"Langfristig gelten neoklassische Prinzipien, kurzfristig keynesianische. Das war der Mainstream von 1945 bis Anfang der 1970er.", s:"syn", alt:["nc"], ex:"Neoklassische Synthese (Samuelson, Hicks)."},
 {id:"w26", t:"„5 % Inflation sind mir lieber als 5 % Arbeitslosigkeit.“ Die Politik kann dauerhaft zwischen beiden wählen.", s:"syn", alt:["key"], ex:"Phillips-Kurve als dauerhafter Zielkonflikt (Helmut Schmidt)."},
 {id:"w27", t:"Die anderen reduzieren Keynes auf die kurze Frist, das ist „Bastard-Keynesianismus“.", s:"pk", ex:"Kritik des Postkeynesianismus an Neoklassischer Synthese und Neuem Konsens."},
 {id:"w28", t:"Wollen alle mehr sparen, sinken die Einkommen, und gespart wird am Ende nicht mehr.", s:"key", alt:["pk"], ex:"Das Sparparadox."},
 {id:"w29", t:"Steigt die Ersparnis, sinkt der Zins, und die Investitionen steigen, bis I = S.", s:"nk", alt:["mon","syn"], ex:"Der neoklassische Zinsmechanismus."},
 {id:"w30", t:"Die Output-Lücke lässt sich nicht seriös messen, weil das Potenzial selbst von der Nachfrage abhängt.", s:"pk", ex:"Hysterese und Randwertproblem: Schätzungen folgen dem tatsächlichen BIP."}
];
function whoOptions(x){
  const pool=Object.keys(SCHOOLS).filter(k=>k!==x.s&&!(x.alt||[]).includes(k));
  return shuffle([x.s].concat(shuffle(pool).slice(0,3)));
}
function whoPick(n){
  const st=state.who||{};
  const w=WHO.map(x=>{ const h=st[x.id]; return !h?3 : h.last?1:4; });
  const pool=WHO.slice(), out=[];
  while(out.length<Math.min(n,pool.length)){ let r=Math.random()*w.reduce((a,b)=>a+b,0), i=0; for(;i<pool.length;i++){ r-=w[i]; if(r<=0) break; } i=Math.min(i,pool.length-1); out.push(pool.splice(i,1)[0]); w.splice(i,1); }
  return out;
}
function openWho(n){ cur.wh={list:whoPick(n||8).map(x=>({x,o:whoOptions(x)})), i:0, a:null, right:0}; go("who"); }
function renderWho(){
  const W=cur.wh, L=W.list;
  if(W.i>=L.length){
    $("#app").innerHTML=`${backTo("Üben")}<h1>Runde geschafft</h1><div class="block"><p>${W.right} von ${L.length} richtig zugeordnet.</p>
      <p class="small muted">Falsch zugeordnete Aussagen kommen in den nächsten Runden häufiger.</p>
      <div class="row">${sess?sessBtn():`<button class="btn" id="wAgain">Neue Runde</button><button class="btn ghost" id="wOut">Fertig</button>`}</div></div>`;
    bindCrumb(()=>go("practice")); if($("#wAgain")) $("#wAgain").onclick=()=>openWho(8); if($("#wOut")) $("#wOut").onclick=()=>go("practice"); return;
  }
  const {x,o}=L[W.i];
  $("#app").innerHTML=`${backTo("Üben")}
    <p class="eyebrow">Wer sagt das? · ${W.i+1} von ${L.length}</p>
    <div class="block"><p class="who">„${inl(x.t.replace(/^„|“$/g,""))}“</p>
      <div class="mc">${o.map(k=>{ const cls=W.a===null?"":(k===x.s?"r":(k===W.a?"w":"")); return `<button data-s="${k}" class="${cls}" ${W.a!==null?"disabled":""}>${SCHOOLS[k]}</button>`; }).join("")}</div>
      ${W.a===null?"":W.a===x.s?`<div class="fb good"><p class="fh">Richtig.</p><p style="margin:0">${inl(x.ex)}</p></div>`
        :`<div class="fb bad"><p class="fh">Nicht ganz.</p><div class="dlist"><b>Richtig</b><span>${SCHOOLS[x.s]}</span><b>Warum</b><span>${inl(x.ex)}</span></div></div>`}</div>
    ${W.a!==null?`<button class="btn" id="wNext">Weiter</button>`:`<p class="small muted">Tipp: Achte auf Schlüsselwörter wie Zins, Nachfrage, langfristig, Hysterese oder Klassen.</p>`}`;
  bindCrumb(()=>go("practice"));
  document.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{ if(W.a!==null) return; W.a=b.dataset.s; const ok=W.a===x.s; if(ok) W.right++;
    state.who=state.who||{}; const h=state.who[x.id]||{n:0,r:0}; h.n++; if(ok) h.r++; h.last=ok; if(!ok) h.conf=W.a; state.who[x.id]=h; logDay(); save(); renderWho(); });
  if($("#wNext")) $("#wNext").onclick=()=>{ W.i++; W.a=null; renderWho(); window.scrollTo(0,0); };
}
