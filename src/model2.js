/* ================= Rechenaufgaben Kapitel 2, 3, 4, 6, 7, 8 ================= */
const d2=x=>Math.round(x*100)/100;
/* Gegebene Werte als Kacheln: brechen auf dem Handy um, statt quer aus dem Bild zu laufen */
function tbl(h,v){ return `<div class="vals">${h.map((x,i)=>`<div><span>${x}</span><b>${typeof v[i]==="number"?fmt(v[i]):v[i]}</b></div>`).join("")}</div>`; }
const VGR_TXT="Offene Volkswirtschaft. Internationale Einkommensströme werden vernachlässigt, sodass Nettoexporte = Leistungsbilanz = − Finanzierungssaldo des Auslands.";
/* Eine in sich stimmige Volkswirtschaft: alle Identitäten der VGR gelten */
function economy(){
  for(;;){
    const C=rint(5,14)*10, I=rint(2,6)*10, G=rint(1,5)*10, X=rint(1,6)*10, M=rint(1,6)*10;
    const Y=C+I+G+X-M; if(Y<=0) continue;
    const YSt=rint(1,4)*10, YF=rint(1,4)*10, YHH=Y-YSt-YF; if(YHH<=C*0.6) continue;
    const W=Math.round(Y*pick([.5,.55,.6,.65,.7])/10)*10, P=Y-W;
    return {C,I,G,X,M,Y,YSt,YF,YHH,W,P,NX:X-M,FSP:YHH+YF-C-I,FSS:YSt-G,FSA:M-X};
  }
}
Object.assign(TYPES,{
  vgr:{name:"VGR-Tabelle: fehlende Größe berechnen", short:"VGR-Tabelle", desc:"Klausur Aufgabe 5 (6 Punkte): aus einer Tabelle mit den drei Seiten des BIP die fehlenden Größen bestimmen.", kap:2, gen(){
    const e=economy(), v=pick([1,2,3,4,5]);
    if(v===1){
      return {intro:VGR_TXT, table:tbl(["BIP Y","Privater Konsum C","Private Investitionen I","Finanzierungssaldo Ausland FS<sub>AL</sub>","Verfügb. Einkommen Staat Y<sub>St</sub>","Verfügb. Einkommen Firmen Y<sub>F</sub>"],[e.Y,e.C,e.I,e.FSA,e.YSt,e.YF]),
        q:"a) Berechnen Sie die staatliche Nachfrage G. b) Berechnen Sie die verfügbaren Einkommen der privaten Haushalte.",
        steps:[
          {lab:"Nettoexporte X − M", why:"Die Nettoexporte sind der negative Finanzierungssaldo des Auslands.", f:"X − M = − FS_AL", calc:`X − M = −(${fmt(e.FSA)}) = ${fmt(e.NX)}`, ans:e.NX},
          {lab:"a) Staatliche Nachfrage G", why:"Verwendungsseite nach G umstellen.", f:"G = Y − C − I − (X − M)", calc:`G = ${e.Y} − ${e.C} − ${e.I} − ${par(e.NX)} = ${e.G}`, ans:e.G, final:true},
          {lab:"b) Verfügbare Einkommen der Haushalte Y<sub>HH</sub>", why:"Verteilungsseite: Y = Y_HH + Y_F + Y_St.", f:"Y_HH = Y − Y_F − Y_St", calc:`Y_HH = ${e.Y} − ${e.YF} − ${e.YSt} = ${e.YHH}`, ans:e.YHH, final:true}]};
    }
    if(v===2){
      let prod, H;
      for(;;){ prod=pick([.25,.5,2,4,5,10]); H=e.Y/prod; if(isInt(H)) break; }
      return {intro:VGR_TXT, table:tbl(["Gewinne Π","Löhne W","Private Investitionen I","Exporte X","Importe M","Staatliche Nachfrage G","Produktivität Y/H"],[e.P,e.W,e.I,e.X,e.M,e.G,prod]),
        q:"a) Berechnen Sie den privaten Konsum. b) Berechnen Sie die gearbeiteten Stunden.",
        steps:[
          {lab:"BIP über die Verteilungsseite", why:"Löhne plus Gewinne ergeben das gesamtwirtschaftliche Einkommen.", f:"Y = W + Π", calc:`Y = ${e.W} + ${e.P} = ${e.Y}`, ans:e.Y},
          {lab:"a) Privater Konsum C", why:"Verwendungsseite nach C umstellen.", f:"C = Y − I − G − (X − M)", calc:`C = ${e.Y} − ${e.I} − ${e.G} − (${e.X} − ${e.M}) = ${e.C}`, ans:e.C, final:true},
          {lab:"b) Gearbeitete Stunden H", why:"Entstehungsseite: Y = (Y/H) · H.", f:"H = Y / (Y/H)", calc:`H = ${e.Y} / ${fmt(prod)} = ${fmt(H)}`, ans:H, final:true}]};
    }
    if(v===3){
      return {intro:VGR_TXT, table:tbl(["Y<sub>HH</sub>","Y<sub>F</sub>","Y<sub>St</sub>","C","I","G","X"],[e.YHH,e.YF,e.YSt,e.C,e.I,e.G,e.X]),
        q:"a) Wie hoch sind die Importe? b) Wie hoch ist der Finanzierungssaldo des Auslands?",
        steps:[
          {lab:"BIP über die Verteilungsseite", why:"Die verfügbaren Einkommen der drei Sektoren addieren sich zum BIP.", f:"Y = Y_HH + Y_F + Y_St", calc:`Y = ${e.YHH} + ${e.YF} + ${e.YSt} = ${e.Y}`, ans:e.Y},
          {lab:"a) Importe M", why:"Verwendungsseite nach M umstellen.", f:"M = C + I + G + X − Y", calc:`M = ${e.C} + ${e.I} + ${e.G} + ${e.X} − ${e.Y} = ${e.M}`, ans:e.M, final:true},
          {lab:"b) Finanzierungssaldo des Auslands", why:"Das Ausland nimmt M ein und gibt X aus.", f:"FS_AL = M − X", calc:`FS_AL = ${e.M} − ${e.X} = ${fmt(e.FSA)}`, ans:e.FSA, final:true}]};
    }
    if(v===4){
      return {intro:VGR_TXT, table:tbl(["Y","Y<sub>F</sub>","Y<sub>St</sub>","C","I","G"],[e.Y,e.YF,e.YSt,e.C,e.I,e.G]),
        q:"a) Wie hoch sind die Einkommen der privaten Haushalte? b) Welchen Wert hat der Finanzierungssaldo des Privatsektors? c) Wie hoch sind die Nettoexporte (positiv = Exportüberschuss)?",
        steps:[
          {lab:"a) Einkommen der Haushalte Y<sub>HH</sub>", why:"Verteilungsseite.", f:"Y_HH = Y − Y_F − Y_St", calc:`Y_HH = ${e.Y} − ${e.YF} − ${e.YSt} = ${e.YHH}`, ans:e.YHH, final:true},
          {lab:"b) Finanzierungssaldo des Privatsektors", why:"Einnahmen minus Ausgaben für Güter von Haushalten und Firmen.", f:"FS_P = Y_HH + Y_F − C − I", calc:`FS_P = ${e.YHH} + ${e.YF} − ${e.C} − ${e.I} = ${fmt(e.FSP)}`, ans:e.FSP, final:true},
          {lab:"c) Nettoexporte X − M", why:"Was im Inland nicht für Güter ausgegeben wird, geht als Exportüberschuss ans Ausland. Probe: FS_P + FS_St = X − M.", f:"X − M = Y − C − I − G", calc:`X − M = ${e.Y} − ${e.C} − ${e.I} − ${e.G} = ${fmt(e.NX)}  (${e.NX>0?"Exportüberschuss":e.NX<0?"Exportdefizit":"ausgeglichen"})`, ans:e.NX, final:true}]};
    }
    const Y=rint(10,30)*10, C=rint(Math.round(Y*.5/10),Math.round(Y*.85/10))*10, W=Math.round(Y*pick([.6,.7,.75])/10)*10, P=Y-W, I=Y-C;
    return {intro:"Geschlossene Volkswirtschaft ohne Staat.", table:tbl(["Löhne W","Gewinne Π","Konsum C"],[W,P,C]),
      q:"Wie hoch sind die Investitionen und die Ersparnis?",
      steps:[
        {lab:"Einkommen Y", why:"Verteilungsseite.", f:"Y = W + Π", calc:`Y = ${W} + ${P} = ${Y}`, ans:Y},
        {lab:"Investitionen I", why:"Ohne Staat und Ausland: Y = C + I.", f:"I = Y − C", calc:`I = ${Y} − ${C} = ${I}`, ans:I, final:true},
        {lab:"Ersparnis S", why:"Nicht konsumiertes Einkommen. Es gilt immer S = I.", f:"S = Y − C", calc:`S = ${Y} − ${C} = ${I}`, ans:I, final:true}]};
  }},
  salden:{name:"Finanzierungssalden der Sektoren", short:"Salden", desc:"Kurzfrage Teil I: Die Salden von Privatsektor, Staat und Ausland addieren sich zu null.", kap:2, gen(){
    const v=pick([1,2,3]); let fp,fs,lb;
    for(;;){ fp=rint(-4,9); fs=rint(-6,3); lb=fp+fs; if(Math.abs(lb)<=9) break; }
    const ib="Alle Angaben in % des BIP. Leistungsbilanz = Nettoexporte (ohne internationale Einkommensströme).";
    const LB=lb>0?`einen Leistungsbilanzüberschuss von ${fmt(lb)} %`:lb<0?`ein Leistungsbilanzdefizit von ${fmt(-lb)} %`:"eine ausgeglichene Leistungsbilanz";
    const FS=x=>x>0?`einen Überschuss von ${fmt(x)} %`:x<0?`ein Defizit von ${fmt(-x)} %`:"einen ausgeglichenen Saldo";
    const base={lab:"Grundgleichung", why:"Die Finanzierungssalden aller Sektoren addieren sich immer zu null.", f:"FS_P + FS_St + FS_AL = 0, also FS_P + FS_St = X − M"};
    if(v===1) return {intro:ib, table:"", q:`Land A hat ${LB}. Der Privatsektor hat ${FS(fp)}. Wie hoch ist der Finanzierungssaldo des Staates (in % des BIP, Defizit negativ)?`,
      steps:[{...base, calc:`FS_St = (X − M) − FS_P = ${fmt(lb)} − ${par(fp)} = ${fmt(fs)}`, ans:fs, final:true, pct:true}]};
    if(v===2) return {intro:ib, table:"", q:`Land A hat ${LB}. Der Staat hat ${FS(fs)}. Wie hoch ist der Finanzierungssaldo des Privatsektors (in % des BIP)?`,
      steps:[{...base, calc:`FS_P = (X − M) − FS_St = ${fmt(lb)} − ${par(fs)} = ${fmt(fp)}`, ans:fp, final:true, pct:true}]};
    return {intro:ib, table:"", q:`Der Privatsektor von Land A hat ${FS(fp)}, der Staat ${FS(fs)}. Wie hoch ist der Leistungsbilanzsaldo (Überschuss positiv)?`,
      steps:[{...base, calc:`X − M = FS_P + FS_St = ${fmt(fp)} + ${par(fs)} = ${fmt(lb)}`, ans:lb, final:true, pct:true}]};
  }},
  real:{name:"Reales und nominales Wachstum", short:"Real/nominal", desc:"Kapitel 2: reales Wachstum aus nominalem Wachstum und Inflation; Verdopplungszeit.", kap:2, gen(){
    if(Math.random()<.6){
      const gn=pick([2,3,4,5,6,7]), pi=pick([1,1.5,2,3]); const g=r(gn-pi);
      return {intro:"Nominales BIP = BIP zu laufenden Preisen, reales BIP = BIP in Preisen des Basisjahres.", table:"",
        q:`Das nominale BIP steigt von Jahr 1 auf Jahr 2 um ${fmt(gn)} %, das Preisniveau um ${fmt(pi)} %. Um wie viel Prozent steigt das reale BIP ungefähr?`,
        steps:[{lab:"Reales Wachstum (in %)", why:"Vom nominalen Wachstum wird das „Wachstum“ der Preise, also die Inflation, abgezogen.", f:"g_real ≈ g_nominal − Inflation", calc:`${fmt(gn)} % − ${fmt(pi)} % = ${fmt(g)} %`, ans:g, final:true, pct:true}]};
    }
    const g=pick([1,2,3.5,5,7]), T=r(70/g);
    return {intro:"Faustregel aus der Vorlesung: Bei 2 % realem Wachstum pro Jahr verdoppelt sich das reale BIP nach etwa 35 Jahren.", table:"",
      q:`Nach wie vielen Jahren verdoppelt sich das reale BIP ungefähr bei einem Wachstum von ${fmt(g)} % pro Jahr?`,
      steps:[{lab:"Verdopplungszeit in Jahren", why:"Faustregel: 70 geteilt durch die Wachstumsrate in Prozent (2 % → 35 Jahre).", f:"Jahre ≈ 70 / g", calc:`70 / ${fmt(g)} ≈ ${fmt(d2(T))} Jahre`, ans:T, final:true, tol:Math.max(1,T*.05)}]};
  }},
  marx:{name:"Klassen-Kreislauf nach Marx und Ricardo", short:"Klassenmodell", desc:"Aufgabenblatt 3: Löhne, Mehrwert, Investitionen und Ersparnis im Modell mit zwei oder drei Klassen.", kap:3, gen(){
    const N=pick([50,100,200]), w=pick([200,300,400,500]), W=N*w, Y=W*pick([1.2,1.25,1.4,1.5]);
    if(Math.random()<.5){
      const P=Y-W;
      return {intro:"Geschlossene Volkswirtschaft ohne Staat mit zwei Klassen. Arbeiter:innen erhalten einen Subsistenzlohn und geben ihn vollständig für Konsum aus. Kapitalist:innen investieren ihren gesamten Gewinn.", table:tbl(["Arbeiter:innen","Lohn je Person","Produktion Y"],[N,w,Y]),
        q:"Berechnen Sie die Gesamtlöhne W, den Gewinn Π, die Investitionen I und die Ersparnis S.",
        steps:[
          {lab:"Gesamtlöhne W", why:"Zahl der Arbeiter:innen mal Lohn.", f:"W = N · w", calc:`W = ${N} · ${w} = ${W}`, ans:W, final:true},
          {lab:"Gewinn (Mehrwert) Π", why:"Was die Arbeiter:innen über ihren Lohn hinaus produzieren.", f:"Π = Y − W", calc:`Π = ${Y} − ${W} = ${Y-W}`, ans:P, final:true},
          {lab:"Investitionen I", why:"Der gesamte Gewinn wird reinvestiert.", f:"I = Π", calc:`I = ${P}`, ans:P, final:true},
          {lab:"Ersparnis S", why:"Arbeiter:innen sparen nichts (W = C). Nur die Kapitalist:innen sparen, indem sie investieren.", f:"S = Y − C = Y − W = Π", calc:`S = ${Y} − ${W} = ${P}`, ans:P, final:true}]};
    }
    const R=Math.round((Y-W)*pick([.2,.3,.4])/100)*100, P=Y-W-R, C=W+R;
    return {intro:"Geschlossene Volkswirtschaft ohne Staat mit drei Klassen: Arbeiter:innen (konsumieren ihren Subsistenzlohn), Rentiers (konsumieren ihre gesamte Rente R) und Industriekapitalist:innen (investieren ihren gesamten Gewinn).", table:tbl(["Arbeiter:innen","Lohn je Person","Produktion Y","Rente R"],[N,w,Y,R]),
      q:"Berechnen Sie W, den Gewinn Π, den gesamten Konsum C sowie I und S.",
      steps:[
        {lab:"Gesamtlöhne W", why:"Zahl der Arbeiter:innen mal Lohn.", f:"W = N · w", calc:`W = ${N} · ${w} = ${W}`, ans:W, final:true},
        {lab:"Gewinn Π der Industriekapitalist:innen", why:"Die Rente an die Rentiers schmälert den Gewinn.", f:"Π = Y − W − R", calc:`Π = ${Y} − ${W} − ${R} = ${P}`, ans:P, final:true},
        {lab:"Konsum C", why:"Arbeiter:innen konsumieren ihren Lohn, Rentiers ihre Rente.", f:"C = W + R", calc:`C = ${W} + ${R} = ${C}`, ans:C, final:true},
        {lab:"Investitionen I = Ersparnis S", why:"Steigt die Rente, sinken bei gegebener Produktion Gewinn und Investitionen. Daraus folgt Ricardos Politik für die Kapitalisten, gegen die Grundbesitzer.", f:"I = S = Π", calc:`I = S = ${P}`, ans:P, final:true}]};
  }},
  ohne:{name:"Modell ohne Staat: Gleichgewicht und Ersparnis", short:"Ohne Staat", desc:"Aufgabenblatt 4: Y*, Konsum und Ersparnis; Wirkung höherer Investitionen oder Sparneigung.", kap:4, gen(){
    for(;;){
      const c1=pick([.5,.6,.75,.8]), k=1/(1-c1), c0=rint(2,10)*5, I=rint(2,10)*5, Y=r(k*(c0+I)); if(!isInt(Y)) continue;
      const C=r(c0+c1*Y), v=pick(["I","c0","c1"]);
      const head=[
        {lab:"Gleichgewichtiges BIP Y*", why:"Multiplikator mal autonome Nachfrage.", f:"Y* = 1/(1 − c₁) · (c₀ + I)", calc:`Y* = 1/(1 − ${fmt(c1)}) · (${c0} + ${I}) = ${fmt(k)} · ${c0+I} = ${fmt(Y)}`, ans:Y, final:true},
        {lab:"Ersparnis S", why:"S = Y − C mit C = c₀ + c₁Y. Ergebnis: S = I.", f:"S = Y − (c₀ + c₁Y)", calc:`S = ${fmt(Y)} − (${c0} + ${fmt(c1)}·${fmt(Y)}) = ${fmt(r(Y-C))}`, ans:r(Y-C), final:true}];
      if(v==="I"){ const dI=pick([5,10,20]), Y2=r(k*(c0+I+dI));
        return {deut:`Mehr Investitionen erhöhen Y* um das ${fmt(k)}-Fache: um ${fmt(r(Y2-Y))} statt nur um ${dI}. Die Ersparnis steigt genau um ${dI}: Weil mehr investiert wird, wird mehr gespart (I → S).`, intro:"Geschlossene Volkswirtschaft ohne Staat: C = c<sub>0</sub> + c<sub>1</sub>Y<sup>VT</sup>, Investitionen exogen. Y<sup>A</sup> passt sich Y<sup>N</sup> an.", table:tbl(["c<sub>0</sub>","c<sub>1</sub>","I"],[c0,c1,I]),
          q:`Berechnen Sie Y* und die Ersparnis S. Danach steigen die Investitionen um ${dI}: Wie hoch sind jetzt Y* und S?`,
          steps:[...head,
            {lab:"Neues Y*", why:"Höhere Investitionen wirken mit dem Multiplikator.", f:"Y*neu = 1/(1 − c₁) · (c₀ + I + ΔI)", calc:`Y*neu = ${fmt(k)} · ${c0+I+dI} = ${fmt(Y2)}`, ans:Y2, final:true},
            {lab:"Neue Ersparnis S", why:"Keynesianisch: Die Investitionen bestimmen die Ersparnis (I → S).", f:"S = I", calc:`S = ${I+dI}`, ans:I+dI, final:true}]}; }
      if(v==="c0"){ const dc=pick([5,10,-5,-10]); if(c0+dc<=0) continue; const Y2=r(k*(c0+dc+I));
        return {deut:`Der autonome Konsum ${dc>0?"steigt":"sinkt"} um ${Math.abs(dc)}, Y* ${dc>0?"steigt":"sinkt"} um das ${fmt(k)}-Fache, also um ${fmt(Math.abs(r(Y2-Y)))}.`, intro:"Geschlossene Volkswirtschaft ohne Staat: C = c<sub>0</sub> + c<sub>1</sub>Y<sup>VT</sup>, Investitionen exogen. Y<sup>A</sup> passt sich Y<sup>N</sup> an.", table:tbl(["c<sub>0</sub>","c<sub>1</sub>","I"],[c0,c1,I]),
          q:`Berechnen Sie Y* und die Ersparnis S. Danach ${dc>0?"steigt":"sinkt"} der autonome Konsum auf ${c0+dc}: Wie hoch ist jetzt Y*?`,
          steps:[...head,{lab:"Neues Y*", why:"Auch der autonome Konsum wirkt mit dem vollen Multiplikator.", f:"Y*neu = 1/(1 − c₁) · (c₀neu + I)", calc:`Y*neu = ${fmt(k)} · ${c0+dc+I} = ${fmt(Y2)}`, ans:Y2, final:true}]}; }
      const c1n=pick([.5,.6,.75].filter(x=>x<c1)); if(c1n===undefined) continue; const k2=1/(1-c1n), Y2=r(k2*(c0+I)); if(!nice(Y2,2)) continue;
      return {deut:`Sparparadox: Die Haushalte wollen mehr sparen, doch Y* fällt von ${fmt(Y)} auf ${fmt(Y2)}. Gespart wird am Ende genauso viel wie vorher: S = I = ${I}.`, intro:"Geschlossene Volkswirtschaft ohne Staat: C = c<sub>0</sub> + c<sub>1</sub>Y<sup>VT</sup>, Investitionen exogen. Y<sup>A</sup> passt sich Y<sup>N</sup> an.", table:tbl(["c<sub>0</sub>","c<sub>1</sub>","I"],[c0,c1,I]),
        q:`Berechnen Sie Y* und S. Danach wollen die Haushalte mehr sparen: c<sub>1</sub> fällt auf ${fmt(c1n)}. Wie hoch sind jetzt Y* und S? (Sparparadox)`,
        steps:[...head,
          {lab:"Neues Y*", why:"Der Multiplikator sinkt mit der Konsumneigung.", f:"Y*neu = 1/(1 − c₁neu) · (c₀ + I)", calc:`Y*neu = 1/(1 − ${fmt(c1n)}) · ${c0+I} = ${fmt(Y2)}`, ans:Y2, final:true},
          {lab:"Neue Ersparnis S", why:"Sparparadox: Alle wollen mehr sparen, das Einkommen sinkt, und gespart wird am Ende genauso viel wie vorher, nämlich I.", f:"S = Y − C = I", calc:`S = ${fmt(Y2)} − (${c0} + ${fmt(c1n)}·${fmt(Y2)}) = ${I}`, ans:I, final:true}]};
    }
  }},
  akz:{name:"Multiplikator mit Akzelerator", short:"Akzelerator", desc:"Aufgabenblatt 4, Aufgabe 4: Investitionen hängen auch von der Nachfrage ab, der Multiplikator wird größer.", kap:4, gen(){
    for(;;){
      const c1=pick([.4,.5,.6]), a=pick([.1,.2,.3]); if(c1+a>=.9) continue;
      const c0=rint(1,8), Ia=rint(1,6), k=1/(1-c1-a), Y=r(k*(c0+Ia)); if(!nice(Y,2)) continue;
      const v=Math.random()<.5;
      const head=[
        {lab:"Multiplikator 1/(1 − c₁ − a)", why:"Nachfragebedingte Investitionen verstärken die Kettenreaktion.", f:"1 / (1 − c₁ − a)", calc:`1 / (1 − ${fmt(c1)} − ${fmt(a)}) = ${fmt(d2(k))}`, ans:d2(k)},
        {lab:"Gleichgewichtiges BIP Y*", why:"Multiplikator mal autonome Nachfrage.", f:"Y* = (c₀ + I_aut) / (1 − c₁ − a)", calc:`Y* = (${c0} + ${Ia}) / ${fmt(r(1-c1-a))} = ${fmt(d2(Y))}`, ans:d2(Y), final:true}];
      if(v){ const Ia2=Ia+1, Y2=r((c0+Ia2)*k);
        return {deut:`Steigen die autonomen Investitionen um 1, steigt Y* um den Multiplikator ${fmt(d2(k))}. Er ist größer als ohne Akzelerator, weil auch die Investitionen auf die Nachfrage reagieren.`, intro:"Geschlossene Volkswirtschaft ohne Staat: C = c<sub>0</sub> + c<sub>1</sub>Y<sup>VT</sup>, I = I<sub>aut</sub> + aY<sup>N</sup>.", table:tbl(["c<sub>0</sub>","c<sub>1</sub>","I<sub>aut</sub>","a"],[c0,c1,Ia,a]),
          q:`Ermitteln Sie Y*. Wie hoch ist Y*, wenn die autonomen Investitionen auf ${Ia2} steigen?`,
          steps:[...head,{lab:"Neues Y*", why:"ΔY = Multiplikator · ΔI_aut.", f:"Y*neu = (c₀ + I_aut,neu) / (1 − c₁ − a)", calc:`Y*neu = ${c0+Ia2} / ${fmt(r(1-c1-a))} = ${fmt(d2(Y2))}`, ans:d2(Y2), final:true}]}; }
      const a2=r(a+.1); if(c1+a2>=.95) continue; const Y2=r((c0+Ia)/(1-c1-a2));
      return {deut:`Ein größerer Akzelerator macht den Nenner kleiner und den Multiplikator größer: Y* steigt von ${fmt(d2(Y))} auf ${fmt(d2(Y2))}, obwohl sich die autonomen Ausgaben nicht ändern.`, intro:"Geschlossene Volkswirtschaft ohne Staat: C = c<sub>0</sub> + c<sub>1</sub>Y<sup>VT</sup>, I = I<sub>aut</sub> + aY<sup>N</sup>.", table:tbl(["c<sub>0</sub>","c<sub>1</sub>","I<sub>aut</sub>","a"],[c0,c1,Ia,a]),
        q:`Ermitteln Sie Y*. Wie verändert sich Y*, wenn der Akzelerator a auf ${fmt(a2)} steigt?`,
        steps:[...head,{lab:"Neues Y*", why:"Der Nenner wird kleiner, der Multiplikator größer.", f:"Y*neu = (c₀ + I_aut) / (1 − c₁ − a_neu)", calc:`Y*neu = ${c0+Ia} / ${fmt(r(1-c1-a2))} = ${fmt(d2(Y2))}`, ans:d2(Y2), final:true}]};
    }
  }},
  voll:{name:"Vollbeschäftigung ohne Staat", short:"Vollbeschäftigung", desc:"Aufgabenblatt 4, Aufgabe 3: Herrscht Vollbeschäftigung? Welcher autonome Konsum wäre nötig?", kap:4, gen(){
    for(;;){
      const c1=pick([.5,.6,.75,.8]), k=1/(1-c1), c0=rint(1,6), I=rint(2,8), Y=r(k*(c0+I)); if(!nice(Y,1)) continue;
      const YV=Math.ceil(Y)+rint(1,6), dI=1, c0n=r(YV*(1-c1)-(I-dI)); if(!nice(c0n,2)||c0n<=0) continue;
      return {deut:`Y* liegt um ${fmt(r(YV-Y))} unter Y<sub>V</sub>: Gleichgewicht bei Unterbeschäftigung. Damit nach dem Rückgang der Investitionen Vollbeschäftigung herrscht, müsste der autonome Konsum auf ${fmt(c0n)} steigen.`, intro:"Geschlossene Volkswirtschaft ohne Staat: C = c<sub>0</sub> + c<sub>1</sub>Y<sup>VT</sup>. Y<sup>A</sup> passt sich Y<sup>N</sup> an.", table:tbl(["c<sub>0</sub>","c<sub>1</sub>","I","Y<sub>V</sub>"],[c0,c1,I,YV]),
        q:`a) Wie hoch ist Y*? Herrscht Vollbeschäftigung? b) Die Investitionen fallen um ${dI} auf ${I-dI}. Wie hoch müsste der autonome Konsum sein, damit Vollbeschäftigung erreicht wird?`,
        steps:[
          {lab:"a) Gleichgewichtiges BIP Y*", why:"Multiplikator mal autonome Nachfrage.", f:"Y* = 1/(1 − c₁) · (c₀ + I)", calc:`Y* = ${fmt(k)} · ${c0+I} = ${fmt(Y)}`, ans:Y, final:true},
          {lab:"Output-Lücke Y* − Y<sub>V</sub>", why:"Negativ: Gleichgewicht bei Unterbeschäftigung.", f:"Lücke = Y* − Y_V", calc:`${fmt(Y)} − ${YV} = ${fmt(r(Y-YV))}`, ans:r(Y-YV), final:true},
          {lab:"b) Nötiger autonomer Konsum c₀", why:"Y* = Y_V setzen und nach c₀ auflösen.", f:"c₀ = Y_V · (1 − c₁) − I", calc:`c₀ = ${YV} · ${fmt(r(1-c1))} − ${I-dI} = ${fmt(c0n)}`, ans:c0n, final:true}]};
    }
  }},
  lps:{name:"Lohn-Preis-Spirale", short:"Lohn-Preis-Spirale", desc:"Aufgabenblatt 6, Aufgabe 5: Nominallöhne, Preise und Reallöhne Periode für Periode.", kap:6, gen(){
    const p0=pick([1,2,3,4]), g=pick([1,2,3]), up=Math.random()<.7, s=up?g:-g;
    const w1=p0+s, w2=w1+s, w3=w2+s;
    return {intro:`Die Volkswirtschaft ist zunächst im Gleichgewicht im Sinne der NAIRU; Preise und Löhne steigen jährlich um ${p0} %. Ab t1 ${up?"liegt die Beschäftigung über":"liegt die Beschäftigung unter"} dem Gleichgewicht: Zwischen Lohnsetzung und Preissetzung klafft eine Lücke von ${up?"+":"−"}${g} %. Die Arbeitnehmer:innen fordern jeweils die erwartete Inflation (= Inflation der Vorperiode) plus die Lücke, die Unternehmen halten den Reallohn konstant.`, table:"",
      q:"Um wie viel Prozent steigen Nominallöhne, Preise und Reallöhne in t1, t2 und t3?",
      steps:[
        {lab:"Nominallöhne t1 (in %)", why:"Erwartete Inflation plus Lücke.", f:"ŵ₁ = π₀ + Lücke", calc:`${p0} ${up?"+":"−"} ${g} = ${w1} %`, ans:w1, final:true, pct:true},
        {lab:"Preise t1 (in %)", why:"Die Unternehmen geben die Lohnsteigerung voll an die Preise weiter.", f:"π₁ = ŵ₁", calc:`π₁ = ${w1} %`, ans:w1, final:true, pct:true},
        {lab:"Reallöhne t1 (in %)", why:"Reallohnwachstum = Nominallohnwachstum − Inflation.", f:"ŵ₁ − π₁", calc:`${w1} − ${w1} = 0 %`, ans:0, final:true, pct:true},
        {lab:"Nominallöhne und Preise t2 (in %)", why:"Die höhere Inflation wird nun erwartet, die Lücke kommt wieder obendrauf.", f:"ŵ₂ = π₁ + Lücke = π₂", calc:`${w1} ${up?"+":"−"} ${g} = ${w2} %`, ans:w2, final:true, pct:true},
        {lab:"Nominallöhne und Preise t3 (in %)", why:"Die Inflation beschleunigt sich, solange die Lücke besteht. Die Reallöhne bleiben trotzdem konstant.", f:"ŵ₃ = π₂ + Lücke = π₃", calc:`${w2} ${up?"+":"−"} ${g} = ${w3} %`, ans:w3, final:true, pct:true}]};
  }},
  zins:{name:"Zinsregel beim Inflation Targeting", short:"Zinsregel", desc:"Kapitel 6: Wie reagiert die Zentralbank, wenn die Inflation vom Ziel abweicht?", kap:6, gen(){
    let i0,k,pT=2,p,i1; do{ i0=pick([1,1.5,2,2.5,3,4]); k=pick([.5,1,1.5]); p=pick([0,1,1.5,3,4,5,6]); i1=r(i0+k*(p-pT)); }while(i1<0);
    return {intro:"Zinsregel: i<sub>t</sub> = i<sub>t−1</sub> + k · (π<sub>t−1</sub> − π<sup>T</sup>), mit k > 0. Alle Werte in Prozent.", table:tbl(["i<sub>t−1</sub>","k","π<sub>t−1</sub>","π<sup>T</sup>"],[i0,k,p,pT]),
      q:"Welchen Zins setzt die Zentralbank in der laufenden Periode?",
      steps:[
        {lab:"Abweichung vom Inflationsziel (in Prozentpunkten)", why:"Positiv: Die Inflation war zu hoch.", f:"π_{t−1} − π^T", calc:`${fmt(p)} − ${pT} = ${fmt(p-pT)}`, ans:r(p-pT)},
        {lab:"Neuer Zins i<sub>t</sub> (in %)", why:"Die Zentralbank ändert den Zins, bis das Inflationsziel erreicht und damit auch die Output-Lücke geschlossen ist.", f:"i_t = i_{t−1} + k · (π_{t−1} − π^T)", calc:`${fmt(i0)} + ${fmt(k)} · ${par(r(p-pT))} = ${fmt(i1)} %`, ans:i1, final:true, pct:true}]};
  }},
  kalecki:{name:"Kostenparadox mit kaleckianischer Konsumfunktion", short:"Kostenparadox", desc:"Aufgabenblatt 7, Aufgabe 1: Ein höherer Lohnanteil erhöht Einkommen und sogar die Gewinne.", kap:7, gen(){
    for(;;){
      const aW=pick([40,50,60]), aP=pick([20,30,40]), bW=pick([.8,.9]), bP=pick([.4,.5]), w=pick([.5,.6]), w2=r(w+.1), d=pick([80,100,120]), n=pick([0,.1,.12]);
      const den=r(1-bW*w-bP*(1-w)-n), den2=r(1-bW*w2-bP*(1-w2)-n); if(den<=.08||den2<=.05) continue;
      const A=aW+aP+d, Y=A/den, Y2=A/den2, P=(1-w)*Y, P2=(1-w2)*Y2;
      return {intro:`Geschlossene Volkswirtschaft ohne Staat. Y<sup>VT</sup> = W + Π mit W = ${fmt(w)}·Y. Kaleckianische Konsumfunktion: C = a<sub>W</sub> + a<sub>Π</sub> + b<sub>W</sub>W + b<sub>Π</sub>Π. Investitionen: I = d${n?" + nY":""}.`, table:tbl(["a<sub>W</sub>","a<sub>Π</sub>","b<sub>W</sub>","b<sub>Π</sub>","d"].concat(n?["n"]:[]),[aW,aP,bW,bP,d].concat(n?[n]:[])),
        q:`a) Wie hoch ist Y*? b) Der Lohnanteil steigt auf ${fmt(w2)}. Wie hoch ist nun Y*? c) Vergleichen Sie die Gewinne.`,
        steps:[
          {lab:"Nenner 1 − b<sub>W</sub>·w − b<sub>Π</sub>·(1 − w)"+(n?" − n":""), why:"Aus Y = a_W + a_Π + b_W·wY + b_Π·(1−w)Y + d"+(n?" + nY":"")+" alle Y-Terme nach links.", f:"1 − b_W·w − b_Π·(1 − w)"+(n?" − n":""), calc:`1 − ${fmt(bW)}·${fmt(w)} − ${fmt(bP)}·${fmt(r(1-w))}${n?" − "+fmt(n):""} = ${fmt(den)}`, ans:den},
          {lab:"a) Y*", why:"Autonome Ausgaben durch den Nenner.", f:"Y* = (a_W + a_Π + d) / Nenner", calc:`Y* = ${A} / ${fmt(den)} = ${fmt(d2(Y))}`, ans:d2(Y), final:true},
          {lab:"b) Y* bei höherem Lohnanteil", why:"Lohnbezieher:innen haben die höhere Konsumneigung, also steigt die Nachfrage.", f:"Y*neu = (a_W + a_Π + d) / Nenner_neu", calc:`Nenner_neu = ${fmt(den2)}, Y*neu = ${A} / ${fmt(den2)} = ${fmt(d2(Y2))}`, ans:d2(Y2), final:true},
          {lab:"c) Gewinne vorher", why:"Gewinnanteil mal Einkommen.", f:"Π = (1 − w) · Y*", calc:`Π = ${fmt(r(1-w))} · ${fmt(d2(Y))} = ${fmt(d2(P))}`, ans:d2(P), final:true},
          {lab:"c) Gewinne nachher", why:P2>P?"Kostenparadox: Alle Unternehmen zahlen höhere Löhne, und trotzdem steigen die Gewinne insgesamt.":"Hier sinken die Gewinne trotz höherer Nachfrage, weil ihr Anteil stärker fällt, als das Einkommen steigt. Das Einkommen steigt trotzdem.", f:"Π_neu = (1 − w_neu) · Y*neu", calc:`Π_neu = ${fmt(r(1-w2))} · ${fmt(d2(Y2))} = ${fmt(d2(P2))}`, ans:d2(P2), final:true}]};
    }
  }},
  gewinn:{name:"Kaleckis Gewinngleichung", short:"Gewinngleichung", desc:"Kapitel 8: Gewinne entstehen aus Investitionen, Konsum aus Gewinnen, Entsparen, Staatsdefizit und Exportüberschüssen.", kap:8, gen(){
    const CP=rint(2,8)*5, I=rint(4,12)*5, SW=rint(-2,4)*5, GT=rint(-2,4)*5, NX=rint(-3,5)*5, P=CP+I-SW+GT+NX;
    return {intro:"Kaleckis Gewinngleichung: Π<sub>netto</sub> = C<sub>Π</sub> + I − S<sub>W</sub> + (G − T) + (X − M), mit S<sub>W</sub> = W<sub>netto</sub> − C<sub>W</sub> (Ersparnis aus Löhnen).", table:tbl(["C<sub>Π</sub>","I","S<sub>W</sub>","G − T","X − M"],[CP,I,SW,GT,NX]),
      q:"Wie hoch sind die Nettogewinne?",
      steps:[{lab:"Nettogewinne Π<sub>netto</sub>", why:"„Gewinne ohne Investitionen“: Π kann auch steigen, wenn mehr aus Gewinnen konsumiert wird, die Lohnbezieher:innen entsparen (debt-led) oder die Nettoexporte steigen (export-led).", f:"Π = C_Π + I − S_W + (G − T) + (X − M)", calc:`Π = ${CP} + ${I} − ${par(SW)} + ${par(GT)} + ${par(NX)} = ${P}`, ans:P, final:true}]};
  }}
});

/* Deutung am Ende des Lösungswegs: ein Satz, was das Ergebnis bedeutet (falls die Aufgabe keine eigene hat) */
Object.entries({
  gg:"Negative Lücke: Die Wirtschaft produziert unter ihrem Potenzial, es herrscht Unterbeschäftigung. Positive Lücke: Überauslastung, früher oder später Inflation.",
  dG:"Wegen des Multiplikators muss der Staat seine Ausgaben nur um einen Bruchteil der Lücke erhöhen: ΔG = Lücke / Multiplikator.",
  dT:"Steuern wirken schwächer als Staatsausgaben, weil von einer Entlastung ein Teil gespart wird. Um dieselbe Lücke zu schließen, muss die Steueränderung deshalb größer sein als eine Ausgabenänderung.",
  di:"Bei negativer Lücke senkt die Zentralbank den Zins, damit mehr investiert wird, bei positiver erhöht sie ihn. Je stärker die Investitionen auf den Zins reagieren (n), desto kleiner der nötige Zinsschritt.",
  mult:"Staatsausgaben wirken stärker als eine gleich große Steuersenkung, weil von der Entlastung ein Teil gespart wird. Die Differenz der Multiplikatoren beträgt genau 1.",
  bs:"Beide Maßnahmen verschlechtern den Budgetsaldo um genau 1, weil die Steuern hier ein fester Betrag sind. Die Mehrausgabe bringt aber mehr Einkommen: Für dasselbe Defizit wirkt G stärker.",
  klausur:"Wegen des Multiplikators reicht ein Impuls, der kleiner ist als die Lücke. Bei Steuern muss er größer sein als bei Staatsausgaben, weil von einer Steuerentlastung ein Teil gespart wird.",
  schuld:"Die Schuldenstandquote läuft langfristig auf d/g zu. Ein dauerhaftes Defizit ist also mit einer stabilen Quote vereinbar, solange die Wirtschaft nominal wächst.",
  vgr:"Entstehung, Verwendung und Verteilung ergeben dasselbe Y, und die Finanzierungssalden summieren sich zu null. Deshalb lässt sich jede fehlende Größe aus den anderen berechnen.",
  salden:"Privatsektor, Staat und Ausland haben zusammen immer den Saldo null: Der Überschuss des einen ist das Defizit eines anderen.",
  real:"Das reale Wachstum zeigt, ob wirklich mehr produziert wird. Der Rest des nominalen Wachstums ist nur Preissteigerung.",
  marx:"Im Klassenmodell sind die Investitionen genau der Teil der Produktion, den die Arbeiter:innen nicht als Lohn erhalten. Steigt die Rente der Grundbesitzer, bleibt bei gegebener Produktion weniger für Investitionen.",
  lps:"Solange die Lücke zwischen Lohn- und Preissetzung besteht, ändert sich die Inflation jede Periode um die Lücke. Die Reallöhne bleiben trotzdem konstant, weil die Unternehmen jede Lohnänderung an die Preise weitergeben.",
  zins:"Liegt die Inflation über dem Ziel, erhöht die Zentralbank den Zins, liegt sie darunter, senkt sie ihn. Der Faktor k bestimmt, wie stark sie reagiert.",
  kalecki:"Ein höherer Lohnanteil erhöht die Nachfrage, weil aus Löhnen mehr konsumiert wird als aus Gewinnen. Hängen die Investitionen von der Nachfrage ab, können sogar die Gewinne steigen: das Kostenparadox.",
  gewinn:"Gesamtwirtschaftlich entstehen Gewinne aus Investitionen, Konsum aus Gewinnen, Staatsdefizit und Nettoexporten. Ersparnis aus Löhnen senkt sie."
}).forEach(([k,v])=>{ if(TYPES[k]) TYPES[k].deut=v; });
