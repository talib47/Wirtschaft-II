/* ================= Inhalte (Grundlage: Folien und Skript van Treeck, Aufgabenblätter, Altklausuren 2024) ================= */
const CHAPTERS=[
  {n:1, title:"Geschichte und Paradigmen der Makroökonomik", teaser:"Wie Makroökonomik entstand und warum es konkurrierende Denkschulen gibt."},
  {n:2, title:"Volkswirtschaftliche Gesamtrechnung", teaser:"BIP von drei Seiten, Strom- und Bestandsgrößen, Finanzierungssalden, BIP-Kritik."},
  {n:3, title:"Klassische, neoklassische und keynesianische Makroökonomik", teaser:"Sparen, Investieren und Arbeitsmarkt aus Sicht der großen Schulen."},
  {n:4, title:"Das keynesianische Modell ohne Staat", teaser:"Konsumfunktion, Gleichgewichtseinkommen, Multiplikator, Sparparadoxon."},
  {n:5, title:"Das keynesianische Modell mit Geld- und Fiskalpolitik", teaser:"Staatsausgaben, Steuern, Zinspolitik, Schuldendynamik und ihre Grenzen."},
  {n:6, title:"Neuklassik, Neukeynesianismus und der Neue Konsens", teaser:"Rationale Erwartungen, NAIRU, Taylor-Regel und das moderne Standardmodell."},
  {n:7, title:"Postkeynesianismus", teaser:"Hysterese, Verteilung und Nachfrage als treibende Kraft auch auf lange Sicht."},
  {n:8, title:"Grenzen des Wachstums", teaser:"Wachstum, Umwelt und Arbeitszeitverkürzung."}
];

const LESSONS={5:[
{id:"5-1", t:"Warum der Staat eingreifen soll", html:`
<p>Im keynesianischen Modell kann sich ein <b>Gleichgewicht bei Unterbeschäftigung</b> einstellen. Gründe sind etwa:</p>
<ul><li>Unternehmen investieren weniger, weil ihre Erwartungen sich eintrüben („animal spirits“).</li>
<li>Haushalte sparen aus Unsicherheit mehr („Angstsparen“), die Konsumneigung sinkt.</li>
<li>Das Ausland fragt weniger nach.</li></ul>
<p>Fallen Private und Ausland als Nachfrager aus, bleibt nur der Staat. Er hat zwei Hebel in der Nachfragegleichung <b>Y = C + I + G + (X − M)</b>:</p>
<div class="dlist"><b>Direkt</b><span>mehr staatliche Nachfrage G</span><b>Indirekt</b><span>mehr C und I durch niedrigere Steuern und Abgaben oder höhere Transfers und Subventionen</span></div>
<p>In Deutschland ist dieser Gedanke seit dem <b>Stabilitäts- und Wachstumsgesetz von 1967</b> Gesetz. Nach § 1 sollen Bund und Länder bei ihrer Finanzpolitik das gesamtwirtschaftliche Gleichgewicht beachten. Es besteht aus dem <b>magischen Viereck</b>:</p>
<ul><li>hoher Beschäftigungsstand</li><li>stabiles Preisniveau</li><li>außenwirtschaftliches Gleichgewicht</li><li>angemessenes und stetiges Wirtschaftswachstum</li></ul>
<p>„Magisch“ heißt es, weil sich die vier Ziele kaum alle gleichzeitig erreichen lassen. Zwischen ihnen gibt es Zielkonflikte, zum Beispiel kann Vollbeschäftigung die Inflation antreiben.</p>
${cmp([["","Prozyklisch","Antizyklisch"],["Wirkung","verstärkt Auf- und Abschwung","gleicht die Schwankungen der übrigen Nachfrage aus"],["Im Abschwung","z. B. Ausgaben kürzen","expansiv: mehr ausgeben, Steuern senken"],["Im Boom","zusätzlich anheizen","restriktiv: weniger ausgeben, Steuern erhöhen"],["Bewertung","soll mindestens vermieden werden","ideal"]])}`,
check:[
 {q:"Die Wirtschaft ist im Abschwung, und der Staat kürzt seine Ausgaben. Wie heißt diese Politik?", o:["Antizyklisch","Prozyklisch","Automatische Stabilisierung","Neutral"], a:1, ex:"Sie verstärkt den Abschwung, weil die Nachfrage zusätzlich sinkt. Genau das soll die Finanzpolitik laut Stabilitätsgesetz mindestens vermeiden.", w:["Antizyklisch wäre das Gegenteil: im Abschwung mehr ausgeben.", null, "Automatische Stabilisatoren wirken ohne Beschluss und dämpfen den Abschwung. Hier wird aktiv gekürzt.", "Neutral wäre die Politik nur, wenn sie die Nachfrage nicht verändert. Kürzungen senken sie."]},
 {q:"Was gehört nicht zum magischen Viereck?", o:["Hoher Beschäftigungsstand","Stabiles Preisniveau","Ausgeglichener Staatshaushalt","Außenwirtschaftliches Gleichgewicht"], a:2, ex:"Das vierte Ziel ist angemessenes und stetiges Wachstum. Ein ausgeglichener Haushalt ist kein Ziel des Vierecks.", w:["Hoher Beschäftigungsstand ist eines der vier Ziele.", "Ein stabiles Preisniveau ist eines der vier Ziele.", null, "Das außenwirtschaftliche Gleichgewicht ist eines der vier Ziele."]}
]},
{id:"5-2", t:"Instrumente und Kennzahlen der Fiskalpolitik", html:`
<p>Die Fiskalpolitik hat zwei Instrumente: die <b>Staatsausgaben G</b> und die <b>Einnahmen aus Steuern und Abgaben T</b> (bzw. den Steuersatz t).</p>
<div class="merk"><b>Wichtig fürs Modell</b>G ist nur die staatliche Nachfrage nach Konsum- und Investitionsgütern. Höhere Ausgaben für Arbeitslosenunterstützung oder Subventionen werden als <i>geringere Einnahmen T</i> verbucht, nicht als höheres G.</div>
<p>Der <b>Budgetsaldo</b> ist <b>BS = T − G</b>.</p>
<div class="dlist"><b>Expansiv</b><span>erhöht die Nachfrage: Mehrausgaben oder Einnahmensenkungen</span><b>Restriktiv</b><span>bremst die Nachfrage: Steuererhöhungen oder Ausgabenkürzungen</span></div>
${cmp([["","Automatische Stabilisatoren","Diskretionäre Politik"],["Wie?","wirken ohne politische Entscheidung","fallweise beschlossen"],["Beispiele","Steuereinnahmen, Ausgaben für Arbeitslose","Konjunkturprogramm, Energiepreispauschale"],["Im Abschwung","Das Defizit steigt von selbst.","Das Parlament muss handeln."]])}
<table class="kv">
<tr><td>Staatsquote</td><td>Ausgaben des Staates / BIP</td></tr>
<tr><td>Steuerquote</td><td>Steuereinnahmen / BIP</td></tr>
<tr><td>Abgabenquote</td><td>(Steuern + Abgaben) / BIP</td></tr>
<tr><td>Zinslastquote</td><td>Zinszahlungen des Staates / BIP bzw. / Steuereinnahmen</td></tr>
<tr><td>Finanzierungssaldo</td><td>Einnahmen − Ausgaben = Defizit · (−1)</td></tr>
<tr><td>Defizitquote</td><td>Defizit / BIP</td></tr>
<tr><td>Schuldenstandquote</td><td>Schuldenstand / BIP</td></tr></table>
<p>Die staatliche Endnachfrage G liegt in Deutschland deutlich unter der Staatsquote, weil die Ausgaben des Staates weit über Güter und Dienstleistungen hinausgehen, etwa Transfers und Zinsen.</p>`,
check:[
 {q:"Welches Instrument wirkt als automatischer Stabilisator?", o:["Kindergeld","Bürgergeld","Energiepreispauschale","Erbschaftsteuer"], a:1, ex:"Die Ausgaben für Bürgergeld steigen im Abschwung von selbst, weil mehr Menschen arbeitslos werden.", w:["Kindergeld hängt von der Zahl der Kinder ab, nicht von der Konjunktur.", null, "Die Energiepreispauschale wurde fallweise beschlossen, sie ist diskretionär.", "Die Erbschaftsteuer schwankt kaum mit der Konjunktur."]},
 {q:"Der Staat zahlt mehr Arbeitslosengeld. Wie wird das im Modell verbucht?", o:["Als höheres G","Als geringeres T","Als höheres I","Gar nicht"], a:1, ex:"Transfers zählen nicht zur staatlichen Güternachfrage G. Sie verringern die Nettoeinnahmen T des Staates.", w:["G ist nur die staatliche Nachfrage nach Gütern und Dienstleistungen. Arbeitslosengeld ist ein Transfer.", null, "I sind private Investitionen. Transfers des Staates gehören nicht dazu.", "Verbucht wird es schon: Es senkt die Nettoeinnahmen des Staates."]}
]},
{id:"5-3", t:"Der Staatsausgabenmultiplikator", html:`
<p>Nimmt man den Staat ins keynesianische Modell auf, lautet die gesamtwirtschaftliche Nachfrage</p>
<div class="eq">Y<sup>N</sup> = C + I + G = c₀ + c₁·Y + I + G</div>
<p>Mit dem Angebot Y<sup>A</sup> = Y und der Gleichgewichtsbedingung Y<sup>A</sup> = Y<sup>N</sup> folgt</p>
<div class="eq">Y* = 1/(1 − c₁) · (c₀ + I + G)</div>
<p>Der Faktor <b>1/(1 − c₁)</b> ist der Multiplikator. Er gibt an, um wie viel der Gleichgewichtsoutput steigt, wenn der Staat 1 Mrd. € mehr ausgibt. Er ist größer als 1, weil das zusätzliche Einkommen zum Teil wieder konsumiert wird. Daraus entsteht neues Einkommen, davon wird wieder ein Teil konsumiert, und so weiter.</p>
<p>Im Bild: Höhere Staatsausgaben verschieben die Nachfragegerade parallel um ΔG nach oben. Das neue Gleichgewicht B liegt auf der 45°-Linie weiter rechts.</p>
${bsp("Beispiel",[["Gegeben","c₁ = 0,5, ΔG = 1, bisher Y* = 5"],["Rechnung","$ Multiplikator = 1/(1 − 0,5) = 2\n$ ΔY = 2 · 1 = 2"],["Ergebnis","Y* steigt von 5 auf 7."],["Deutung","Die Produktion steigt doppelt so stark wie die Staatsausgaben."]])}
{{fig:g1}}
<div class="merk"><b>Merksatz</b>ΔY = 1/(1 − c₁) · ΔG. Je höher die marginale Konsumneigung c₁, desto größer der Multiplikator.</div>`,
check:[
 {q:"c₁ = 0,8. Der Staat erhöht seine Ausgaben um 2 Mrd. €. Um wie viel steigt Y*?", o:["2 Mrd. €","8 Mrd. €","10 Mrd. €","1,6 Mrd. €"], a:2, ex:"Multiplikator 1/(1 − 0,8) = 5, also ΔY = 5 · 2 = 10 Mrd. €.", w:["2 Mrd. € wäre der Impuls ohne Multiplikator.", "8 Mrd. € = 4 · 2: Hier wurde mit dem Steuermultiplikator c₁/(1 − c₁) = 4 gerechnet. Für Staatsausgaben gilt 1/(1 − c₁) = 5.", null, "1,6 Mrd. € = 0,8 · 2 ist nur die erste Konsumrunde."]},
 {q:"Warum ist der Multiplikator größer als 1?", o:["Weil der Staat mehr ausgibt, als er einnimmt","Weil zusätzliches Einkommen teilweise wieder konsumiert wird","Weil die Preise steigen","Weil die Importe sinken"], a:1, ex:"Jede Ausgabe ist Einkommen für andere. Davon fließt der Anteil c₁ wieder in den Konsum und erzeugt weiteres Einkommen.", w:["Der Multiplikator wirkt auch bei ausgeglichenem Haushalt. Er entsteht aus der Kette von Ausgaben und Einkommen.", null, "Im Modell sind die Preise fest, es geht um Mengen.", "Importe kommen im einfachen Modell gar nicht vor."]}
]},
{id:"5-4", t:"Steuern: der kleinere Multiplikator", html:`
<p>Werden Steuern als fester Betrag T erhoben, konsumieren die Haushalte aus dem Nettoeinkommen: C = c₀ + c₁(Y − T). Damit gilt</p>
<div class="eq">Y* = 1/(1 − c₁) · (c₀ − c₁·T + I + G)</div>
<p>Der <b>Steuermultiplikator</b> ist dem Betrag nach <b>c₁/(1 − c₁)</b>. Er ist kleiner als der Staatsausgabenmultiplikator. Eine Steuersenkung erhöht nur das verfügbare Einkommen, und davon wird ein Teil gespart. Die Nachfragegerade verschiebt sich deshalb nur um c₁·ΔT. Staatsausgaben dagegen gehen in voller Höhe in die Nachfrage ein.</p>
<table class="kv"><tr><td>c₁ = 0,5</td><td>m<sub>G</sub> = 2, m<sub>T</sub> = 1</td></tr><tr><td>c₁ = 0,6</td><td>m<sub>G</sub> = 2,5, m<sub>T</sub> = 1,5</td></tr></table>
<p>Die Differenz m<sub>G</sub> − m<sub>T</sub> ist immer genau 1. Schätzungen des IWF zeigen ebenfalls: Ausgabenprogramme wirken stärker als Steuersenkungen, und in großen Volkswirtschaften stärker als in kleinen.</p>
<p>Weitere Punkte bei der Wahl zwischen Ausgaben und Steuersenkungen:</p>
<ul><li><b>Zeitverzögerung</b> zwischen Beschluss und Wirkung: Liegen Projekte „in der Schublade“?</li>
<li><b>Zeithorizont</b>: Lässt sich die Maßnahme zurücknehmen, wenn die Schwäche vorbei ist?</li>
<li><b>Struktur der Ausgaben</b>: konsumtiv oder investiv (Infrastruktur, Bildung). Keynes spitzte zu, sogar Geld zu vergraben und wieder ausgraben zu lassen würde Arbeitslosigkeit verringern; sinnvoller sei es aber, Häuser zu bauen.</li>
<li><b>Steuerart</b>: Am stärksten wirkt die Entlastung von Haushalten, die einen großen Teil ihres Einkommens konsumieren, also vor allem der unteren Einkommensgruppen.</li></ul>`,
check:[
 {q:"Welche Steuersenkung regt die Nachfrage am wenigsten an?", o:["Senkung der Mehrwertsteuer","Senkung des Spitzensteuersatzes","Senkung der Sozialabgaben für Geringverdiener","Alle wirken gleich"], a:1, ex:"Spitzenverdiener sparen einen großen Teil zusätzlichen Einkommens; ihre Konsumneigung ist niedrig. Die Entlastung fließt also nur zu einem kleinen Teil in die Nachfrage.", w:["Die Mehrwertsteuer zahlen alle beim Einkaufen. Ihre Senkung entlastet auch Haushalte mit hoher Konsumneigung.", null, "Geringverdiener geben zusätzliches Einkommen fast ganz aus. Das wirkt besonders stark.", "Die Wirkung hängt von der Konsumneigung der Entlasteten ab, und die ist unterschiedlich."]},
 {q:"c₁ = 0,75. Wie groß ist der Steuermultiplikator (Betrag)?", o:["4","3","0,75","1"], a:1, ex:"c₁/(1 − c₁) = 0,75/0,25 = 3. Der Ausgabenmultiplikator wäre 4, die Differenz also 1.", w:["4 = 1/(1 − 0,75) ist der Staatsausgabenmultiplikator.", null, "0,75 ist c₁ selbst. Der Faktor 1/(1 − c₁) fehlt.", "1 ist die Differenz zwischen beiden Multiplikatoren, nicht der Steuermultiplikator."]}
]},
{id:"5-5", t:"Die Dynamik der Staatsverschuldung", html:`
<p>Entscheidend ist nicht die absolute Schuld, sondern die <b>Schuldenstandquote</b>, also die Schuld im Verhältnis zum BIP. Mit</p>
<ul><li>d = Haushaltsdefizit in % des BIP</li><li>g = Wachstum des nominalen BIP</li><li>D = Schuldenstandquote</li></ul>
<p>gilt langfristig die Schuldenmechanik:</p>
<div class="eq">D = d / g</div>
${bsp("Beispiel",[["Gegeben","Defizit d = 3 % des BIP, nominales Wachstum g = 5 % pro Jahr"],["Rechnung","$ D = 3 % / 5 % = 0,6"],["Ergebnis","Die Schuldenstandquote bleibt dauerhaft bei 60 %."],["Deutung","Das ist die Logik der Grenzwerte im europäischen Stabilitäts- und Wachstumspakt. Ein dauerhaftes Defizit verträgt sich mit einer stabilen Quote, solange die Wirtschaft wächst."]])}
<div class="merk"><b>Paradox</b>Ist der Fiskalmultiplikator hoch, kann eine restriktive Politik, die das Defizit senkt, die Schuldenstandquote sogar erhöhen. Sie drückt das BIP-Wachstum, und der Nenner schrumpft schneller als die Schulden. Im Beispiel der Vorlesung fällt d von 3 % auf 2 %, g aber von 5 % auf −1 %; die Quote steigt in sieben Jahren von 60 % auf über 75 %.</div>`,
check:[
 {q:"Das BIP wächst langfristig um 2 %, die Neuverschuldung beträgt 1 % des BIP. Wie hoch ist die langfristige Schuldenstandquote?", o:["2 %","50 %","200 %","20 %"], a:1, ex:"D = d/g = 0,01/0,02 = 0,5, also 50 %. Diese Aufgabe kam so in der Klausur 2024.", w:["2 % ist das Wachstum g, nicht die Quote.", null, "200 % = g/d: Der Bruch ist umgedreht. Richtig ist D = d/g.", "20 % ist ein Kommafehler: 0,01/0,02 = 0,5, also 50 %."]},
 {q:"Wie kann Sparpolitik die Schuldenstandquote erhöhen?", o:["Durch höhere Zinsen","Indem sie über den Multiplikator das BIP-Wachstum senkt","Gar nicht, sie senkt sie immer","Durch Inflation"], a:1, ex:"Die Quote ist Schulden durch BIP. Sinkt das BIP-Wachstum stärker als das Defizit, steigt die Quote.", w:["Die Zinsen spielen im Argument der Vorlesung keine Rolle. Es geht um den Nenner der Quote.", null, "Nicht immer: Bei hohem Multiplikator kann die Quote steigen.", "Sparpolitik dämpft eher die Preise. Es geht um das sinkende BIP."]}
]},
{id:"5-6", t:"Geldpolitik: der Zins als Hebel", html:`
<p>Bisher waren die Investitionen konstant. Jetzt hängen sie vom Zins ab:</p>
<div class="eq">I = d − n·i</div>
<ul><li><b>d</b>: zinsunabhängige Investitionen, das Niveau bei einem Zins von null</li>
<li><b>n</b>: wie stark die Investitionen auf den Zins reagieren</li></ul>
<p>Man stellt sich vor, alle Investitionsprojekte sind nach ihrer erwarteten Rendite sortiert. Je niedriger der Zins, desto mehr Projekte lohnen sich. Sinkt der Zins um einen Prozentpunkt, steigen die Investitionen um n Einheiten. Der Unterschied zwischen Nominal- und Realzins wird in diesem Kapitel vernachlässigt.</p>
<div class="eq">Y* = 1/(1 − c₁) · (c₀ + d − n·i)</div>
<p>Die Zentralbank kann den Zins (annahmegemäß perfekt) steuern. Im i/Y-Diagramm ist ihr Zins eine waagerechte <b>Zinslinie</b>. Die Kurve „gesamtwirtschaftliche Nachfrage = Angebot“ fällt: Je niedriger der Zins, desto höher der Output. Optimal ist ein Zins, bei dem sich beide beim Vollbeschäftigungsoutput Y<sub>V</sub> schneiden.</p>
<h3>Ein negativer Nachfrageschock</h3>
<ol class="steps"><li>c₀ oder d sinkt, die Nachfragekurve verschiebt sich nach links.</li><li>Bleibt die Zentralbank beim alten Zins, landet die Wirtschaft im Unterbeschäftigungsgleichgewicht B.</li><li>Senkt sie den Zins, etwa von 4 % auf 3,5 %, ist im Punkt C wieder Vollbeschäftigung erreicht.</li></ol>
{{fig:g2}}`,
check:[
 {q:"Ein negativer Nachfrageschock trifft die Wirtschaft. Was sollte die Zentralbank tun, um die Output-Lücke zu schließen?", o:["Den Zins erhöhen","Den Zins senken","Den Zins unverändert lassen","Die Steuern senken"], a:1, ex:"Ein niedrigerer Zins regt die Investitionen an und verschiebt das Gleichgewicht zurück zum Vollbeschäftigungsoutput. Steuern sind Sache der Fiskalpolitik, nicht der Zentralbank.", w:["Ein höherer Zins würde die Investitionen weiter senken und die Lücke vergrößern.", null, "Dann bleibt die Wirtschaft im Unterbeschäftigungsgleichgewicht B.", "Steuern sind Sache der Fiskalpolitik, nicht der Zentralbank."]},
 {q:"In I = d − n·i ist n = 100. Der Zins sinkt von 0,05 auf 0,03. Wie ändern sich die Investitionen?", o:["Sie steigen um 2","Sie steigen um 200","Sie sinken um 2","Sie steigen um 0,02"], a:0, ex:"ΔI = −n · Δi = −100 · (−0,02) = +2.", w:[null, "200 = 100 · 2: Der Zins ist als Dezimalzahl angegeben. Die Änderung beträgt 0,02, nicht 2.", "Vorzeichen verwechselt: Ein sinkender Zins erhöht die Investitionen.", "0,02 ist nur die Zinsänderung. Sie muss noch mit n = 100 multipliziert werden."]}
]},
{id:"5-7", t:"Grenzen der Geldpolitik", html:`
<p>Die Geldpolitik stößt an zwei Grenzen.</p>
<h3>1. Nominalzinsfalle</h3>
<p>Die Investitionen hängen vom Realzins ab:</p>
<div class="eq">Realzins = Nominalzins − Inflationsrate</div>
<p>Hat die Zentralbank den Nominalzins schon auf null gesenkt, ist der Realzins womöglich immer noch zu hoch, um Vollbeschäftigung zu erreichen. Im Beispiel der Vorlesung müsste der Nominalzins auf −0,5 % fallen.</p>
<h3>2. Investitionsfalle</h3>
<p>Sind die Erwartungen der Unternehmen („animal spirits“) am Boden, reagieren die Investitionen gar nicht mehr auf Zinssenkungen. Die gesamtwirtschaftliche Nachfragekurve verläuft dann <b>senkrecht</b>: Eine niedrigere Zinslinie ändert den Output nicht.</p>
{{fig:g3}}
<div class="merk"><b>Merksatz</b>In der Nominalzinsfalle und in der Investitionsfalle hilft nur noch expansive Fiskalpolitik. Sie verschiebt die Nachfragekurve nach rechts.</div>`,
check:[
 {q:"Wie verläuft die Nachfragekurve im i/Y-Diagramm in der Investitionsfalle?", o:["Waagerecht","Senkrecht","Steigend","Fallend wie immer"], a:1, ex:"Die Investitionen reagieren nicht auf den Zins, also ist der Output für jeden Zins gleich.", w:["Waagerecht ist die Zinslinie der Zentralbank, nicht die Nachfragekurve.", null, "Eine steigende Kurve hieße: höherer Zins, mehr Output. Das gibt das Modell nicht her.", "Fallend ist der Normalfall. In der Falle reagieren die Investitionen aber gar nicht auf den Zins."]},
 {q:"Nominalzins 0 %, Inflation −1 %. Wie hoch ist der Realzins?", o:["−1 %","0 %","1 %","2 %"], a:2, ex:"Realzins = 0 % − (−1 %) = 1 %. Bei Deflation kann der Realzins also trotz Nullzins positiv und zu hoch sein.", w:["Vorzeichen verwechselt: 0 − (−1) ergibt +1.", "0 % gilt nur bei einer Inflation von null.", null, "2 % hat mit der Rechnung nichts zu tun: 0 − (−1) = 1."]}
]},
{id:"5-8", t:"Offene Volkswirtschaft: wenn alle exportieren wollen", html:`
<p>In der offenen Volkswirtschaft gilt Y<sup>N</sup> = C + I + G + (X − M). Bleibt die heimische Nachfrage C + I + G hinter dem Potenzial zurück, und will die Politik keine keynesianischen Instrumente einsetzen, etwa wegen der Schuldenbremse, liegt ein Ausweg nahe: Vollbeschäftigung über hohe <b>Nettoexporte</b>.</p>
<p>Das Problem: Die Welt als Ganzes ist eine geschlossene Volkswirtschaft. Die Nettoexporte aller Länder summieren sich immer zu <b>null</b>. Der Exportüberschuss des einen Landes ist das Leistungsbilanzdefizit eines anderen, das sich dafür verschulden muss.</p>
<div class="merk"><b>Merksatz</b>Verlassen sich alle Länder darauf, dass das Ausland genug Nachfrage für ihre Exporte bereitstellt, entsteht ein weltweiter Nachfragemangel mit Arbeitslosigkeit. Unterschiedliche Sichtweisen auf Geld- und Fiskalpolitik führen so zu internationalen Konflikten.</div>`,
check:[
 {q:"Was ergibt die Summe der Nettoexporte aller Länder der Welt?", o:["Sie ist positiv","Sie ist null","Sie ist negativ","Sie hängt vom Wechselkurs ab"], a:1, ex:"Jedem Export eines Landes steht ein Import eines anderen gegenüber. Die Welt ist eine geschlossene Volkswirtschaft.", w:["Die Welt kann nicht an sich selbst mehr verkaufen, als sie kauft.", null, "Aus demselben Grund kann die Summe auch nicht negativ sein.", "Wechselkurse verschieben, wer Überschüsse hat. Die Summe bleibt null."]}
]},
{id:"5-9", t:"Die Kontroverse um Staatsdefizite", html:`
<p>Für den Essay brauchst du die Positionen der Denkschulen zur Fiskalpolitik. Das Skript stellt sie so gegenüber:</p>
<div class="dlist">
<b>Neoklassik</b><span>Die Kapazitäten sind auf Dauer ausgelastet, der Finanzmarkt koordiniert Sparen und Investieren. Höhere Staatsausgaben verdrängen private Ausgaben <span class="pz">(Crowding-out)</span>. Staatliche Defizite haben keine offensichtliche Berechtigung.</span>
<b>Neuklassik</b><span><b>Ricardianische Äquivalenz:</b> Rationale Haushalte erwarten, dass der Staat kreditfinanzierte Ausgaben später über höhere Steuern bezahlen muss. Sie sparen schon heute mehr. Der Multiplikator wird kleiner, im Extremfall null.</span>
<b>Keynesianismus</b><span>Der private Sektor will oft über lange Zeit weniger ausgeben, als er einnimmt. Dann soll der Staat ein Defizit hinnehmen. Bei unterausgelasteten Kapazitäten ziehen Staatsausgaben über den Multiplikator private Ausgaben mit <span class="pz">(Crowding-in)</span>. Ausgaben sind Steuersenkungen vorzuziehen.</span>
</div>
<p><b>Neuer Konsens.</b> Die Wirkung hängt davon ab, ob eine Konjunkturschwäche (Nachfrage) oder ein Angebotsproblem vorliegt. Die <b>Schuldenbremse</b> im Grundgesetz (seit 2009) begrenzt das strukturelle Defizit des Bundes auf 0,35 % des BIP; ein konjunkturelles Defizit ist erlaubt. Das Potenzial ist aber nicht beobachtbar. Wie groß die Output-Lücke ist und welcher Teil des Defizits als strukturell gilt, hängt deshalb von der Schätzung ab. Das Skript zeigt das am Beispiel Spaniens, wo die EU-Kommission fast das ganze Defizit als strukturell einstufte.</p>
<p><b>Hysterese.</b> Eine Konjunkturschwäche, die nicht bekämpft wird, kann zum strukturellen Problem werden: Langzeitarbeitslose verlieren Qualifikationen, Unternehmen stellen Investitionen zurück. Das betonen vor allem keynesianisch orientierte Ökonom:innen. Neoklassisch orientierte halten dagegen, Konjunkturpolitik könne Strukturschwächen verschleiern und nötige Reformen verschleppen.</p>`,
check:[
 {q:"Was besagt die Ricardianische Äquivalenz?", o:["Staatsausgaben wirken doppelt","Haushalte sparen heute mehr, weil sie künftige Steuererhöhungen erwarten","Steuern und Ausgaben haben denselben Multiplikator","Der Zins sinkt bei Defiziten"], a:1, ex:"Dadurch sinkt der Konsum, wenn G steigt, und der Multiplikator schrumpft bis im Extremfall auf null.", w:["Im Gegenteil: Nach der Ricardianischen Äquivalenz wirken Staatsausgaben schwächer.", null, "Das ist eine andere Frage. Hier geht es um das Sparverhalten der Haushalte.", "Über den Zins sagt die These nichts. Es geht um die erwarteten Steuern."]},
 {q:"Welches Defizit begrenzt die Schuldenbremse des Bundes auf 0,35 % des BIP?", o:["Das tatsächliche Defizit","Das konjunkturelle Defizit","Das strukturelle Defizit","Die Schuldenstandquote"], a:2, ex:"Konjunkturell bedingte Defizite sind erlaubt. Gerade deshalb ist so umstritten, wie das Potenzial geschätzt wird.", w:["Das tatsächliche Defizit darf höher sein, weil konjunkturelle Defizite erlaubt sind.", "Konjunkturelle Defizite sind ausdrücklich erlaubt.", null, "Die Schuldenbremse begrenzt das jährliche Defizit, nicht den Schuldenstand."]}
]}
]};

const CARDS={5:[
 {id:"c5-01", f:"Welche vier Ziele bilden das magische Viereck?", b:"- hoher Beschäftigungsstand\n- stabiles Preisniveau (geringe Inflation)\n- außenwirtschaftliches Gleichgewicht (keine dauerhaften Überschüsse oder Defizite mit dem Ausland)\n- angemessenes und stetiges Wachstum\nQuelle: Stabilitäts- und Wachstumsgesetz von 1967"},
 {id:"c5-02", f:"Warum heißt das Viereck „magisch“?", b:"Die vier Ziele lassen sich kaum **alle gleichzeitig** erreichen, es gibt Zielkonflikte.\nDie Ziele:\n- hoher Beschäftigungsstand\n- stabiles Preisniveau\n- außenwirtschaftliches Gleichgewicht\n- stetiges Wachstum\nBeispiel: Vollbeschäftigung kann die Inflation antreiben."},
 {id:"c5-03", f:"Antizyklische vs. prozyklische Fiskalpolitik", b:"| | Antizyklisch | Prozyklisch\n| Wirkung | gleicht Schwankungen aus | verstärkt den Konjunkturverlauf\n| Im Abschwung | expansiv: mehr ausgeben, Steuern senken | z. B. Ausgaben kürzen\n| Im Boom | restriktiv: weniger ausgeben, Steuern erhöhen | zusätzlich anheizen"},
 {id:"c5-04", f:"Budgetsaldo im Modell", b:"$ BS = T − G\nT: Einnahmen aus Steuern und Abgaben\nG: Staatsausgaben für Güter und Dienstleistungen\nPositiv: Überschuss\nNegativ: Defizit"},
 {id:"c5-05", f:"Wo werden Transfers wie Arbeitslosengeld im Modell verbucht?", b:"Als **geringere Einnahmen T**, nicht als höheres G.\nG ist nur die staatliche Nachfrage nach Konsum- und Investitionsgütern."},
 {id:"c5-06", f:"Automatischer Stabilisator: Definition und Beispiel", b:"Definition: Einnahmen oder Ausgaben, die **ohne Beschluss** mit der Konjunktur (dem Auf und Ab der Wirtschaft) schwanken und sie dämpfen\nBeispiele: Bürgergeld bzw. Arbeitslosenunterstützung, Steuereinnahmen\nIm Abschwung steigt das Defizit von selbst, im Aufschwung sinkt es."},
 {id:"c5-07", f:"Diskretionäre Fiskalpolitik", b:"**Fallweise** politisch beschlossene Maßnahmen.\nBeispiele: ein Konjunkturprogramm, die Energiepreispauschale\nGegenstück: automatische Stabilisatoren, die ohne Beschluss wirken"},
 {id:"c5-08", f:"Warum ist die Staatsquote deutlich höher als G/BIP?", b:"Die Staatsquote umfasst **alle** Ausgaben des Staates:\n- Güter und Dienstleistungen (das ist G)\n- Transfers (z. B. Renten)\n- Subventionen (Zuschüsse an Firmen)\n- Zinsen\nG ist also nur ein Teil."},
 {id:"c5-09", f:"Staatsausgabenmultiplikator: Formel und Bedeutung", b:"$ ΔY = 1/(1 − c₁) · ΔG\nBedeutung: Um so viel steigt Y*, wenn G um 1 steigt.\nGrößer als 1, weil zusätzliches Einkommen teilweise wieder konsumiert wird.\nBeispiel: c₁ = 0,8 ⇒ Multiplikator 5"},
 {id:"c5-10", f:"Steuermultiplikator (Betrag)", b:"$ m_T = c₁/(1 − c₁)\n$ Y* = 1/(1 − c₁) · (c₀ − c₁T + I + G)\nBeispiel: c₁ = 0,6 ⇒ m_T = 1,5 (und m_G = 2,5)"},
 {id:"c5-11", f:"Warum ist der Ausgabenmultiplikator größer als der Steuermultiplikator?", b:"| | Staatsausgaben | Steuersenkung\n| Erste Runde | gehen **voll** in die Nachfrage ein | erhöhen nur das verfügbare Einkommen, ein Teil (1 − c₁) wird gespart\n| Multiplikator | 1/(1 − c₁) | c₁/(1 − c₁)\nDie Differenz beträgt immer genau 1."},
 {id:"c5-12", f:"Vier Gesichtspunkte bei der Wahl zwischen Mehrausgaben und Steuersenkung", b:"- Zeitverzögerung: Liegen Projekte „in der Schublade“?\n- Zeithorizont: Lässt sich die Maßnahme zurücknehmen?\n- Struktur der Ausgaben: konsumtiv (z. B. Gehälter) oder investiv (z. B. Brücken, Schulen)\n- Steuerart: Wen entlastet die Senkung?"},
 {id:"c5-13", f:"Welche Haushalte sollte eine Steuersenkung entlasten, damit sie stark wirkt?", b:"Haushalte mit **hoher Konsumneigung**, also vor allem untere Einkommensgruppen.\nSie geben zusätzliches Einkommen fast ganz aus."},
 {id:"c5-14", f:"Schuldenmechanik: Formel und Beispiel", b:"$ D = d/g\nd: Defizitquote (Defizit in % des BIP)\ng: nominales Wachstum (inklusive Preissteigerung)\nD: Schuldenstandquote, auf die es langfristig hinausläuft\nBeispiel: d = 3 %, g = 5 % ⇒ D = 60 %"},
 {id:"c5-15", f:"Wie kann restriktive Fiskalpolitik die Schuldenstandquote erhöhen?", b:"1. Der Staat senkt das Defizit.\n2. Bei hohem Multiplikator sinkt das BIP-Wachstum stark.\n3. Der Nenner der Quote (das BIP) schrumpft schneller als die Schulden.\nBeispiel der Vorlesung: d sinkt von 3 % auf 2 %, g von 5 % auf −1 %. Die Quote steigt in sieben Jahren von 60 % auf über 75 %."},
 {id:"c5-16", f:"I = d − n·i: Was bedeuten d und n?", b:"$ I = d − n·i\nd: zinsunabhängige Investitionen (Niveau bei Zins null)\nn: Zinsreagibilität, also wie empfindlich die Investitionen auf den Zins reagieren\ni: Zins"},
 {id:"c5-17", f:"Was bedeutet I = d − n·i für den Handlungsspielraum der Geldpolitik?", b:"Die Zentralbank kann über den Zins die **Investitionen** und damit Y* steuern.\nJe größer n, desto wirksamer.\nBei n ≈ 0 (Investitionsfalle) ist sie machtlos."},
 {id:"c5-18", f:"Nominalzinsfalle", b:"Der **Nominalzins** ist schon bei null.\nDer **Realzins** ist aber noch zu hoch für Vollbeschäftigung:\n$ Realzins = Nominalzins − Inflation\nAusweg: nur Fiskalpolitik"},
 {id:"c5-19", f:"Investitionsfalle", b:"Die Investitionen reagieren wegen **pessimistischer Erwartungen** nicht auf den Zins.\nIm i/Y-Diagramm ist die Nachfragekurve **senkrecht**: Eine niedrigere Zinslinie ändert den Output nicht.\nAusweg: nur Fiskalpolitik"},
 {id:"c5-20", f:"Warum können nicht alle Länder Exportüberschüsse erzielen?", b:"Die Nettoexporte der Welt summieren sich **immer zu null**: Der Überschuss des einen ist das Defizit des anderen.\nStreben alle Überschüsse an, entsteht ein weltweiter Nachfragemangel mit Arbeitslosigkeit."},
 {id:"c5-21", f:"Verdrängung vs. Mitziehen (Crowding-out vs. Crowding-in)", b:"| | Verdrängung | Mitziehen\n| Sicht | neoklassisch | keynesianisch\n| Kapazitäten | voll ausgelastet | unterausgelastet (Maschinen und Arbeitskräfte stehen teilweise still)\n| Wirkung von Staatsausgaben | verdrängen private Ausgaben | ziehen über den Multiplikator private Ausgaben mit"},
 {id:"c5-22", f:"Ricardianische Äquivalenz", b:"1. Der Staat gibt mehr aus und finanziert das mit Krediten.\n2. Rationale Haushalte erwarten dafür künftige Steuererhöhungen.\n3. Sie sparen schon heute mehr, der Konsum sinkt.\nFolge: Der Multiplikator sinkt, im Extremfall auf null.\nDenkschule: Neuklassik"},
 {id:"c5-23", f:"Schuldenbremse: was ist begrenzt?", b:"Begrenzt: das **strukturelle** Defizit des Bundes auf 0,35 % des BIP (das Defizit, das auch bei normaler Konjunktur bliebe)\nErlaubt: **konjunkturelle** Defizite (durch einen Abschwung entstanden)\nProblem: Das Potenzial und damit die Output-Lücke sind nicht beobachtbar. Die Einordnung hängt von Schätzungen ab."},
 {id:"c5-24", f:"Hysterese", b:"Eine anhaltende Konjunkturschwäche senkt das **Produktionspotenzial dauerhaft**.\nGründe:\n- Langzeitarbeitslose verlieren Qualifikationen.\n- Unternehmen stellen Investitionen zurück.\nAus einem konjunkturellen wird ein strukturelles Problem."},
 {id:"c5-25", f:"Grenzen der Geldpolitik und wie man sie auflöst", b:"Nominalzinsfalle: Der Zins ist schon bei null, real aber noch zu hoch.\nInvestitionsfalle: Die Investitionen reagieren nicht auf den Zins.\nAuflösung: **expansive Fiskalpolitik**, sie verschiebt die Nachfragekurve nach rechts."}
]};

/* Grafiken: Koordinaten im Raster 400 × 300, Ursprung bei (50|260) */
const GRAPHS={5:[
 {id:"g1", t:"Höhere Staatsausgaben im 45°-Diagramm",
  task:"Die Regierung erhöht die Staatsausgaben um ΔG. Zeichnen Sie die neue Nachfragegerade ein und kennzeichnen Sie das neue Gleichgewicht B sowie Y*<sub>neu</sub>.",
  check:["Neue Nachfragegerade parallel nach oben verschoben","Verschiebung um ΔG (größerer Achsenabschnitt)","Neues Gleichgewicht B auf der 45°-Linie","Y*neu auf der Y-Achse markiert, weiter rechts als Y*","Der Abstand Y*neu − Y* ist größer als ΔG (Multiplikator)"]},
 {id:"g2", t:"Geldpolitik bei einem Nachfrageschock", klausur:"Ersttermin 2024, Aufgabe 3",
  task:"Zeichnen Sie einen negativen Nachfrageschock ein. Zeigen Sie, wie die Zentralbank reagieren sollte, wenn sie die Output-Lücke schließen möchte, und begründen Sie in einem Satz.",
  check:["Nachfragekurve nach links verschoben","Bei unverändertem Zins: Gleichgewicht B links von Y_POT, Output-Lücke markiert","Neue, niedrigere Zinslinie eingezeichnet","Neues Gleichgewicht C wieder bei Y_POT","Satz: Die Zentralbank senkt den Zins, weil das die Investitionen anregt"]},
 {id:"g3", t:"Die Investitionsfalle",
  task:"Die Wirtschaft steckt in der Investitionsfalle. Zeigen Sie, warum eine Zinssenkung nicht hilft und welche Politik stattdessen wirkt.",
  check:["Nachfragekurve senkrecht: Investitionen reagieren nicht auf den Zins","Niedrigere Zinslinie ändert den Output nicht","Expansive Fiskalpolitik verschiebt die Kurve nach rechts bis Y_POT","Benennung: Investitionsfalle, nur Fiskalpolitik wirkt"]}
]};

const ESSAYS={5:[
 {id:"e5-1", pts:24, klausur:"Ersttermin 2024, Teil III",
  q:"„Die aktuelle Konjunkturschwäche erfordert eine aktive stabilisierende Fiskalpolitik. Wenn damit zu lange gewartet wird, wird das Produktionspotenzial langfristig sinken.“ Diskutieren Sie diese Aussage vor dem Hintergrund der Vorlesungsinhalte. Berücksichtigen Sie unterschiedliche theoretische Perspektiven.",
  k:[
   "Begriffe geklärt: Konjunkturschwäche als negative Output-Lücke, Produktionspotenzial",
   "Keynesianisch: Unterbeschäftigungsgleichgewicht möglich, Markt heilt sich nicht von selbst",
   "Multiplikator 1/(1 − c₁) erklärt, Staatsausgaben wirken stärker als Steuersenkungen",
   "Crowding-in bei unterausgelasteten Kapazitäten; Defizit spiegelt den Überschusswunsch der Privaten",
   "Grenzen der Geldpolitik (Nominalzins-, Investitionsfalle) als Argument für Fiskalpolitik",
   "Hysterese: lange Schwäche senkt das Potenzial (Langzeitarbeitslose, ausbleibende Investitionen), stützt den zweiten Satz",
   "Neoklassisch: Selbstheilungskräfte über flexible Preise, Löhne und Zins; Crowding-out",
   "Neuklassik: Ricardianische Äquivalenz, Multiplikator klein bis null",
   "Gegenposition zum zweiten Satz: Potenzial angebotsseitig bestimmt; Konjunkturpolitik verschleiert Strukturprobleme und verschleppt Reformen",
   "Neuer Konsens: kurzfristig Nachfrage, langfristig Angebot; Unterscheidung konjunkturell/strukturell",
   "Schuldenbremse: strukturelles Defizit max. 0,35 % des BIP, konjunkturelles erlaubt; Problem der Potenzialschätzung",
   "Begründetes eigenes Fazit, das die Perspektiven abwägt"],
  m:`Die Aussage enthält zwei Behauptungen: Die Konjunkturschwäche, also eine negative Output-Lücke, solle der Staat aktiv bekämpfen, und Abwarten senke das Produktionspotenzial dauerhaft.

Aus keynesianischer Sicht ist beides plausibel. Ein Gleichgewicht bei Unterbeschäftigung kann sich dauerhaft einstellen, weil Haushalte und Unternehmen bei Unsicherheit sparen statt ausgeben. Höhere Staatsausgaben erhöhen den Output über den Multiplikator 1/(1 − c₁) um mehr als den Impuls; sie wirken stärker als Steuersenkungen, von denen ein Teil gespart wird. Bei ungenutzten Kapazitäten verdrängen sie private Ausgaben nicht, sondern ziehen sie nach (Crowding-in). Steckt die Geldpolitik in der Nominalzins- oder Investitionsfalle, bleibt Fiskalpolitik das einzige wirksame Mittel. Für den zweiten Satz spricht das Hysterese-Argument, das besonders der Postkeynesianismus betont: Langzeitarbeitslose verlieren Qualifikationen, Unternehmen stellen Investitionen zurück, und aus der konjunkturellen Schwäche wird eine strukturelle.

Die neoklassische Sicht widerspricht. Flexible Preise, Löhne und Zinsen führen langfristig zur Vollbeschäftigung; Staatsausgaben verdrängen private Ausgaben (Crowding-out). Nach der Ricardianischen Äquivalenz der Neuklassik sparen rationale Haushalte für erwartete Steuererhöhungen, sodass der Multiplikator gegen null geht. Das Potenzial sei angebotsseitig bestimmt; Konjunkturprogramme könnten Strukturprobleme verschleiern und Reformen verschleppen.

Der Neue Konsens vermittelt: Kurzfristig bestimmt die Nachfrage den Output, langfristig das Angebot. Entsprechend erlaubt die Schuldenbremse konjunkturelle Defizite, begrenzt aber das strukturelle Defizit auf 0,35 % des BIP. Weil das Potenzial nicht beobachtbar ist, hängt die Einordnung jedoch von umstrittenen Schätzungen ab.

Fazit: Liegt tatsächlich eine Nachfrageschwäche vor und ist die Geldpolitik eingeschränkt, sprechen Multiplikator und Hysterese-Gefahr für rasches fiskalisches Handeln. Wer die Schwäche als Angebotsproblem deutet, wird dagegen Strukturreformen fordern. Die Bewertung hängt also wesentlich von der Diagnose der Output-Lücke ab.`},
 {id:"e5-2", pts:18, klausur:"Aufgabenblatt 5, Aufgabe 6",
  q:"In der Debatte um die Schuldenbremse heißt es, sie „schütze die Menschen vor Belastungen in der Zukunft“. Bewerten Sie diese Aussage mithilfe Ihres Wissens über das staatliche Haushaltsdefizit und die Schuldenstandquote.",
  k:[
   "Maßstab ist die Schuldenstandquote, nicht die absolute Schuld",
   "Schuldenmechanik D = d/g: Ein dauerhaftes Defizit ist bei Wachstum mit stabiler Quote vereinbar (3 %/5 % → 60 %)",
   "Pro: steigende Zinslast kann künftige Haushalte einengen",
   "Pro aus neoklassischer Sicht: Crowding-out, Ricardianische Äquivalenz",
   "Contra: Sparpolitik kann über den Multiplikator das Wachstum senken und die Quote erhöhen",
   "Contra: unterlassene Investitionen in Infrastruktur und Bildung belasten künftige Generationen ebenfalls",
   "Contra: Hysterese, eine verschleppte Krise senkt das Potenzial dauerhaft",
   "Contra: Staatsschulden sind zugleich Vermögen des Privatsektors; Defizit des Staates entspricht dem Überschusswunsch der Privaten",
   "Begründetes Fazit"],
  m:`Die Aussage unterstellt, dass staatliche Schulden künftige Generationen belasten. Entscheidend ist aber nicht die absolute Schuld, sondern die Schuldenstandquote. Nach der Schuldenmechanik D = d/g konvergiert sie gegen das Verhältnis von Defizitquote und nominalem Wachstum. Ein Defizit von 3 % bei 5 % Wachstum ergibt dauerhaft 60 %. Ein Staat kann also dauerhaft Defizite machen, ohne dass die Last relativ zur Wirtschaftsleistung steigt.

Für die Aussage spricht, dass eine hohe Quote die Zinslast erhöht und künftige Haushalte einengen kann. Aus neoklassischer Sicht verdrängen Staatsausgaben private Investitionen, und nach der Ricardianischen Äquivalenz bringen sie ohnehin wenig.

Dagegen spricht erstens, dass Sparpolitik in einer Schwächephase über den Multiplikator das BIP-Wachstum senkt; der Nenner schrumpft, und die Quote kann sogar steigen. Zweitens belasten auch unterlassene Investitionen in Infrastruktur, Bildung und Klimaschutz künftige Generationen. Drittens kann eine verschleppte Krise über Hysterese das Potenzial dauerhaft senken. Schließlich sind Staatsschulden zugleich Vermögen des privaten Sektors: Will dieser Überschüsse erzielen, muss ein anderer Sektor Defizite machen.

Fazit: Die Schuldenbremse kann vor einer unkontrollierten Zinslast schützen. Ob sie künftige Generationen insgesamt entlastet, hängt aber davon ab, wofür Kredite verwendet würden und ob Sparen in der Krise das Wachstum abwürgt. Pauschal lässt sich die Aussage aus Sicht der Vorlesung nicht halten.`}
]};

/* Rechenaufgaben pro Kapitel (Typen siehe TYPES) */
const CALC={5:["herl","mult","gg","dG","dT","di","klausur","bs","schuld"]};
