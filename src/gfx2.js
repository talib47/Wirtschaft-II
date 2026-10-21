/* ================= Grafiken Kapitel 3, 4, 6, 7 ================= */
const sup=s=>`<tspan baseline-shift='super' font-size='9'>${s}</tspan>`, sub=s=>`<tspan baseline-shift='sub' font-size='9'>${s}</tspan>`;
function panel(x0,x1,xl,yl){ return ln(x0,250,x1-6,250,"ax")+tri(x1,250,"right","arrowhead")+ln(x0,250,x0,26,"ax")+tri(x0,20,"up","arrowhead")+tx(x1+2,270,xl,"","end")+tx(x0+6,22,yl); }
const cross=()=>axes("Y"+sup("A")+", Y"+sup("VT"),"Y"+sup("N"))+ln(50,260,285,25,"base")+tx(86,250,"45°: Y"+sup("A")+" = Y","bt","start",12)+ln(50,200,380,35,"base")+tx(352,58,"Y"+sup("N"),"bt")+tx(2,204,"c₀+I","","start",11);
const lmBase=()=>panel(40,198,"E","w/p")+ln(50,230,190,70,"base")+tx(188,62,"Lohnsetzung","bt","end",11)+ln(40,150,192,150,"base")+tx(44,142,"Preissetzung","bt","start",11)+ln(120,150,120,250,"ax dash")+dot(120,150)+tx(120,268,"E*","bt","middle")
  +panel(225,390,"E","π")+ln(305,40,305,250,"base")+tx(309,50,"LPK","bt","start",11)+ln(235,205,385,130,"base")+tx(386,122,"KPK","bt","end",11)+dot(305,170);
Object.assign(GFX,{
  g3a:{base:()=>axes("L","w/p")+ln(70,240,360,40,"base")+tx(354,30,"Arbeitsangebot","bt","end",12)+ln(70,40,360,240,"base")+tx(300,236,"Arbeitsnachfrage","bt","end",12)
      +ln(215,140,215,260,"ax dash")+ln(50,140,215,140,"ax dash")+dot(215,140)+tx(215,278,"L*","bt","middle")+tx(44,144,"(w/p)*","","end",11),
      sol:()=>ln(50,90,380,90,"sol")+tx(46,94,"w_min","st","end",11)+tx(378,84,"Mindestlohn","st","end",12)
      +dot(142.5,90,"sdot")+dot(287.5,90,"sdot")+ln(142.5,90,142.5,260,"sol dash thin")+ln(287.5,90,287.5,260,"sol dash thin")
      +tx(142,278,"L"+sub("N"),"st","middle")+tx(288,278,"L"+sub("A"),"st","middle")
      +ln(142.5,70,287.5,70,"sol thin")+ln(142.5,64,142.5,76,"sol thin")+ln(287.5,64,287.5,76,"sol thin")+tx(215,64,"Arbeitslosigkeit","st","middle",12)},
  g3b:{base:()=>axes("S, I","i")+ln(70,240,330,40,"base")+tx(336,44,"S","bt")+ln(70,40,330,240,"base")+tx(336,244,"I","bt")
      +ln(200,140,200,260,"ax dash")+ln(50,140,200,140,"ax dash")+dot(200,140)+tx(42,144,"i₀","bt","end")+tx(200,278,"I₀","bt","middle"),
      sol:()=>ln(140,240,380,55.4,"sol")+tx(372,78,"S′","st","end")+ln(235,167,235,260,"sol dash thin")+ln(50,167,235,167,"sol dash thin")+dot(235,167,"sdot")
      +tx(42,171,"i₁","st","end")+tx(235,278,"I₁","st","middle")+ln(92,228,148,228,"sol thin")+tri(154,228,"right","sarrow")},
  g4a0:{base:()=>cross()+ln(170,140,170,260,"ax dash")+dot(170,140)+tx(180,158,"A","bt")+tx(170,278,"Y*","bt","middle"), sol:()=>""},
  g4a:{base:()=>cross()+ln(250,24,250,260,"ax dash")+tx(250,278,"Y"+sub("V"),"bt","middle"),
      sol:()=>dot(170,140,"sdot")+tx(180,158,"A","st")+ln(170,140,170,260,"sol dash thin")+tx(170,278,"Y*","st","middle")
      +ln(170,244,250,244,"sol thin")+ln(170,238,170,250,"sol thin")+ln(250,238,250,250,"sol thin")+tx(210,236,"Output-Lücke","st","middle",11)
      +ln(50,160,330,20,"sol")+dot(250,60,"sdot")+tx(336,26,"Y"+sup("N")+"′","st")},
  g4b:{base:()=>cross()+ln(170,140,170,260,"ax dash")+dot(170,140)+tx(180,158,"A","bt")+tx(170,278,"Y*","bt","middle"),
      sol:()=>ln(50,200,280,39,"sol")+tx(272,34,"Y"+sup("N")+"′","st","end")+tx(258,162,"steilere Nachfrage","st","start",11)
      +ln(250,60,250,260,"sol dash thin")+dot(250,60,"sdot")+tx(242,54,"B","st","end")+tx(252,278,"Y*neu","st","middle")
      +ln(176,240,240,240,"sol thin")+tri(246,240,"right","sarrow")},
  g6a:{base:lmBase,
      sol:()=>ln(160,104,160,250,"sol dash thin")+tx(160,268,"E₁","st","middle")+ln(166,104,166,150,"sol thin")+ln(162,104,170,104,"sol thin")+ln(162,150,170,150,"sol thin")+tx(170,132,"Lücke","st","start",11)
      +ln(345,150,345,250,"sol dash thin")+dot(345,150,"sdot")+ln(235,170,385,95,"sol")+tx(380,88,"KPK′","st","end",11)
      +ln(320,156,320,134,"sol thin")+tri(320,128,"up","sarrow")+tx(300,236,"π steigt","st","middle",11)},
  g6b:{base:lmBase,
      sol:()=>ln(90,230,190,115.7,"sol")+tx(196,228,"Lohnsetzung′","st","end",11)+ln(160,150,160,250,"sol dash thin")+dot(160,150,"sdot")+tx(160,268,"E₂","st","middle")
      +ln(345,40,345,250,"sol")+tx(349,50,"LPK′","st","start",11)+ln(275,205,385,150,"sol")+tx(386,168,"KPK′","st","end",11)+ln(96,200,128,200,"sol thin")+tri(134,200,"right","sarrow")
      +ln(312,232,338,232,"sol thin")+tri(344,232,"right","sarrow")},
  g7a:{base:()=>axes("Arbeitsvolumen E","w/p")+ln(70,240,360,60,"base")+tx(358,76,"Lohnsetzung","bt","end",12)+ln(50,150,380,150,"base")+tx(378,144,"Preissetzung","bt","end",12)
      +ln(215,150,215,260,"ax dash")+dot(215,150)+tx(215,278,"E"+sub("pot"),"bt","middle")+ln(140,24,140,260,"ax dash")+tx(140,278,"E₁","bt","middle")+tx(146,236,"Beschäftigung bei Y* < Y"+sub("POT"),"","start",11),
      sol:()=>ln(70,213.4,360,33.4,"sol")+tx(352,26,"Lohnsetzung′","st","end",12)+ln(50,170,380,170,"sol")+tx(378,186,"Preissetzung′","st","end",12)
      +dot(140,170,"sdot")+tx(152,210,"neues Gleichgewicht","st","start",11)
      +ln(250,124,250,110,"sol thin")+tri(250,104,"up","sarrow")+ln(330,154,330,162,"sol thin")+tri(330,168,"down","sarrow")}
});
