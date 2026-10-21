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
<p>Fallen Private und Ausland als Nachfrager aus, bleibt nur der Staat. Er hat zwei Hebel in der Nachfragegleichung <b>Y = C + I + G + (X − M)</b>: direkt mehr staatliche Nachfrage G, oder indirekt mehr C und I durch niedrigere Steuern und Abgaben beziehungsweise höhere Transfers und Subventionen.</p>
<p>In Deutschland ist dieser Gedanke seit dem <b>Stabilitäts- und Wachstumsgesetz von 1967</b> Gesetz. Nach § 1 sollen Bund und Länder bei ihrer Finanzpolitik das gesamtwirtschaftliche Gleichgewicht beachten. Es besteht aus dem <b>magischen Viereck</b>:</p>
<ul><li>hoher Beschäftigungsstand</li><li>stabiles Preisniveau</li><li>außenwirtschaftliches Gleichgewicht</li><li>angemessenes und stetiges Wirtschaftswachstum</li></ul>
<p>„Magisch“ heißt es, weil sich die vier Ziele kaum alle gleichzeitig erreichen lassen; zwischen ihnen gibt es Zielkonflikte.</p>
<div class="merk"><b>Merksatz</b>Mindestens soll die Finanzpolitik nicht prozyklisch wirken, also einen Abschwung nicht noch verstärken. Ideal ist antizyklische Politik: Sie gleicht die Schwankungen der übrigen Nachfrage aus, im Abschwung expansiv, im Boom restriktiv.</div>`,
check:[
 {q:"Die Wirtschaft ist im Abschwung, und der Staat kürzt seine Ausgaben. Wie heißt diese Politik?", o:["Antizyklisch","Prozyklisch","Automatische Stabilisierung","Neutral"], a:1, ex:"Sie verstärkt den Abschwung, weil die Nachfrage zusätzlich sinkt. Genau das soll die Finanzpolitik laut Stabilitätsgesetz mindestens vermeiden."},
 {q:"Was gehört nicht zum magischen Viereck?", o:["Hoher Beschäftigungsstand","Stabiles Preisniveau","Ausgeglichener Staatshaushalt","Außenwirtschaftliches Gleichgewicht"], a:2, ex:"Das vierte Ziel ist angemessenes und stetiges Wachstum. Ein ausgeglichener Haushalt ist kein Ziel des Vierecks."}
]},
{id:"5-2", t:"Instrumente und Kennzahlen der Fiskalpolitik", html:`
<p>Die Fiskalpolitik hat zwei Instrumente: die <b>Staatsausgaben G</b> und die <b>Einnahmen aus Steuern und Abgaben T</b> (bzw. den Steuersatz t).</p>
<div class="merk"><b>Wichtig fürs Modell</b>G ist nur die staatliche Nachfrage nach Konsum- und Investitionsgütern. Höhere Ausgaben für Arbeitslosenunterstützung oder Subventionen werden als <i>geringere Einnahmen T</i> verbucht, nicht als höheres G.</div>
<p>Der <b>Budgetsaldo</b> ist <b>BS = T − G</b>. Expansive Fiskalpolitik erhöht die Nachfrage durch Mehrausgaben oder Einnahmensenkungen, restriktive Fiskalpolitik bremst sie durch Steuererhöhungen oder Ausgabenkürzungen.</p>
<p><b>Automatische Stabilisatoren</b> wirken ohne politische Entscheidung: Steuereinnahmen und Teile der Ausgaben, etwa für Arbeitslose, hängen von der Konjunktur ab. Im Abschwung steigt das Defizit von selbst, im Aufschwung sinkt es. Davon zu unterscheiden ist <b>diskretionäre</b> Politik, also fallweise beschlossene Maßnahmen wie ein Konjunkturprogramm.</p>
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
 {q:"Welches Instrument wirkt als automatischer Stabilisator?", o:["Kindergeld","Bürgergeld","Energiepreispauschale","Erbschaftsteuer"], a:1, ex:"Die Ausgaben für Bürgergeld steigen im Abschwung von selbst, weil mehr Menschen arbeitslos werden. Kindergeld hängt nicht von der Konjunktur ab, die Energiepreispauschale wurde fallweise beschlossen, ist also diskretionär."},
 {q:"Der Staat zahlt mehr Arbeitslosengeld. Wie wird das im Modell verbucht?", o:["Als höheres G","Als geringeres T","Als höheres I","Gar nicht"], a:1, ex:"Transfers zählen nicht zur staatlichen Güternachfrage G. Sie verringern die Nettoeinnahmen T des Staates."}
]},
{id:"5-3", t:"Der Staatsausgabenmultiplikator", html:`
<p>Nimmt man den Staat ins Modell aus Kapitel 4 auf, lautet die gesamtwirtschaftliche Nachfrage</p>
<div class="eq">Y<sup>N</sup> = C + I + G = c₀ + c₁·Y + I + G</div>
<p>Mit dem Angebot Y<sup>A</sup> = Y und der Gleichgewichtsbedingung Y<sup>A</sup> = Y<sup>N</sup> folgt</p>
<div class="eq">Y* = 1/(1 − c₁) · (c₀ + I + G)</div>
<p>Der Faktor <b>1/(1 − c₁)</b> ist der Multiplikator. Er gibt an, um wie viel der Gleichgewichtsoutput steigt, wenn der Staat 1 Mrd. € mehr ausgibt. Er ist größer als 1, weil das zusätzliche Einkommen zum Teil wieder konsumiert wird. Daraus entsteht neues Einkommen, davon wird wieder ein Teil konsumiert, und so weiter.</p>
<p>Im Bild: Höhere Staatsausgaben verschieben die Nachfragegerade parallel um ΔG nach oben. Das neue Gleichgewicht B liegt auf der 45°-Linie weiter rechts. Bei c₁ = 0,5 ist der Multiplikator 2: ΔG = 1 lässt Y* von 5 auf 7 steigen.</p>
{{fig:g1}}
<div class="merk"><b>Merksatz</b>ΔY = 1/(1 − c₁) · ΔG. Je höher die marginale Konsumneigung c₁, desto größer der Multiplikator.</div>`,
check:[
 {q:"c₁ = 0,8. Der Staat erhöht seine Ausgaben um 2 Mrd. €. Um wie viel steigt Y*?", o:["2 Mrd. €","8 Mrd. €","10 Mrd. €","1,6 Mrd. €"], a:2, ex:"Multiplikator 1/(1 − 0,8) = 5, also ΔY = 5 · 2 = 10 Mrd. €."},
 {q:"Warum ist der Multiplikator größer als 1?", o:["Weil der Staat mehr ausgibt, als er einnimmt","Weil zusätzliches Einkommen teilweise wieder konsumiert wird","Weil die Preise steigen","Weil die Importe sinken"], a:1, ex:"Jede Ausgabe ist Einkommen für andere. Davon fließt der Anteil c₁ wieder in den Konsum und erzeugt weiteres Einkommen."}
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
 {q:"Welche Steuersenkung regt die Nachfrage am wenigsten an?", o:["Senkung der Mehrwertsteuer","Senkung des Spitzensteuersatzes","Senkung der Sozialabgaben für Geringverdiener","Alle wirken gleich"], a:1, ex:"Spitzenverdiener sparen einen großen Teil zusätzlichen Einkommens; ihre Konsumneigung ist niedrig. Die Entlastung fließt also nur zu einem kleinen Teil in die Nachfrage."},
 {q:"c₁ = 0,75. Wie groß ist der Steuermultiplikator (Betrag)?", o:["4","3","0,75","1"], a:1, ex:"c₁/(1 − c₁) = 0,75/0,25 = 3. Der Ausgabenmultiplikator wäre 4, die Differenz also 1."}
]},
{id:"5-5", t:"Die Dynamik der Staatsverschuldung", html:`
<p>Entscheidend ist nicht die absolute Schuld, sondern die <b>Schuldenstandquote</b>, also die Schuld im Verhältnis zum BIP. Mit</p>
<ul><li>d = Haushaltsdefizit in % des BIP</li><li>g = Wachstum des nominalen BIP</li><li>D = Schuldenstandquote</li></ul>
<p>gilt langfristig die Schuldenmechanik:</p>
<div class="eq">D = d / g</div>
<p>Wächst das BIP jedes Jahr um 5 % und macht der Staat jedes Jahr ein Defizit von 3 %, bleibt die Quote dauerhaft bei 60 %. Das ist die Logik der Grenzwerte im europäischen Stabilitäts- und Wachstumspakt. Ein dauerhaftes Defizit verträgt sich also mit einer stabilen Quote, solange die Wirtschaft wächst.</p>
<div class="merk"><b>Paradox</b>Ist der Fiskalmultiplikator hoch, kann eine restriktive Politik, die das Defizit senkt, die Schuldenstandquote sogar erhöhen. Sie drückt das BIP-Wachstum, und der Nenner schrumpft schneller als die Schulden. Im Beispiel der Vorlesung fällt d von 3 % auf 2 %, g aber von 5 % auf −1 %; die Quote steigt in sieben Jahren von 60 % auf über 75 %.</div>`,
check:[
 {q:"Das BIP wächst langfristig um 2 %, die Neuverschuldung beträgt 1 % des BIP. Wie hoch ist die langfristige Schuldenstandquote?", o:["2 %","50 %","200 %","20 %"], a:1, ex:"D = d/g = 0,01/0,02 = 0,5, also 50 %. Diese Aufgabe kam so in der Klausur 2024."},
 {q:"Wie kann Sparpolitik die Schuldenstandquote erhöhen?", o:["Durch höhere Zinsen","Indem sie über den Multiplikator das BIP-Wachstum senkt","Gar nicht, sie senkt sie immer","Durch Inflation"], a:1, ex:"Die Quote ist Schulden durch BIP. Sinkt das BIP-Wachstum stärker als das Defizit, steigt die Quote."}
]},
{id:"5-6", t:"Geldpolitik: der Zins als Hebel", html:`
<p>Bisher waren die Investitionen konstant. Jetzt hängen sie vom Zins ab:</p>
<div class="eq">I = d − n·i</div>
<ul><li><b>d</b>: zinsunabhängige Investitionen, das Niveau bei einem Zins von null</li>
<li><b>n</b>: wie stark die Investitionen auf den Zins reagieren</li></ul>
<p>Man stellt sich vor, alle Investitionsprojekte sind nach ihrer erwarteten Rendite sortiert. Je niedriger der Zins, desto mehr Projekte lohnen sich. Sinkt der Zins um einen Prozentpunkt, steigen die Investitionen um n Einheiten. Der Unterschied zwischen Nominal- und Realzins wird in diesem Kapitel vernachlässigt.</p>
<div class="eq">Y* = 1/(1 − c₁) · (c₀ + d − n·i)</div>
<p>Die Zentralbank kann den Zins (annahmegemäß perfekt) steuern. Im i/Y-Diagramm ist ihr Zins eine waagerechte <b>Zinslinie</b>. Die Kurve „gesamtwirtschaftliche Nachfrage = Angebot“ fällt: Je niedriger der Zins, desto höher der Output. Optimal ist ein Zins, bei dem sich beide beim Vollbeschäftigungsoutput Y<sub>V</sub> schneiden.</p>
<p>Ein <b>negativer Nachfrageschock</b> (c₀ oder d sinkt) verschiebt die Kurve nach links. Bleibt die Zentralbank beim alten Zins, landet die Wirtschaft im Unterbeschäftigungsgleichgewicht B. Senkt sie den Zins, etwa von 4 % auf 3,5 %, ist im Punkt C wieder Vollbeschäftigung erreicht.</p>
{{fig:g2}}`,
check:[
 {q:"Ein negativer Nachfrageschock trifft die Wirtschaft. Was sollte die Zentralbank tun, um die Output-Lücke zu schließen?", o:["Den Zins erhöhen","Den Zins senken","Den Zins unverändert lassen","Die Steuern senken"], a:1, ex:"Ein niedrigerer Zins regt die Investitionen an und verschiebt das Gleichgewicht zurück zum Vollbeschäftigungsoutput. Steuern sind Sache der Fiskalpolitik, nicht der Zentralbank."},
 {q:"In I = d − n·i ist n = 100. Der Zins sinkt von 0,05 auf 0,03. Wie ändern sich die Investitionen?", o:["Sie steigen um 2","Sie steigen um 200","Sie sinken um 2","Sie steigen um 0,02"], a:0, ex:"ΔI = −n·Δi = −100 · (−0,02) = +2."}
]},
{id:"5-7", t:"Grenzen der Geldpolitik", html:`
<p>Die Geldpolitik stößt an zwei Grenzen.</p>
<p><b>Nominalzinsfalle.</b> Die Investitionen hängen vom Realzins ab:</p>
<div class="eq">Realzins = Nominalzins − Inflationsrate</div>
<p>Hat die Zentralbank den Nominalzins schon auf null gesenkt, ist der Realzins womöglich immer noch zu hoch, um Vollbeschäftigung zu erreichen. Im Beispiel der Vorlesung müsste der Nominalzins auf −0,5 % fallen.</p>
<p><b>Investitionsfalle.</b> Sind die Erwartungen der Unternehmen („animal spirits“) am Boden, reagieren die Investitionen gar nicht mehr auf Zinssenkungen. Die gesamtwirtschaftliche Nachfragekurve verläuft dann <b>senkrecht</b>: Eine niedrigere Zinslinie ändert den Output nicht.</p>
{{fig:g3}}
<div class="merk"><b>Merksatz</b>In der Nominalzinsfalle und in der Investitionsfalle hilft nur noch expansive Fiskalpolitik. Sie verschiebt die Nachfragekurve nach rechts.</div>`,
check:[
 {q:"Wie verläuft die Nachfragekurve im i/Y-Diagramm in der Investitionsfalle?", o:["Waagerecht","Senkrecht","Steigend","Fallend wie immer"], a:1, ex:"Die Investitionen reagieren nicht auf den Zins, also ist der Output für jeden Zins gleich."},
 {q:"Nominalzins 0 %, Inflation −1 %. Wie hoch ist der Realzins?", o:["−1 %","0 %","1 %","2 %"], a:2, ex:"Realzins = 0 % − (−1 %) = 1 %. Bei Deflation kann der Realzins also trotz Nullzins positiv und zu hoch sein."}
]},
{id:"5-8", t:"Offene Volkswirtschaft: wenn alle exportieren wollen", html:`
<p>In der offenen Volkswirtschaft gilt Y<sup>N</sup> = C + I + G + (X − M). Bleibt die heimische Nachfrage C + I + G hinter dem Potenzial zurück, und will die Politik keine keynesianischen Instrumente einsetzen, etwa wegen der Schuldenbremse, liegt ein Ausweg nahe: Vollbeschäftigung über hohe <b>Nettoexporte</b>.</p>
<p>Das Problem: Die Welt als Ganzes ist eine geschlossene Volkswirtschaft. Die Nettoexporte aller Länder summieren sich immer zu <b>null</b>. Der Exportüberschuss des einen Landes ist das Leistungsbilanzdefizit eines anderen, das sich dafür verschulden muss.</p>
<div class="merk"><b>Merksatz</b>Verlassen sich alle Länder darauf, dass das Ausland genug Nachfrage für ihre Exporte bereitstellt, entsteht ein weltweiter Nachfragemangel mit Arbeitslosigkeit. Unterschiedliche Sichtweisen auf Geld- und Fiskalpolitik führen so zu internationalen Konflikten.</div>`,
check:[
 {q:"Was ergibt die Summe der Nettoexporte aller Länder der Welt?", o:["Sie ist positiv","Sie ist null","Sie ist negativ","Sie hängt vom Wechselkurs ab"], a:1, ex:"Jedem Export eines Landes steht ein Import eines anderen gegenüber. Die Welt ist eine geschlossene Volkswirtschaft."}
]},
{id:"5-9", t:"Die Kontroverse um Staatsdefizite", html:`
<p>Für den Essay brauchst du die Positionen der Denkschulen zur Fiskalpolitik. Das Skript stellt sie so gegenüber:</p>
<p><b>Neoklassisch.</b> Die Kapazitäten sind auf Dauer ausgelastet, der Finanzmarkt koordiniert Sparen und Investieren. Höhere Staatsausgaben verdrängen private Ausgaben (<b>Crowding-out</b>). Staatliche Defizite haben keine offensichtliche Berechtigung.</p>
<p><b>Neuklassik: Ricardianische Äquivalenz.</b> Rationale Haushalte erwarten, dass der Staat kreditfinanzierte Ausgaben später über höhere Steuern bezahlen muss. Sie sparen schon heute mehr. Der Multiplikator wird kleiner, im Extremfall null.</p>
<p><b>Keynesianisch.</b> Der private Sektor will oft über lange Zeit weniger ausgeben, als er einnimmt, also einen Finanzierungsüberschuss erzielen. Dann soll der Staat ein Defizit hinnehmen. Bei unterausgelasteten Kapazitäten entsteht über den Multiplikator <b>Crowding-in</b>: Staatsausgaben ziehen private Ausgaben nach. Ausgaben sind Steuersenkungen vorzuziehen.</p>
<p><b>Neuer Konsens.</b> Die Wirkung hängt davon ab, ob eine Konjunkturschwäche (Nachfrage) oder ein Angebotsproblem vorliegt. Die <b>Schuldenbremse</b> im Grundgesetz (seit 2009) begrenzt das strukturelle Defizit des Bundes auf 0,35 % des BIP; ein konjunkturelles Defizit ist erlaubt. Das Potenzial ist aber nicht beobachtbar. Wie groß die Output-Lücke ist und welcher Teil des Defizits als strukturell gilt, hängt deshalb von der Schätzung ab. Das Skript zeigt das am Beispiel Spaniens, wo die EU-Kommission fast das ganze Defizit als strukturell einstufte.</p>
<p><b>Hysterese.</b> Eine Konjunkturschwäche, die nicht bekämpft wird, kann zum strukturellen Problem werden: Langzeitarbeitslose verlieren Qualifikationen, Unternehmen stellen Investitionen zurück. Das betonen vor allem keynesianisch orientierte Ökonom:innen. Neoklassisch orientierte halten dagegen, Konjunkturpolitik könne Strukturschwächen verschleiern und nötige Reformen verschleppen.</p>`,
check:[
 {q:"Was besagt die Ricardianische Äquivalenz?", o:["Staatsausgaben wirken doppelt","Haushalte sparen heute mehr, weil sie künftige Steuererhöhungen erwarten","Steuern und Ausgaben haben denselben Multiplikator","Der Zins sinkt bei Defiziten"], a:1, ex:"Dadurch sinkt der Konsum, wenn G steigt, und der Multiplikator schrumpft bis im Extremfall auf null."},
 {q:"Welches Defizit begrenzt die Schuldenbremse des Bundes auf 0,35 % des BIP?", o:["Das tatsächliche Defizit","Das konjunkturelle Defizit","Das strukturelle Defizit","Die Schuldenstandquote"], a:2, ex:"Konjunkturell bedingte Defizite sind erlaubt. Gerade deshalb ist so umstritten, wie das Potenzial geschätzt wird."}
]}
]};

const CARDS={5:[
 {id:"c5-01", f:"Welche vier Ziele bilden das magische Viereck?", b:"Hoher Beschäftigungsstand, stabiles Preisniveau (geringe Inflation), außenwirtschaftliches Gleichgewicht (keine dauerhaften Überschüsse oder Defizite mit dem Ausland), angemessenes und stetiges Wachstum (Stabilitäts- und Wachstumsgesetz 1967)."},
 {id:"c5-02", f:"Warum heißt das Viereck „magisch“?", b:"Die vier Ziele (hoher Beschäftigungsstand, stabiles Preisniveau, außenwirtschaftliches Gleichgewicht, stetiges Wachstum) lassen sich kaum alle gleichzeitig erreichen, weil es Zielkonflikte gibt (z. B. kann Vollbeschäftigung die Inflation antreiben)."},
 {id:"c5-03", f:"Antizyklische vs. prozyklische Fiskalpolitik", b:"Antizyklisch: gleicht Schwankungen aus, im Abschwung expansiv (mehr ausgeben, Steuern senken), im Boom restriktiv (weniger ausgeben, Steuern erhöhen).\nProzyklisch: verstärkt den Konjunkturverlauf, etwa Kürzungen im Abschwung."},
 {id:"c5-04", f:"Budgetsaldo im Modell", b:"BS = T − G. Positiv = Überschuss, negativ = Defizit."},
 {id:"c5-05", f:"Wo werden Transfers wie Arbeitslosengeld im Modell verbucht?", b:"Als geringere Einnahmen T, nicht als höheres G. G ist nur die staatliche Nachfrage nach Konsum und Investitionen."},
 {id:"c5-06", f:"Automatischer Stabilisator: Definition und Beispiel", b:"Einnahmen oder Ausgaben, die ohne Beschluss mit der Konjunktur (dem Auf und Ab der Wirtschaft) schwanken und sie dämpfen. Beispiel: Bürgergeld bzw. Arbeitslosenunterstützung, Steuereinnahmen."},
 {id:"c5-07", f:"Diskretionäre Fiskalpolitik", b:"Fallweise politisch beschlossene Maßnahmen, etwa ein Konjunkturprogramm oder die Energiepreispauschale."},
 {id:"c5-08", f:"Warum ist die Staatsquote deutlich höher als G/BIP?", b:"Die Staatsquote umfasst alle Ausgaben des Staates, auch Transfers (z. B. Renten), Subventionen (Zuschüsse an Firmen) und Zinsen. G ist nur die Nachfrage nach Gütern und Dienstleistungen."},
 {id:"c5-09", f:"Staatsausgabenmultiplikator: Formel und Bedeutung", b:"1/(1 − c₁). Um so viel steigt Y*, wenn G um 1 steigt. Größer als 1, weil zusätzliches Einkommen teilweise wieder konsumiert wird."},
 {id:"c5-10", f:"Steuermultiplikator (Betrag)", b:"c₁/(1 − c₁). Gleichgewicht: Y* = 1/(1 − c₁) · (c₀ − c₁T + I + G)."},
 {id:"c5-11", f:"Warum ist der Ausgabenmultiplikator größer als der Steuermultiplikator?", b:"G geht voll in die Nachfrage ein. Eine Steuersenkung erhöht nur das verfügbare Einkommen, davon wird ein Teil (1 − c₁) gespart. Die Differenz beträgt genau 1."},
 {id:"c5-12", f:"Vier Gesichtspunkte bei der Wahl zwischen Mehrausgaben und Steuersenkung", b:"Zeitverzögerung, Zeithorizont (rücknehmbar?), Struktur der Ausgaben (konsumtiv wie Gehälter vs. investiv wie Brücken und Schulen), Steuerart (wen entlasten?)."},
 {id:"c5-13", f:"Welche Haushalte sollte eine Steuersenkung entlasten, damit sie stark wirkt?", b:"Haushalte mit hoher Konsumneigung, also vor allem untere Einkommensgruppen."},
 {id:"c5-14", f:"Schuldenmechanik: Formel und Beispiel", b:"D = d/g. Defizit 3 % und nominales Wachstum (inklusive Preissteigerung) 5 % ergeben langfristig eine Schuldenstandquote von 60 %."},
 {id:"c5-15", f:"Wie kann restriktive Fiskalpolitik die Schuldenstandquote erhöhen?", b:"Bei hohem Multiplikator senkt sie das BIP-Wachstum. Der Nenner der Quote (das BIP) schrumpft schneller als die Schulden."},
 {id:"c5-16", f:"I = d − n·i: Was bedeuten d und n?", b:"d: zinsunabhängige Investitionen (Niveau bei Zins null). n: Zinsreagibilität (wie empfindlich die Investitionen auf den Zins reagieren), um so viel steigen die Investitionen, wenn der Zins um einen Prozentpunkt sinkt."},
 {id:"c5-17", f:"Was bedeutet I = d − n·i für den Handlungsspielraum der Geldpolitik?", b:"Über den Zins kann die Zentralbank die Investitionen und damit Y* steuern. Je größer n, desto wirksamer. Bei n ≈ 0 (Investitionsfalle) ist sie machtlos."},
 {id:"c5-18", f:"Nominalzinsfalle", b:"Der Nominalzins ist schon bei null, aber der Realzins (Nominalzins − Inflation) ist noch zu hoch für Vollbeschäftigung. Nur Fiskalpolitik hilft."},
 {id:"c5-19", f:"Investitionsfalle", b:"Investitionen reagieren wegen pessimistischer Erwartungen nicht auf den Zins. Die Nachfragekurve im i/Y-Diagramm ist senkrecht. Nur Fiskalpolitik hilft."},
 {id:"c5-20", f:"Warum können nicht alle Länder Exportüberschüsse erzielen?", b:"Die Nettoexporte der Welt summieren sich zu null. Streben alle Überschüsse an, entsteht ein weltweiter Nachfragemangel mit Arbeitslosigkeit."},
 {id:"c5-21", f:"Crowding-out vs. Crowding-in", b:"Crowding-out (neoklassisch, volle Kapazitäten, also alle Maschinen und Arbeitskräfte ausgelastet): Staatsausgaben verdrängen private.\nCrowding-in (keynesianisch, unterausgelastet, also Kapazitäten stehen teilweise still): Staatsausgaben ziehen über den Multiplikator private Ausgaben nach."},
 {id:"c5-22", f:"Ricardianische Äquivalenz", b:"Rationale Haushalte erwarten künftige Steuererhöhungen und sparen schon heute mehr. Der Multiplikator sinkt, im Extremfall auf null (Neuklassik)."},
 {id:"c5-23", f:"Schuldenbremse: was ist begrenzt?", b:"Das strukturelle Defizit des Bundes (das Defizit, das auch bei normaler Konjunktur bliebe) auf 0,35 % des BIP. Konjunkturelle Defizite (durch einen Abschwung entstanden) sind erlaubt. Problem: Das Potenzial und damit die Output-Lücke sind nicht beobachtbar."},
 {id:"c5-24", f:"Hysterese", b:"Eine anhaltende Konjunkturschwäche senkt das Produktionspotenzial dauerhaft, etwa weil Langzeitarbeitslose Qualifikationen verlieren und Investitionen unterbleiben."},
 {id:"c5-25", f:"Grenzen der Geldpolitik und wie man sie auflöst", b:"Nominalzinsfalle (Zins schon bei null, aber real noch zu hoch) und Investitionsfalle (Investitionen reagieren nicht auf den Zins). Aufgelöst werden sie durch expansive Fiskalpolitik, die die Nachfragekurve nach rechts verschiebt."}
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
