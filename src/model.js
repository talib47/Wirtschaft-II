/* ================= Modellbausteine (Schreibweise wie Kap. 5, van Treeck) ================= */
function baseModel(){
  for(let t=0;t<2000;t++){
    const c1=pick([.5,.6,.75,.8]), k=1/(1-c1), mT=c1*k;
    const n=pick([50,100,200]), i=pick([.02,.03,.04,.05,.06]);
    if(!isInt(n*i)) continue;
    const I=rint(2,8), d=I+n*i, c0=rint(1,6), T=rint(1,5), G=rint(1,5);
    const A=r(c0-c1*T+I+G), Y=r(k*A);
    if(A<=0||!isInt(Y)) continue;
    return {c1,k,mT,n,i,I,d,c0,T,G,A,Y};
  }
}
const MODEL_TXT=`Geschlossene Volkswirtschaft mit Staat: C = c<sub>0</sub> + c<sub>1</sub>(Y − T), I = d − n·i. Das Güterangebot Y<sup>A</sup> passt sich der Güternachfrage Y<sup>N</sup> an.`;
function modelTable(m,Ypot){
  const h=["c<sub>0</sub>","c<sub>1</sub>","T","d","n","i","G"], v=[m.c0,m.c1,m.T,m.d,m.n,m.i,m.G];
  if(Ypot!=null){ h.push("Y<sub>POT</sub>"); v.push(Ypot); }
  return `<div class="tablewrap"><table class="data"><tr>${h.map(x=>`<th>${x}</th>`).join("")}</tr><tr>${v.map(x=>`<td>${fmt(x)}</td>`).join("")}</tr></table></div>`;
}
function stepsY(m){
  return [
    {lab:"Investitionen I", why:"Zuerst die zinsabhängigen Investitionen einsetzen.", f:"I = d − n·i", calc:`I = ${fmt(m.d)} − ${m.n}·${fmt(m.i)} = ${fmt(m.I)}`, ans:m.I},
    {lab:"Klammer: autonome Nachfrage", why:"Alles, was nicht vom Einkommen abhängt. Steuern wirken nur mit c₁.", f:"c₀ − c₁·T + I + G", calc:`${fmt(m.c0)} − ${fmt(m.c1)}·${fmt(m.T)} + ${fmt(m.I)} + ${fmt(m.G)} = ${fmt(m.A)}`, ans:m.A},
    {lab:"Multiplikator 1/(1 − c₁)", why:"Jeder zusätzliche Euro Nachfrage erzeugt Einkommen, das zum Teil wieder konsumiert wird.", f:"1 / (1 − c₁)", calc:`1 / (1 − ${fmt(m.c1)}) = ${fmt(m.k)}`, ans:m.k},
    {lab:"Gleichgewichtiges Einkommen Y*", why:"Multiplikator mal Klammer.", f:"Y* = 1/(1 − c₁) · (c₀ − c₁T + d − n·i + G)", calc:`Y* = ${fmt(m.k)} · ${fmt(m.A)} = ${fmt(m.Y)}`, ans:m.Y, final:true}
  ];
}
function stepGap(m,Ypot){
  const gap=r(m.Y-Ypot);
  return {lab:"Output-Lücke Y* − Y<sub>POT</sub>", why:"Negativ heißt: die Wirtschaft produziert unter ihrem Potenzial (Unterbeschäftigung).", f:"Lücke = Y* − Y_POT", calc:`${fmt(m.Y)} − ${fmt(Ypot)} = ${fmt(gap)}`, ans:gap, final:true};
}
function dGSteps(m,gap){
  const dG=r(-gap/m.k);
  return [{lab:"Nötige Änderung ΔG", why:"Die Lücke muss geschlossen werden: ΔY = −Lücke. Staatsausgaben wirken mit dem vollen Multiplikator.", f:"ΔG = −Lücke / [1/(1 − c₁)]", calc:`ΔG = ${fmt(-gap)} / ${fmt(m.k)} = ${fmt(dG)}`, ans:dG, final:true}];
}
function dTSteps(m,gap){
  const dT=r(gap/m.mT);
  return [
    {lab:"Steuermultiplikator c₁/(1 − c₁)", why:"Eine Steuersenkung erhöht das verfügbare Einkommen, davon wird aber nur der Anteil c₁ konsumiert.", f:"m_T = c₁ / (1 − c₁)", calc:`${fmt(m.c1)} / (1 − ${fmt(m.c1)}) = ${fmt(m.mT)}`, ans:m.mT},
    {lab:"Nötige Änderung ΔT (Senkung negativ)", why:"ΔY = −m_T · ΔT, also ΔT = −ΔY / m_T.", f:"ΔT = Lücke / m_T", calc:`ΔT = ${fmt(gap)} / ${fmt(m.mT)} = ${fmt(dT)}`, ans:dT, final:true, sign:true}
  ];
}
function diSteps(m,gap){
  const dI=r(-gap/m.k), di=r(-dI/m.n), inew=r(m.i+di);
  return [
    {lab:"Nötige Änderung der Investitionen ΔI", why:"Investitionen wirken wie G mit dem vollen Multiplikator.", f:"ΔI = −Lücke / [1/(1 − c₁)]", calc:`ΔI = ${fmt(-gap)} / ${fmt(m.k)} = ${fmt(dI)}`, ans:dI},
    {lab:"Nötige Zinsänderung Δi", why:"Aus I = d − n·i folgt ΔI = −n·Δi. Antwort als Dezimalzahl (0,01 = 1 Prozentpunkt).", f:"Δi = −ΔI / n", calc:`Δi = −${par(dI)} / ${m.n} = ${fmt(di)}  (= ${fmt(di*100)} Prozentpunkte)`, ans:di, final:true, rate:true},
    {lab:"Neuer Zinssatz i", why:"Alter Zins plus Änderung.", f:"i_neu = i + Δi", calc:`${fmt(m.i)} + ${par(di)} = ${fmt(inew)}`, ans:inew, rate:true}
  ];
}

/* ================= Aufgabentypen ================= */
const TYPES={
  gg:{name:"Gleichgewicht und Output-Lücke", short:"Y* und Lücke", desc:"Klausur 6b: Y* aus dem Modell mit Staat und Zins berechnen, Lücke zum Potenzial angeben.", kap:5, gen(){
    const m=baseModel(); const Ypot=Math.random()<.8? m.Y+rint(2,8) : m.Y-rint(2,5);
    return {intro:MODEL_TXT, table:modelTable(m,Ypot), q:"Berechnen Sie das gleichgewichtige Einkommen Y* und geben Sie die Output-Lücke an.", steps:[...stepsY(m),stepGap(m,Ypot)]};
  }},
  dG:{name:"Lücke schließen mit Staatsausgaben", short:"ΔG", desc:"Klausur 6c: Um wie viel muss G steigen, damit die Lücke verschwindet?", kap:5, gen(){
    for(;;){ const m=baseModel(), mm=pick([.5,1,1.5,2,2.5,3]), s=Math.random()<.85?-1:1, gap=r(s*m.k*mm), Ypot=r(m.Y-gap);
      if(!isInt(Ypot)) continue;
      return {intro:MODEL_TXT, table:modelTable(m,Ypot), q:`Berechnen Sie Y*, die Output-Lücke und die notwendige Änderung der staatlichen Nachfrage G, um die Lücke zu schließen.`, steps:[...stepsY(m),stepGap(m,Ypot),...dGSteps(m,gap)]}; }
  }},
  dT:{name:"Lücke schließen mit Steuern", short:"ΔT", desc:"Klausur 6d: Um wie viel müssen die Steuern T sinken? Kleinerer Multiplikator als bei G.", kap:5, gen(){
    for(;;){ const m=baseModel(), mm=pick([.5,1,1.5,2,2.5,3]), s=Math.random()<.85?-1:1, gap=r(s*m.mT*mm), Ypot=r(m.Y-gap);
      if(!isInt(Ypot)) continue;
      return {intro:MODEL_TXT, table:modelTable(m,Ypot), q:`Berechnen Sie Y*, die Output-Lücke und die notwendige Änderung der Steuern T, um die Lücke zu schließen.`, steps:[...stepsY(m),stepGap(m,Ypot),...dTSteps(m,gap)]}; }
  }},
  di:{name:"Lücke schließen mit dem Zins", short:"Δi", desc:"Zweittermin 6c: Welche Zinssenkung der Zentralbank schließt die Lücke?", kap:5, gen(){
    for(;;){ const m=baseModel(), a=pick([.005,.01,.015,.02,.025]); if(a>=m.i) continue;
      const s=Math.random()<.85?-1:1, gap=r(s*m.n*m.k*a), Ypot=r(m.Y-gap);
      if(!isInt(Ypot)) continue;
      return {intro:MODEL_TXT, table:modelTable(m,Ypot), q:`Berechnen Sie Y*, die Output-Lücke und die notwendige Änderung des Zinssatzes i, um die Lücke zu schließen.`, steps:[...stepsY(m),stepGap(m,Ypot),...diSteps(m,gap)]}; }
  }},
  mult:{name:"Multiplikatoren G und T", short:"Multiplikatoren", desc:"Aufgabenblatt 5, Aufg. 1: Wirkung von +1 Mrd. G gegenüber −1 Mrd. T.", kap:5, gen(){
    const c1=pick([.5,.6,.75,.8,.9]), k=1/(1-c1), mT=c1*k, x=rint(1,5);
    return {intro:`Geschlossene Volkswirtschaft: Y<sup>N</sup> = c<sub>0</sub> + c<sub>1</sub>(Y − T) + I + G, marginale Konsumneigung c<sub>1</sub> = ${fmt(c1)}.`, table:"",
      q:`Um wie viel steigt das BIP, wenn a) die Staatsausgaben um ${x} Mrd. € steigen, b) die Steuereinnahmen um ${x} Mrd. € sinken?`,
      steps:[
        {lab:"Staatsausgabenmultiplikator m<sub>G</sub>", why:"G geht vollständig in die Nachfrage ein.", f:"m_G = 1 / (1 − c₁)", calc:`1 / (1 − ${fmt(c1)}) = ${fmt(k)}`, ans:r(k)},
        {lab:"Steuermultiplikator m<sub>T</sub> (Betrag)", why:"Von der Steuersenkung wird ein Teil gespart, nur c₁ wird konsumiert.", f:"m_T = c₁ / (1 − c₁)", calc:`${fmt(c1)} / (1 − ${fmt(c1)}) = ${fmt(mT)}`, ans:r(mT)},
        {lab:"a) ΔY bei ΔG = +"+x, why:"Multiplikator mal Impuls.", f:"ΔY = m_G · ΔG", calc:`${fmt(k)} · ${x} = ${fmt(k*x)} Mrd. €`, ans:r(k*x), final:true},
        {lab:"b) ΔY bei ΔT = −"+x, why:"m_G − m_T ist immer genau 1: Ausgaben wirken stärker als gleich große Steuersenkungen.", f:"ΔY = m_T · |ΔT|", calc:`${fmt(mT)} · ${x} = ${fmt(mT*x)} Mrd. €`, ans:r(mT*x), final:true}
      ]};
  }},
  bs:{name:"Budgetsaldo des Staates", short:"Budgetsaldo", desc:"Aufgabenblatt 5, Aufg. 2: Y* und BS = T − G vor und nach einem Impuls.", kap:5, gen(){
    for(;;){
      const c1=pick([.5,.6,.75,.8]), k=1/(1-c1), mT=c1*k, c0=rint(1,5), I=rint(1,5), G=rint(1,4), T=rint(1,4);
      const A=r(c0-c1*T+I+G), Y=r(k*A); if(!isInt(Y*2)) continue;
      const viaG=Math.random()<.5, dY=viaG?k:mT, Y2=r(Y+dY), BS=T-G, BS2=viaG?T-(G+1):(T-1)-G;
      return {intro:`Geschlossene Volkswirtschaft: Y<sup>N</sup> = c<sub>0</sub> + c<sub>1</sub>(Y − T) + I + G.`,
        table:`<div class="tablewrap"><table class="data"><tr><th>c<sub>0</sub></th><th>c<sub>1</sub></th><th>I</th><th>G</th><th>T</th></tr><tr><td>${c0}</td><td>${fmt(c1)}</td><td>${I}</td><td>${G}</td><td>${T}</td></tr></table></div>`,
        q:`Berechnen Sie Y* und den Budgetsaldo. Danach ${viaG?"erhöht der Staat die Ausgaben um 1":"senkt der Staat die Steuern um 1"}: Wie hoch sind Y* und der Budgetsaldo jetzt?`,
        steps:[
          {lab:"Y* vorher", why:"Multiplikator mal autonome Nachfrage.", f:"Y* = 1/(1 − c₁) · (c₀ − c₁T + I + G)", calc:`${fmt(k)} · (${c0} − ${fmt(c1)}·${T} + ${I} + ${G}) = ${fmt(k)} · ${fmt(A)} = ${fmt(Y)}`, ans:Y, final:true},
          {lab:"Budgetsaldo vorher", why:"Positiv = Überschuss, negativ = Defizit.", f:"BS = T − G", calc:`${T} − ${G} = ${fmt(BS)}`, ans:BS, final:true},
          {lab:"ΔY durch den Impuls", why:viaG?"Ausgabenmultiplikator.":"Steuermultiplikator, kleiner als bei G.", f:viaG?"ΔY = 1/(1 − c₁) · 1":"ΔY = c₁/(1 − c₁) · 1", calc:`ΔY = ${fmt(dY)}`, ans:r(dY)},
          {lab:"Y* nachher", why:"Altes Gleichgewicht plus Wirkung.", f:"Y*neu = Y* + ΔY", calc:`${fmt(Y)} + ${fmt(dY)} = ${fmt(Y2)}`, ans:Y2, final:true},
          {lab:"Budgetsaldo nachher", why:"Hier sind die Steuern ein fester Betrag: der Saldo verschlechtert sich in beiden Fällen genau um 1, das Einkommen steigt aber unterschiedlich stark.", f:"BS = T − G", calc:viaG?`${T} − ${G+1} = ${fmt(BS2)}`:`${T-1} − ${G} = ${fmt(BS2)}`, ans:BS2, final:true}
        ]};
    }
  }},
  schuld:{name:"Langfristige Schuldenstandquote", short:"Schuldenquote", desc:"Ersttermin 4: Die Quote konvergiert gegen Defizitquote durch nominales Wachstum.", kap:5, gen(){
    if(Math.random()<.6){
      for(;;){ const d=pick([1,1.5,2,2.5,3,4]), g=pick([2,2.5,3,4,5]), D=r(d/g*100); if(!nice(D,1)) continue;
        return {intro:"Schuldenmechanik: d = Defizit in % des BIP, g = Wachstum des nominalen BIP, D = Schuldenstandquote.", table:"",
          q:`Berechnen Sie die langfristige Schuldenstandquote, wenn das jährliche BIP-Wachstum langfristig ${fmt(g)} % beträgt und die jährliche Neuverschuldung ${fmt(d)} % des BIP.`,
          steps:[{lab:"Langfristige Schuldenstandquote D (in %)", why:"Die Quote bleibt stabil, wenn die Schulden genauso schnell wachsen wie das BIP.", f:"D = d / g", calc:`D = ${fmt(d/100)} / ${fmt(g/100)} = ${fmt(D/100)} = ${fmt(D)} %`, ans:D, final:true, pct:true}]}; }
    }
    const D=pick([40,50,60,80,100]), g=pick([1,2,3,4,5]), d=r(D*g/100);
    return {intro:"Schuldenmechanik: d = Defizit in % des BIP, g = Wachstum des nominalen BIP, D = Schuldenstandquote.", table:"",
      q:`Das nominale BIP wächst langfristig um ${g} % pro Jahr. Welche jährliche Defizitquote ist mit einer dauerhaft stabilen Schuldenstandquote von ${D} % vereinbar?`,
      steps:[{lab:"Defizitquote d (in %)", why:"Umgestellt aus D = d/g. Das ist die Logik hinter 60 % und 3 % im Stabilitätspakt (bei g = 5 %).", f:"d = D · g", calc:`d = ${fmt(D/100)} · ${fmt(g/100)} = ${fmt(d/100)} = ${fmt(d)} %`, ans:d, final:true, pct:true}]};
  }},
  herl:{name:"Y* allgemein herleiten", short:"Herleitung", desc:"Klausur 6a, 2 Punkte: Die Herleitung kommt in jeder Klausur. Mit Stift auf dem Schmierzettel üben.", kap:5, self:true, gen(){
    const staat=Math.random()<.75;
    return staat?{intro:MODEL_TXT, table:"", q:"Leiten Sie das gleichgewichtige gesamtwirtschaftliche Einkommen Y* allgemein her.", steps:[
      {lab:"Nachfrage aufstellen", f:"Y^N = C + I + G"},
      {lab:"Verhaltensgleichungen einsetzen", f:"Y^N = c₀ + c₁(Y − T) + d − n·i + G"},
      {lab:"Gleichgewichtsbedingung", f:"Y^A = Y^N = Y"},
      {lab:"Ausmultiplizieren", f:"Y = c₀ + c₁Y − c₁T + d − n·i + G"},
      {lab:"Y-Terme auf eine Seite", f:"Y − c₁Y = c₀ − c₁T + d − n·i + G  ⇔  Y(1 − c₁) = …"},
      {lab:"Durch (1 − c₁) teilen", f:"Y* = 1/(1 − c₁) · (c₀ − c₁T + d − n·i + G)"}
    ]}:{intro:"Geschlossene Volkswirtschaft ohne Staat: C = c<sub>0</sub> + c<sub>1</sub>Y<sup>VT</sup>, I fest. Y<sup>A</sup> passt sich Y<sup>N</sup> an.", table:"", q:"Leiten Sie unter Zuhilfenahme der VGR-Definitionen die Formel für das gleichgewichtige BIP Y* ab.", steps:[
      {lab:"Nachfrage aufstellen", f:"Y^N = C + I"},
      {lab:"Konsumfunktion einsetzen", f:"Y^N = c₀ + c₁Y^VT + I"},
      {lab:"Gleichgewicht: Y^A = Y^N = Y^VT = Y", f:"Y = c₀ + c₁Y + I"},
      {lab:"Y-Terme auf eine Seite", f:"Y(1 − c₁) = c₀ + I"},
      {lab:"Durch (1 − c₁) teilen", f:"Y* = 1/(1 − c₁) · (c₀ + I)   1/(1 − c₁) = Multiplikator"}
    ]};
  }},
  klausur:{name:"Klausur-Kombi", short:"Kombi", desc:"Wie Aufgabe 6b–d: Y*, Lücke und zwei Instrumente in einem Durchgang.", kap:5, gen(){
    for(;;){ const m=baseModel(), gap=-pick([2,3,4,5,6,8,10]), Ypot=r(m.Y-gap);
      const dG=-gap/m.k, dT=gap/m.mT, di=gap/(m.k*m.n);
      if(!nice(dG,2)||!nice(dT,2)||!nice(di,4)||m.i+di<0) continue;
      const two=pick([["dG","dT"],["di","dT"],["dG","di"]]);
      const map={dG:()=>dGSteps(m,gap),dT:()=>dTSteps(m,gap),di:()=>diSteps(m,gap)};
      const nm={dG:"der staatlichen Nachfrage G",dT:"der Steuern T",di:"des Zinssatzes i"};
      return {intro:MODEL_TXT, table:modelTable(m,Ypot), q:`b) Berechnen Sie Y* und geben Sie die Output-Lücke an. c) Berechnen Sie die notwendige Änderung ${nm[two[0]]}, d) die notwendige Änderung ${nm[two[1]]}, um die Lücke zu schließen.`,
        steps:[...stepsY(m),stepGap(m,Ypot),...map[two[0]](),...map[two[1]]()]}; }
  }}
};
const ORDER=["herl","mult","gg","dG","dT","di","klausur","bs","schuld"];
const LVL={1:"Vorgerechnet",2:"Geführt",3:"Frei"};
const lvlOf=t=>state.lvl[t]||1;

