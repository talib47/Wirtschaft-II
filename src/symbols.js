/* ================= Symbole und Formeln =================
   Jedes Zeichen der Vorlesung einmal erklärt: Bedeutung, wofür, Mini-Beispiel, wo es vorkommt.
   Daraus entstehen zwei Kartenstapel (Symbol → Bedeutung und Bedeutung → Symbol) und das Lexikon.
   Felder: id (bleibt fest, sonst geht der Lernstand verloren), s Symbol, n Bedeutung kurz,
   bed, wof, bsp, wo, merk (Eselsbrücke), falle (typische Verwechslung), formel (für die Rückrichtung) */
const SYMBOL_GROUPS=[
 {id:"vgr", t:"Volkswirtschaftliche Gesamtrechnung", kap:2, items:[
  {id:"y", s:"Y", n:"Bruttoinlandsprodukt, zugleich das Einkommen",
   bed:"das **BIP**: alles, was in einem Jahr im Inland produziert wird. Weil jede Produktion bei jemandem als Einkommen ankommt, steht Y auch für das Einkommen.",
   wof:"Hauptgröße fast jeder Rechnung: Produktion = Nachfrage = Einkommen",
   bsp:"Y = 100 heißt: Güter im Wert von 100 (z. B. Mrd. €) wurden produziert, und 100 wurden als Einkommen verteilt.",
   wo:"überall, vor allem in der VGR-Tabelle und im keynesianischen Modell", merk:"Y wie englisch yield, „Ertrag“"},
  {id:"ya", s:"Y^A", n:"BIP von der Entstehungsseite (Angebot)",
   bed:"die **Produktion**, also der Marktwert aller im Inland hergestellten Güter",
   wof:"zeigt, wie das BIP entsteht: durch Arbeit mal Produktivität",
   bsp:"50 € je Arbeitsstunde · 2 Mrd. Stunden = 100 Mrd. €", wo:"Entstehungsseite, Gleichgewicht Y^A = Y^N", merk:"A wie Angebot",
   formel:"Y^A = (Y/H) · H"},
  {id:"yn", s:"Y^N", n:"BIP von der Verwendungsseite (Nachfrage)",
   bed:"die **Nachfrage** nach im Inland produzierten Gütern",
   wof:"zeigt, wofür die Produktion verwendet wird",
   bsp:"60 + 13 + 20 + 7 = 100 (Zahlen aus dem Skript)", wo:"Verwendungsseite, keynesianisches Kreuz", merk:"N wie Nachfrage",
   formel:"Y^N = C + I + G + (X − M)"},
  {id:"yvt", s:"Y^VT", n:"BIP von der Verteilungsseite (Einkommen)",
   bed:"die **Einkommen**, die an Inländer:innen verteilt werden (Bruttonationaleinkommen)",
   wof:"zeigt, wer das Einkommen bekommt: Arbeit und Kapital oder Haushalte, Unternehmen, Staat",
   bsp:"Löhne 55 + Gewinne 45 = 100", wo:"Verteilungsseite, Konsumfunktion C = c₀ + c₁Y^VT", merk:"VT wie Verteilung",
   formel:"Y^VT = W + Π = Y_HH + Y_F + Y_St"},
  {id:"yh", s:"Y/H", n:"Arbeitsproduktivität (Output je Stunde)",
   bed:"**Produktion je gearbeiteter Stunde**. H steht für hours, die gearbeiteten Stunden.",
   wof:"Steigt Y/H, kann man mit weniger Stunden dasselbe produzieren.",
   bsp:"Y = 100, H = 2 ⇒ Y/H = 50", wo:"Entstehungsseite, Arbeitszeit und Klima (CO₂ = (CO₂/Y) · Y)", merk:"H wie hours",
   formel:"Y/H = Produktion / Arbeitsstunden"},
  {id:"c", s:"C", n:"privater Konsum",
   bed:"die **Konsumausgaben der Haushalte**",
   wof:"größter Teil der Nachfrage",
   bsp:"Lebensmittel, Kleidung, Kino. Im Skript: C = 60 von Y = 100.", wo:"Verwendungsseite, Konsumfunktion", merk:"C wie consumption",
   formel:"C = Konsumausgaben der Haushalte"},
  {id:"i", s:"I", n:"private Investitionen",
   bed:"Ausgaben der Unternehmen für **neue Maschinen, Gebäude, Anlagen**",
   wof:"erhöhen den Kapitalstock und damit die künftige Produktion",
   bsp:"Eine Bäckerei kauft einen neuen Ofen. Im Skript: I = 13.", wo:"Verwendungsseite, S = I, Multiplikator", merk:"I wie investment",
   falle:"Aktien oder Geld auf dem Sparbuch sind **keine** Investitionen in diesem Sinn, das ist Geldanlage.",
   formel:"I = Ausgaben für Maschinen, Gebäude, Anlagen"},
  {id:"g", s:"G", n:"Staatsausgaben für Güter und Dienstleistungen",
   bed:"die **Nachfrage des Staates** nach Konsum- und Investitionsgütern",
   wof:"Hebel der Fiskalpolitik: mehr G erhöht direkt die Nachfrage",
   bsp:"Der Staat baut eine Schule oder kauft Polizeiautos. Im Skript: G = 20.", wo:"Verwendungsseite, Staatsausgabenmultiplikator", merk:"G wie government",
   falle:"Renten, Bürgergeld und Subventionen gehören **nicht** zu G. Das sind Transfers, im Modell senken sie die Einnahmen T.",
   formel:"G = Staatsnachfrage nach Gütern und Dienstleistungen"},
  {id:"xm", s:"X − M", n:"Nettoexporte (Exporte minus Importe)",
   bed:"**Exporte X minus Importe M**. In der Vorlesung gilt vereinfacht: X − M = Leistungsbilanz.",
   wof:"Positiv heißt Leistungsbilanzüberschuss: Das Ausland verschuldet sich beim Inland.",
   bsp:"Exporte 30, Importe 23 ⇒ X − M = 7", wo:"Verwendungsseite, Salden-Aufgaben, Exportüberschüsse", merk:"X wie eXport, M wie iMport",
   formel:"X − M = Exporte − Importe"},
  {id:"w", s:"W", n:"Löhne (Arbeitseinkommen)",
   bed:"die **Lohnsumme** aller Beschäftigten",
   wof:"funktionale Verteilung: Was bekommt die Arbeit?",
   bsp:"Im Skript: W = 55 von Y = 100, die Lohnquote W/Y ist also 55 %.", wo:"Verteilungsseite, Kostenparadox, Kalecki", merk:"W wie wages",
   formel:"W = Lohnsumme"},
  {id:"pi", s:"Π", n:"Gewinne (Kapitaleinkommen)",
   bed:"die **Gewinne**, also das Einkommen aus Kapital. Π ist das große griechische P, wie Profit.",
   wof:"funktionale Verteilung: Was bekommt das Kapital?",
   bsp:"Y = 100, W = 55 ⇒ Π = 45", wo:"Verteilungsseite, Marx, Kalecki", merk:"Π wie Profit",
   falle:"Das kleine **π** ist die Inflationsrate, ein ganz anderes Zeichen.",
   formel:"Π = Y − W"},
  {id:"yhh", s:"Y_HH", n:"verfügbares Einkommen der Haushalte",
   bed:"was den **Haushalten** nach Steuern und Transfers bleibt",
   wof:"sektorale Verteilung; davon wird konsumiert und gespart",
   bsp:"Löhne + Zinsen + Kindergeld − Steuern und Sozialbeiträge. Im Skript: Y_HH = 67.", wo:"sektorale Verteilung, Finanzierungssalden", merk:"HH wie Haushalte",
   formel:"Y_HH = Löhne + Kapitaleinkommen + Transfers − Steuern und Abgaben"},
  {id:"yf", s:"Y_F", n:"verfügbares Einkommen der Unternehmen",
   bed:"was den **Unternehmen** bleibt: einbehaltene Gewinne",
   wof:"sektorale Verteilung; daraus finanzieren Unternehmen Investitionen",
   bsp:"nicht ausgeschüttete Gewinne + Subventionen − Steuern. Im Skript: Y_F = 15.", wo:"sektorale Verteilung, Finanzierungssalden", merk:"F wie firms",
   formel:"Y_F = einbehaltene Gewinne + Subventionen − Steuern und Abgaben"},
  {id:"yst", s:"Y_St", n:"verfügbares Einkommen des Staates",
   bed:"die **Einnahmen des Staates** nach Abzug dessen, was er weitergibt",
   wof:"sektorale Verteilung; Y_St − G ist der Finanzierungssaldo des Staates",
   bsp:"Steuern 30, Transfers und Subventionen 12 ⇒ Y_St = 18", wo:"sektorale Verteilung, Staatsdefizit", merk:"St wie Staat; T wie taxes, Z wie Zuschüsse",
   formel:"Y_St = T − Z"},
  {id:"s", s:"S", n:"Ersparnis",
   bed:"der **nicht konsumierte Teil des Einkommens**",
   wof:"In der geschlossenen Volkswirtschaft gilt immer S = I. Umstritten ist, was was verursacht.",
   bsp:"Y = 100, C = 85 ⇒ S = 15", wo:"S = I, Sparparadox, Klassenmodelle", merk:"S wie saving",
   formel:"S = Y − C"}
 ]}
];
const isFormula=f=>!!f&&!/[a-zäöüß]{4,}/.test(f.split(" = ").slice(1).join(" = "));
const SYMBOLS=SYMBOL_GROUPS.flatMap(g=>g.items.map(x=>Object.assign({g:g.id, gt:g.t},x)));
function symBack(x){
  return [isFormula(x.formel)?`$ ${x.formel}`:"", `Bedeutung: ${x.bed}`, `Wofür: ${x.wof}`, `Beispiel: ${x.bsp}`, `Kommt vor: ${x.wo}`, x.falle?`Achtung: ${x.falle}`:""].filter(Boolean).join("\n");
}
function symBackRev(x){ return [`$ ${x.formel?x.formel:x.s}`, x.formel&&!x.formel.startsWith(x.s+" ")?`Zeichen: ${x.s}`:"", `Beispiel: ${x.bsp}`, x.falle?`Achtung: ${x.falle}`:""].filter(Boolean).join("\n"); }
CARDS.sym=SYMBOLS.map(x=>({id:"s-"+x.id, f:x.s, b:symBack(x)}));
CARDS.symr=SYMBOLS.map(x=>({id:"r-"+x.id, f:x.n, b:symBackRev(x)}));
SYMBOLS.forEach(x=>{ CARD_CTX["s-"+x.id]="Zeichen · "+x.gt+" · Was bedeutet es?"; CARD_CTX["r-"+x.id]="Zeichen · "+x.gt+" · Wie schreibt man es?"; if(x.merk) CARD_INFO["s-"+x.id]=CARD_INFO["r-"+x.id]="Merkhilfe: "+x.merk; });
const DECK_NAME={sym:"Symbole", symr:"Symbole umgekehrt"};

/* Lexikon: alle Zeichen nach Themen */
function lexiconHTML(){
  return SYMBOL_GROUPS.map(g=>`<div class="block"><h3>${g.t}</h3><div class="dlist lex">${g.items.map(x=>`<b class="sy">${fx(x.s)}</b><span>${inl(x.n)}${isFormula(x.formel)?`<span class="eq lexeq">${fx(x.formel)}</span>`:""}<span class="small muted">${inl(x.bsp)}</span>${x.falle?`<span class="small lexwarn">${inl(x.falle)}</span>`:""}</span>`).join("")}</div></div>`).join("")
   +`<p class="small muted">Weitere Zeichen (Modell mit Staat und Zins, Neuer Konsens, Kalecki) folgen.</p>`;
}
function renderSym(){
  const st=n=>{ const A=allCards(n); return `${dueCards(n).length} fällig · ${A.filter(x=>!isSeen(x.id)).length} neu`; };
  $("#app").innerHTML=`${backTo("Üben")}<p class="eyebrow">Grundlagen für Teil II</p><h1>Symbole und Formeln</h1>
    <p class="muted">Jedes Zeichen der Vorlesung mit Bedeutung und Mini-Beispiel. Gewusste Karten kommen nach 1, 3, 7, 16 und 35 Tagen wieder, wie die anderen Karten.</p>
    <div class="block"><div class="modes">
      <button class="mode" id="sy1"><span class="t">Symbol → Bedeutung</span><span class="n">${st("sym")}</span><span class="d">Vorne steht das Zeichen, z. B. Y<sub>St</sub>. Sag, was es bedeutet.</span></button>
      <button class="mode" id="sy2"><span class="t">Bedeutung → Symbol</span><span class="n">${st("symr")}</span><span class="d">Vorne steht die Bedeutung. Schreib das Zeichen und die Formel auf, wie in der Klausur.</span></button>
    </div></div>
    <h2 style="margin-top:18px">Lexikon</h2>${lexiconHTML()}`;
  bindCrumb(()=>go("practice"));
  $("#sy1").onclick=()=>openCards("sym"); $("#sy2").onclick=()=>openCards("symr");
}
/* Lexikon als Blatt über einer Aufgabe, ohne sie zu verlassen */
function showLexicon(){
  const d=document.createElement("div"); d.className="sheet"; d.setAttribute("role","dialog"); d.setAttribute("aria-label","Symbol-Lexikon");
  d.innerHTML=`<div class="sheetin"><div class="row between" style="margin-bottom:8px"><h2 style="margin:0">Symbole</h2><button class="btn ghost small" id="lexX">Schließen</button></div>${lexiconHTML()}</div>`;
  document.body.appendChild(d); document.body.style.overflow="hidden";
  const close=()=>{ d.remove(); document.body.style.overflow=""; };
  d.querySelector("#lexX").onclick=close; d.onclick=e=>{ if(e.target===d) close(); };
}
