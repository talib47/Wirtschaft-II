/* ================= Kapitel 1–4 ================= */
LESSONS[1]=[
{id:"1-1", t:"Mikro, Makro und drei Blickwinkel", html:`
<p>Die <b>Mikroökonomik</b> betrachtet einzelne Entscheidungsträger und ihre Entscheidungen: Wie viel arbeitet und spart ein Haushalt? Was und wie produziert ein Unternehmen? Welche Regeln setzt eine staatliche Organisation?</p>
<p>Die <b>Makroökonomik</b> betrachtet gesamtwirtschaftliche Aggregate, also die Sektoren private Haushalte, Unternehmen und Staat, und gesamtwirtschaftliche Entwicklungen: Wachstum, Inflation, CO₂-Emissionen, Exporte und Importe, Finanzkrisen, Arbeitslosigkeit, Einkommens- und Vermögensverteilung, Gewinne und Investitionen, Staatsverschuldung. Die Grenzen zwischen Mikro und Makro sind fließend.</p>
<p>Auf wen muss ich schauen, wenn ich Wirtschaft verstehen will? Drei Antworten:</p>
<table class="kv">
<tr><td>Individualismus</td><td>Eine Gesellschaft besteht nur aus Individuen. Jede Erklärung sozialer Fakten beruht auf der Erklärung individuellen Verhaltens (methodologischer Individualismus).</td></tr>
<tr><td>Holismus</td><td>Die Gesellschaft hat eigene, nicht auf Individuen reduzierbare Eigenschaften. Soziale Ganzheiten bestimmen das individuelle Verhalten.</td></tr>
<tr><td>Systemismus</td><td>Die Gesellschaft ist ein System aus sich wandelnden Subsystemen. Untersucht werden Aufbau, Umfeld, Struktur und die Mechanismen, die sie hervorbringen. Individuen werden nicht geleugnet, Systemdynamiken gelten aber als prägender.</td></tr></table>
<div class="merk"><b>Sozioökonomie</b>Die Vorlesung folgt einem sozioökonomischen Ansatz: wissenschaftlicher Realismus (Wirtschaft und Gesellschaft sind verbunden), Systemismus und Pluralismus, also die Vielfalt von Disziplinen, Theorien und Methoden.</div>`,
check:[
 {q:"Welche Größe ist typisch für die Makroökonomik?", o:["Die Kaufentscheidung eines Haushalts","Die Preissetzung eines Monopolisten","Die Inflationsrate","Der Lohn einer einzelnen Beschäftigten"], a:2, ex:"Die Inflation ist ein gesamtwirtschaftliches Aggregat. Die anderen Beispiele betreffen einzelne Akteure."},
 {q:"Was besagt der methodologische Individualismus?", o:["Soziale Ganzheiten bestimmen individuelles Verhalten","Jede Erklärung sozialer Fakten beruht auf individuellem Verhalten","Gesellschaft ist ein System aus Subsystemen","Wirtschaft ist von Gesellschaft getrennt"], a:1, ex:"Das ist die Grundlage der Neoklassik im weiteren Sinne."}
]},
{id:"1-2", t:"Die Paradigmen der Makroökonomik", html:`
<p>In der Vorlesung werden diese Denkschulen gegenübergestellt:</p>
<table class="kv">
<tr><td>Physiokraten</td><td>18. Jh., François Quesnay: Tableau Économique, Wirtschaftskreislauf in Analogie zum Blutkreislauf, Beziehungen zwischen Klassen.</td></tr>
<tr><td>Klassik</td><td>Adam Smith, David Ricardo, John Stuart Mill: Produktivität, Wachstum und Verteilung des Wohlstands zwischen Klassen (Arbeiter, Unternehmer, Rentiers).</td></tr>
<tr><td>Marxismus</td><td>Karl Marx: Wachstum und Verteilung, Ausbeutung, Krisen.</td></tr>
<tr><td>Neoklassik</td><td>19. Jh., Walras, Gossen, Marshall: homo oeconomicus, Individuen statt Klassen, Ziel Effizienz, angebotsbestimmtes Gleichgewicht, Laisser-faire.</td></tr>
<tr><td>Keynesianismus</td><td>John Maynard Keynes, 1936: Makroebene, Nachfrage bestimmt Produktion und Beschäftigung.</td></tr>
<tr><td>Neoklassische Synthese</td><td>1940–60: keynesianische Phänomene als Spezialfälle in neoklassischer Theorie („Bastard-Keynesianismus“).</td></tr>
<tr><td>Österreichische Schule</td><td>Friedrich August von Hayek: Gegenspieler von Keynes, libertäre Kritik, Begründung des Neoliberalismus.</td></tr>
<tr><td>Monetarismus und Neuklassik</td><td>1960–80, Milton Friedman, Robert Lucas: Selbstregelungskraft des Marktes, Ablehnung staatlicher Konjunktursteuerung, „neoklassische Gegenrevolution“ im Kontext der Stagflation.</td></tr>
<tr><td>Neukeynesianismus</td><td>Krugman, Stiglitz, Mankiw: „Neuer Konsens“, kurzfristig keynesianisch (Konjunkturpolitik), langfristig neoklassisch (Strukturpolitik).</td></tr>
<tr><td>Postkeynesianismus</td><td>Fundamentale Unsicherheit, Macht und Konflikt: Ökonomien als produktive, aber instabile Systeme.</td></tr></table>
<div class="merk"><b>Die Achse der Vorlesung</b>Neoklassik (19. Jh.) → Neukeynesianismus/Neuer Konsens (heute). Klassik/Marxismus (18./19. Jh.) und Keynesianismus (20. Jh.) → Postkeynesianismus (heute). Im Zentrum steht der Streit zwischen Neoklassik und Keynesianismus.</div>`,
check:[
 {q:"Welche Denkschule verbindet kurzfristig keynesianische mit langfristig neoklassischen Prinzipien?", o:["Monetarismus","Neukeynesianismus / Neuer Konsens","Physiokratie","Österreichische Schule"], a:1, ex:"Kurze Frist: Konjunkturpolitik. Lange Frist: Strukturpolitik. Das ist der heutige Mainstream."},
 {q:"Wer gilt als Gegenspieler von Keynes und Begründer des Neoliberalismus?", o:["Milton Friedman","Friedrich August von Hayek","Paul Samuelson","Michał Kalecki"], a:1, ex:"Hayek, Österreichische Schule. Friedman prägte später den Monetarismus."}
]},
{id:"1-3", t:"Wirtschaftsgeschichte im Zeitraffer", html:`
<p>Über Jahrtausende wuchs das BIP pro Kopf kaum. Mit der <b>Industriellen Revolution (ca. 1760–1850)</b> knickt die Kurve steil nach oben („history's hockey stick“). Die Vorlesung konzentriert sich auf das 19. bis 21. Jahrhundert:</p>
<table class="kv">
<tr><td>1860–1914</td><td>Erste Globalisierung: Goldstandard, internationaler Finanzmarkt, Laisser-faire und Minimalstaat, „100 Jahre Frieden“ (1815–1914).</td></tr>
<tr><td>1914–1945</td><td>Kriege und Krisen: Hyperinflation in Deutschland bis 1923, Weltwirtschaftskrise ab 1929 mit Deflation und Massenarbeitslosigkeit, Ende des Goldstandards, Keynesianismus.</td></tr>
<tr><td>1945–1975</td><td>Goldenes Zeitalter: Wohlfahrtsstaat und Kapitalismus, Vollbeschäftigung, sinkende Ungleichheit.</td></tr>
<tr><td>1970er</td><td>Ölpreisschocks und Stagflation (Inflation und Arbeitslosigkeit zugleich).</td></tr>
<tr><td>ab 1975</td><td>Zweite Globalisierung, neoliberale Epoche: Finanzialisierung, Outsourcing, Standortwettbewerb, steigende Ungleichheit.</td></tr>
<tr><td>2007–2008</td><td>Weltfinanzkrise: Bankenrettungen und Konjunkturprogramme, „Rückkehr des Staates“.</td></tr>
<tr><td>2010–2012</td><td>Krise der Europäischen Währungsunion, Austeritätspolitik.</td></tr></table>
<p>Und die herrschenden Paradigmen? Bis in die 1930er Jahre gab es eine pluralistische Phase, danach dominierte der (Neo-)Keynesianismus bis in die 1970er. Mit der Stagflation folgten Monetarismus und neoklassische Dominanz, später der Neukeynesianismus. Mit der Finanzkrise ist die neoklassische Dominanz an ein Ende gekommen.</p>
<div class="merk"><b>Wiederholungsfrage der Vorlesung</b>Die Nationalsozialisten kamen 1933 in einer Phase der <b>Deflation</b> und Massenarbeitslosigkeit an die Macht, nicht während der Hyperinflation 1923.</div>`,
check:[
 {q:"Was geschah 1929?", o:["Die Ölpreiskrise","Der Beginn der Weltwirtschaftskrise","Die Einführung des Euro","Das Ende von Bretton Woods"], a:1, ex:"Der Börsencrash 1929 leitete die Große Depression mit Deflation und Massenarbeitslosigkeit ein."},
 {q:"Welches Paradigma dominierte im „Goldenen Zeitalter“ 1945–1975?", o:["Monetarismus","Keynesianismus","Physiokratie","Neuklassik"], a:1, ex:"Nixon 1972: „We are all Keynesians now.“ Die Gegenrevolution kam erst mit der Stagflation."}
]},
{id:"1-4", t:"Ökonomik im Schulunterricht: Beutelsbacher Konsens", html:`
<p>Für dich als Lehrkraft besonders wichtig: Der <b>Beutelsbacher Konsens</b> (1976) setzt drei Grundsätze für politische Bildung.</p>
<ul><li><b>Überwältigungsverbot</b>: Schüler:innen dürfen nicht im Sinne erwünschter Meinungen überrumpelt und an einem selbstständigen Urteil gehindert werden. Hier verläuft die Grenze zur Indoktrination.</li>
<li><b>Kontroversitätsgebot</b>: Was in Wissenschaft und Politik kontrovers ist, muss auch im Unterricht kontrovers erscheinen.</li>
<li><b>Schülerorientierung</b>: Schüler:innen sollen eine politische Situation und ihre eigene Interessenlage analysieren und nach Wegen suchen können, sie in ihrem Sinne zu beeinflussen.</li></ul>
<p>Der Kernlehrplan Sozialwissenschaften (Sek. II, NRW) beschreibt als Leitbild mündige Staats- und Wirtschaftsbürger:innen mit umfassender sozialwissenschaftlicher Kompetenz. Schüler:innen sollen etwa den homo oeconomicus auf seine Tragfähigkeit hin bewerten und kontroverse Positionen zu staatlichen Eingriffen erörtern. Die Vorlesung deutet das als <b>sozioökonomisches</b>, nicht rein neoklassisches Leitbild.</p>
<p>Die Makro-Vorlesung deckt vor allem das <b>Inhaltsfeld 4 Wirtschaftspolitik</b> ab: Legitimation staatlichen Handelns (Kap. 1), Zielgrößen (Kap. 2), qualitatives Wachstum (Kap. 2), Konjunkturschwankungen (Kap. 2, 4), wirtschaftspolitische Konzeptionen (Kap. 3, 6, 7), Instrumente (Kap. 5–7).</p>`,
check:[
 {q:"Welcher Grundsatz verlangt, dass Kontroverses auch im Unterricht kontrovers erscheint?", o:["Überwältigungsverbot","Kontroversitätsgebot","Schülerorientierung","Neutralitätsgebot"], a:1, ex:"Fallen Standpunkte unter den Tisch, ist der Weg zur Indoktrination beschritten."}
]},
{id:"1-5", t:"Warum mehrere Paradigmen?", html:`
<p>Die Vorlesung stellt die Perspektiven verschiedener Paradigmen gegenüber, weil</p>
<ul><li>es gute wissenschaftstheoretische Gründe für <b>Pluralismus</b> gibt: Fallibilismus (Wissen kann falsch sein), Vielschichtigkeit sozialer Realität, rationale Theoriewahl,</li>
<li>der Beutelsbacher Konsens und der Kernlehrplan ein sozioökonomisches Leitbild vorgeben,</li>
<li>die Phase neoklassischer Dominanz mit den jüngeren Krisen (Finanz-, Euro-, ökologische, Ungleichheits-, Demokratiekrise) ein Ende gefunden hat.</li></ul>
<p>Im Zentrum steht das <b>keynesianische Modell</b>, weil Keynes als Begründer der modernen Makroökonomik gilt. Beleuchtet wird vor allem der Streit zwischen Neoklassik und Keynesianismus, weniger ausführlich auch die marxistische Ökonomik. Neuklassik und Neukeynesianismus gelten als heutige Erweiterungen der Neoklassik, der Postkeynesianismus als Erweiterung des Keynesianismus, der auch marxistische Elemente aufnimmt.</p>
<div class="merk"><b>Für den Essay</b>Teil III fragt immer nach „unterschiedlichen theoretischen Perspektiven“. Wer die Paradigmen sauber auseinanderhält, hat schon die halbe Gliederung.</div>`,
check:[
 {q:"Welche Strömung nimmt laut Vorlesung marxistische Elemente in einen keynesianischen Rahmen auf?", o:["Neukeynesianismus","Postkeynesianismus","Monetarismus","Neoklassische Synthese"], a:1, ex:"Etwa die Bedeutung der Verteilung zwischen Klassen für Nachfrage und Wachstum (Kalecki)."}
]}
];

LESSONS[2]=[
{id:"2-1", t:"Identitäten: keine schwarzen Löcher", html:`
<p>„Respect for identities is the first piece of wisdom that distinguishes economists … The second? Identities say nothing about causation.“ (James Tobin)</p>
<ul><li><b>Identitäten</b> sind Gleichungen, die immer gelten, unabhängig von der Theorie. Sie sind kaum mehr als Definitionen.</li>
<li>Wer sie nicht beachtet, erzählt Unsinn. Aber sie sagen <b>nichts über Kausalitäten</b>.</li>
<li>Eine Theorie ergänzt Identitäten um <b>Verhaltensgleichungen</b>, etwa die Konsumfunktion.</li></ul>
<div class="merk"><b>Binsenweisheit</b>Es gibt keine schwarzen Löcher: Alles kommt irgendwo her und geht irgendwo hin. Nicht alle können gleichzeitig weniger (oder mehr) ausgeben, als sie einnehmen. Die Kreditvergabe der einen ist die Neuverschuldung der anderen. Und die Summe der Geldvermögen aller ist immer null.</div>
<p><b>Stromgrößen</b> messen Transaktionen in einem Zeitraum (meist ein Jahr): BIP, Konsum, Investitionen, Exporte, Importe, Löhne, Kapitaleinkommen, Haushaltsdefizit.</p>
<p><b>Bestandsgrößen</b> messen Bestände zu einem Zeitpunkt: Vermögen der Haushalte, Unternehmensverschuldung, Staatsverschuldung, Wert des Kapitalstocks.</p>
<p>„Economics is the science of confusing stocks with flows“ (Kalecki). Bekannte Mischgrößen sind die Schuldenstandquote (Staatsschuld / BIP) und die Schuldenquote der Haushalte (Verschuldung / verfügbares Einkommen).</p>`,
check:[
 {q:"Welche Größe ist eine Bestandsgröße?", o:["Bruttoinlandsprodukt","Privater Konsum","Staatsverschuldung","Exportüberschuss"], a:2, ex:"Die Staatsschuld wird zu einem Zeitpunkt gemessen. Sie ist die Summe vergangener Defizite (Stromgrößen)."},
 {q:"Was sagen Identitäten über Kausalität?", o:["Sie legen die Wirkungsrichtung fest","Nichts","Sie gelten nur in der Neoklassik","Sie gelten nur langfristig"], a:1, ex:"Über die Kausalität streiten gerade die Paradigmen, etwa bei S = I."}
]},
{id:"2-2", t:"BIP: brutto, netto, nominal, real", html:`
<p>Es gibt drei Definitionen von Y:</p>
<ul><li><b>Y<sup>A</sup></b>: BIP als Marktwert aller im Inland innerhalb eines Jahres produzierten Güter und Dienstleistungen (Output)</li>
<li><b>Y<sup>N</sup></b>: BIP als gesamtwirtschaftliche Nachfrage nach im Inland produzierten Gütern</li>
<li><b>Y<sup>VT</sup></b>: Bruttonationaleinkommen, alle von Inländer:innen bezogenen Einkommen</li></ul>
<p><b>Brutto oder netto?</b> Zieht man die Abschreibungen (Wertverlust des Kapitalstocks durch Alterung) ab, erhält man Nettoinlandsprodukt bzw. Nettonationaleinkommen. Die Vorlesung nutzt das Bruttokonzept.</p>
<p><b>Nominal oder real?</b> Das nominale BIP ist das BIP zu laufenden Preisen, das reale BIP das BIP in Preisen eines Basisjahres. Es gilt ungefähr:</p>
<div class="eq">reales Wachstum ≈ nominales Wachstum − Inflation</div>
<p>Beispiel: nominal +4 %, Inflation 1 %, real also etwa +3 %. Faustregel: Bei 2 % realem Wachstum verdoppelt sich das reale BIP nach etwa 35 Jahren.</p>
<div class="merk"><b>Kritik am realen BIP</b>Vergleiche über lange Zeiträume sind heikel: Preise, Mengen und Qualität ändern sich, neue Produkte kommen hinzu, alte verschwinden, und die Digitalisierung erschwert die Messung (etwa beim Smartphone). Im Zahlenbeispiel der Vorlesung liefert dieselbe Datenlage je nach Methode 0,35 % oder 4,6 % Wachstum pro Jahr.</div>`,
check:[
 {q:"Das nominale BIP wächst um 5 %, die Inflation beträgt 2 %. Wie hoch ist das reale Wachstum ungefähr?", o:["7 %","3 %","2,5 %","10 %"], a:1, ex:"5 % − 2 % = 3 %."},
 {q:"Was ist der Unterschied zwischen brutto und netto?", o:["Steuern","Abschreibungen","Transfers","Importe"], a:1, ex:"Netto = brutto minus Abschreibungen."}
]},
{id:"2-3", t:"Die drei Seiten des BIP", html:`
<table class="kv">
<tr><td>Entstehung</td><td>Y<sup>A</sup> = (Y/H) · H: Produktivität mal gearbeitete Stunden</td></tr>
<tr><td>Verwendung</td><td>Y<sup>N</sup> = C + I + G + (X − M): Konsum, private Investitionen, staatliche Ausgaben für Güter und Dienstleistungen, Nettoexporte</td></tr>
<tr><td>Verteilung</td><td>funktional Y<sup>VT</sup> = W + Π, sektoral Y<sup>VT</sup> = Y<sub>HH</sub> + Y<sub>F</sub> + Y<sub>St</sub>, dazu die personelle Verteilung</td></tr></table>
<ul><li><b>Y<sub>HH</sub></b>: verfügbare Einkommen der Haushalte = Löhne + Kapitaleinkommen + Transfers − Steuern und Abgaben</li>
<li><b>Y<sub>F</sub></b>: verfügbare Einkommen der Unternehmen = einbehaltene Gewinne + Subventionen − Steuern und Abgaben</li>
<li><b>Y<sub>St</sub></b>: Einkommen des Staates = T − Z, Steuern und Abgaben minus Transfers und Subventionen</li></ul>
<div class="eq">Y<sup>A</sup> = Y<sup>N</sup> = Y<sup>VT</sup></div>
<p>Makroökonomisches Denken ist Denken in Kreisläufen: Die Produktion entsteht durch Arbeit, die Einkommen werden an Haushalte, Unternehmen und Staat verteilt, und sie werden für Konsum, Investitionen, Staatsnachfrage und Nettoexporte verwendet. Über Kausalitäten ist damit noch nichts gesagt.</p>
<p>Zahlenbeispiel aus dem Skript: C = 60, I = 13, G = 20, X − M = 7, also Y = 100. Die Einkommen: W = 55, Π = 45, bzw. Y<sub>HH</sub> = 67, Y<sub>F</sub> = 15, Y<sub>St</sub> = 18.</p>`,
check:[
 {q:"Y = 100, C = 60, I = 13, X − M = 7. Wie hoch ist G?", o:["13","20","27","33"], a:1, ex:"G = Y − C − I − (X − M) = 100 − 60 − 13 − 7 = 20."},
 {q:"Wie ist Y<sub>St</sub> definiert?", o:["Steuern","Staatsausgaben G","Steuern und Abgaben minus Transfers und Subventionen","Staatsschuld"], a:2, ex:"Transfers und Subventionen mindern das verfügbare Einkommen des Staates."}
]},
{id:"2-4", t:"Eine besonders wichtige Identität: S = I", html:`
<p>In einer geschlossenen Volkswirtschaft ohne Staat gilt Y<sup>N</sup> = C + I und Y<sup>VT</sup> = Y<sub>HH</sub> + Y<sub>F</sub>. Aus Y<sup>N</sup> = Y<sup>VT</sup> folgt</p>
<div class="eq">Y<sub>HH</sub> + Y<sub>F</sub> − C = I</div>
<p>Die nicht konsumierten Einkommen sind die Ersparnis S. Also gilt zwingend <b>S = I</b>: Die gesamtwirtschaftliche Ersparnis ist immer genau so groß wie die Investitionen. Eine Volkswirtschaft kann nur sparen, indem sie investiert.</p>
<p>Ein einzelner Haushalt kann dagegen sparen, ohne zu investieren, etwa auf dem Konto. Wollten aber alle nur noch Geld sparen und nichts konsumieren oder investieren, wäre Y = C + I = 0, also auch das Einkommen null, und gespart würde nichts.</p>
<div class="merk"><b>Die große Streitfrage</b>S = I ist eine Identität. Kontrovers ist die Kausalität: S → I (Neoklassik: Ersparnis finanziert über den Zins die Investitionen) oder I → S (Keynesianismus: Investitionen schaffen über das Einkommen die Ersparnis). „Sag mir, was du über die Kausalität von S = I denkst, und ich sage dir, was für ein Ökonom du bist.“</div>`,
check:[
 {q:"Welche Kausalität nimmt die keynesianische Theorie an?", o:["S → I","I → S","Keine","Beide gleichzeitig"], a:1, ex:"Investitionen erhöhen über den Multiplikator das Einkommen, und davon wird mehr gespart."}
]},
{id:"2-5", t:"Finanzierungssalden: Überschüsse gibt es nur paarweise", html:`
<p>In einer offenen Volkswirtschaft mit Staat folgt aus Y<sub>HH</sub> + Y<sub>F</sub> + Y<sub>St</sub> = C + I + G + (X − M):</p>
<div class="eq">(Y<sub>HH</sub> + Y<sub>F</sub> − C − I) + (Y<sub>St</sub> − G) + (M − X) = 0</div>
<p>Die <b>Finanzierungssalden</b> (Einnahmen minus Ausgaben) von Privatsektor, Staat und Ausland addieren sich in jeder Periode zu null. Dabei gilt X − M = Nettoexporte = Leistungsbilanz, wenn man internationale Einkommensströme vernachlässigt.</p>
<p>Beispiel aus dem Skript: Der Staat hat ein Defizit von 2 % des BIP, der Privatsektor einen Überschuss von 9 %. Dann muss das Ausland ein Defizit von 7 % haben: Das Inland hat einen Leistungsbilanzüberschuss von 7 %, das Ausland verschuldet sich beim Inland.</p>
<div class="merk"><b>Merksatz</b>Ist der Überschuss des Privatsektors größer als das Defizit des Staates, hat das Land einen Leistungsbilanzüberschuss. Nicht alle Wirtschaftssubjekte, nicht alle Länder können gleichzeitig Überschüsse erzielen. Die Leistungsbilanz der Erde ist immer null.</div>
<p>Für die Klausur heißt das: Kennst du zwei der drei Salden, kennst du den dritten. Etwa: Leistungsbilanz ausgeglichen, Privatsektor +5 % → Staat −5 %.</p>`,
check:[
 {q:"Land A hat eine ausgeglichene Leistungsbilanz, der Privatsektor einen Finanzierungsüberschuss von 5 % des BIP. Wie hoch ist der Saldo des Staates?", o:["+5 %","0 %","−5 %","−10 %"], a:2, ex:"FS_P + FS_St = X − M = 0, also FS_St = −5 %. So kam es in der Klausur 2024 (Zweittermin)."},
 {q:"Land A hat ein Leistungsbilanzdefizit von 7 %, der Staat einen ausgeglichenen Haushalt. Was gilt für den Privatsektor?", o:["Überschuss von 7 %","Defizit von 7 %","Ausgeglichen","Nicht bestimmbar"], a:1, ex:"FS_P = (X − M) − FS_St = −7 % − 0 = −7 %. Der Privatsektor verschuldet sich."}
]},
{id:"2-6", t:"Staatsverschuldung im Kreislauf", html:`
<p>Aus den Identitäten folgen einige logische Implikationen:</p>
<ul><li>Darf sich der Staat nicht verschulden (Schuldenbremse), kann der Privatsektor keine finanzielle Ersparnis bilden, es sei denn, das Ausland verschuldet sich.</li>
<li>Viele Sparer bevorzugen sichere Staatsanleihen, etwa für die Altersvorsorge.</li>
<li>Wünschen die Wähler:innen staatliche Leistungen, sind die nötigen Steuern aber nicht durchsetzbar, ist Verschuldung „der einfachere Weg“.</li>
<li><b>Generationengerechtigkeit?</b> Vererbt werden Staatsschulden <i>und</i> private Vermögen. Höhere Staatsschulden verschärfen allenfalls Verteilungskonflikte <i>innerhalb</i> der nächsten Generation: Künftige Steuerzahler:innen zahlen Zinsen an die Erben der heute Vermögenden.</li></ul>
<p>Die Schuldenmechanik D = d/g (Kapitel 5) zeigt: Bei 5 % nominalem Wachstum und 3 % Defizit bleibt die Schuldenstandquote dauerhaft bei 60 %, der Logik des Stabilitäts- und Wachstumspakts (SWP: Defizit nie über 3 %, Schuldenstand nie über 60 % des BIP).</p>`,
check:[
 {q:"Die Schuldenbremse verbietet dem Staat Defizite, das Ausland verschuldet sich nicht. Was folgt?", o:["Der Privatsektor kann trotzdem Geldvermögen aufbauen","Der Privatsektor kann insgesamt keine finanziellen Überschüsse bilden","Die Investitionen steigen automatisch","Die Schuldenstandquote steigt"], a:1, ex:"FS_P + FS_St + FS_AL = 0. Sind FS_St und FS_AL null, ist auch FS_P null."}
]},
{id:"2-7", t:"Die Eurokrise mit der VGR gelesen", html:`
<p>Vor 2007 erfüllten die Krisenstaaten Portugal, Irland, Griechenland und Spanien (außer Griechenland) weitgehend die Vorgaben des SWP. Spaniens Staatsschuld fiel von über 60 % (1999) auf unter 40 % des BIP (2007), Irlands von knapp 50 % auf unter 30 %. Deutschlands Quote stieg im selben Zeitraum auf über 60 %. Die EU-Kommission lobte 2007 Spanien und Irland als Vorbilder und hielt Deutschland für riskant.</p>
<p>Das eigentliche Problem waren die <b>Leistungsbilanzen</b>: hohe Defizite in den Krisenstaaten, hohe Überschüsse in Deutschland. Bei kleinen Staatsdefiziten und großen Leistungsbilanzdefiziten musste sich nach der Salden-Identität der <b>Privatsektor</b> verschulden.</p>
<p>Nach 2007 platzten die privaten Kreditblasen. Die Staatsschulden stiegen rasant, weil die Staaten die Schulden maroder Banken übernahmen (Bestände) und die Steuereinnahmen in der Rezession einbrachen (Ströme).</p>
<div class="merk"><b>Fazit der Vorlesung</b>Steigende Staatsverschuldung war Folge, nicht Ursache der Eurokrise. Der Privatsektor der Krisenstaaten lebte „über seine Verhältnisse“, und das heißt zwingend: Andere lebten „unter ihren Verhältnissen“. Der deutsche Privatsektor baut jedes Jahr mehr Vermögen auf, als sich der deutsche Staat neu verschuldet, also auch gegenüber dem Ausland. Wenn das Bild überhaupt taugt, misst die Leistungsbilanz, ob ein Land insgesamt über oder unter seinen Verhältnissen lebt.</div>`,
check:[
 {q:"Was ist laut Vorlesung die Rolle der Staatsverschuldung in der Eurokrise?", o:["Hauptursache","Folge der Krise","Unbedeutend","Folge zu hoher Exporte der Krisenstaaten"], a:1, ex:"Bankenrettungen und wegbrechende Steuereinnahmen ließen die Schulden erst nach 2007 steigen."}
]},
{id:"2-8", t:"Arbeit, Produktivität und Beschäftigung", html:`
<p>Die Entstehungsseite lässt sich tautologisch erweitern:</p>
<div class="eq">Y<sup>A</sup> = (Y/H) · (H/E) · (E/L) · (L/WAP) · (WAP/POP) · POP</div>
<ul><li>Y/H: Produktivität je Arbeitsstunde</li><li>H/E: Stunden je erwerbstätiger Person</li><li>E/L: Erwerbstätige als Anteil an den Erwerbspersonen</li><li>L/WAP: Erwerbspersonen als Anteil der Bevölkerung im erwerbsfähigen Alter</li><li>WAP/POP: Anteil der erwerbsfähigen Bevölkerung an der Gesamtbevölkerung</li></ul>
<p>Steigt die Produktivität, kann rein rechnerisch die Produktion steigen, die Arbeitszeit je Person sinken, die Beschäftigungsquote sinken (Arbeitslosigkeit), die Erwerbsbeteiligung sinken oder das Renteneintrittsalter sinken. Welche Folge eintritt, ist nicht festgelegt.</p>
<table class="kv">
<tr><td>Erwerbstätige</td><td>mindestens eine Stunde pro Woche gegen Entgelt tätig</td></tr>
<tr><td>Erwerbspersonen</td><td>Erwerbstätige + Arbeitslose</td></tr>
<tr><td>Arbeitslose (BA)</td><td>vorübergehend ohne Beschäftigung, suchen versicherungspflichtige Arbeit, bei der Agentur gemeldet</td></tr>
<tr><td>Erwerbslose (ILO)</td><td>nicht erwerbstätig, in den letzten vier Wochen aktiv gesucht, binnen zwei Wochen verfügbar</td></tr>
<tr><td>Stille Reserve</td><td>Arbeitswunsch, aber nicht verfügbar oder Suche aufgegeben</td></tr></table>`,
check:[
 {q:"Die Produktivität steigt um 2 %, die Produktion bleibt konstant. Was muss rechnerisch sinken?", o:["Die Preise","Das Arbeitsvolumen","Die Importe","Die Ersparnis"], a:1, ex:"Y = (Y/H) · H. Bei konstantem Y und höherem Y/H sinkt H, etwa über kürzere Arbeitszeiten oder Arbeitslosigkeit."}
]},
{id:"2-9", t:"Drei Gesichter der Verteilung", html:`
<ul><li><b>Funktionale Verteilung</b>: Y<sup>VT</sup> = W + Π, etwa die Lohnquote W/Y</li>
<li><b>Sektorale Verteilung</b>: Y<sup>VT</sup> = Y<sub>HH</sub> + Y<sub>F</sub> + Y<sub>St</sub></li>
<li><b>Personelle Verteilung</b>: Wie sind die Haushaltseinkommen verteilt? Gini-Koeffizient, 90:10-Verhältnis, Anteil der Top-Einkommen (Piketty, auf Basis von Steuerdaten)</li></ul>
<p>In Deutschland steigt die Lohnquote seit der Finanzkrise wieder, der Anteil der verfügbaren Haushaltseinkommen am Gesamteinkommen fällt aber weiter: Unternehmen und Staat steigern ihre Anteile zu Lasten der Haushalte. Ungleichheit geht also nicht eindeutig aus jeder Verteilungsrechnung hervor.</p>
<p><b>Vermögen</b> sind viel ungleicher verteilt als Einkommen, unter anderem wegen Erbschaften, höherer Sparquoten und Renditen oben. Befragungen wie das SOEP unterschätzen den oberen Rand, und ohne Vermögensteuer fehlen in Deutschland Steuerdaten.</p>
<div class="merk"><b>USA und Deutschland</b>US-Haushalte arbeiten mehr, sind konsumorientierter und stärker verschuldet, ihre Einkommen sind ungleicher verteilt. In Deutschland sind die Finanzierungssalden von Haushalten und Unternehmen (seit etwa 2010 auch des Staates) positiv, in den USA ist der Staatssaldo durchweg negativ.</div>`,
check:[
 {q:"Was beschreibt die funktionale Einkommensverteilung?", o:["Verteilung auf arme und reiche Haushalte","Verteilung auf Löhne und Gewinne","Verteilung auf Haushalte, Firmen, Staat","Verteilung der Vermögen"], a:1, ex:"Y = W + Π. Die sektorale Verteilung betrachtet Y_HH, Y_F und Y_St."}
]},
{id:"2-10", t:"VGR und Klimaziele", html:`
<p>Die CO₂-Emissionen lassen sich zerlegen:</p>
<div class="eq">CO₂ = (CO₂/Y) · Y = (CO₂/Y) · (Y/H) · (H/E) · E</div>
<ul><li><b>Weg 1, Green Growth / Decoupling</b>: die CO₂-Intensität der Produktion durch Innovation und saubere Investitionen senken, Wachstum bleibt möglich.</li>
<li><b>Weg 2, Degrowth</b>: weniger Produktion, etwa durch Arbeitszeitverkürzung (H/E sinkt) als Beitrag zum Klimaschutz.</li></ul>
<p><b>CO₂-Budgets</b>: Nach dem Weltklimarat blieben ab 2020 etwa 500 Gt CO₂ für das 1,5-Grad-Ziel (50 % Wahrscheinlichkeit). Bei 40 Gt pro Jahr reicht das 12,5 Jahre. Bei linearer Absenkung auf null verdoppelt sich die Zeit auf 25 Jahre, also Klimaneutralität bis Ende 2045.</p>
<div class="merk"><b>Zieljahre täuschen</b>Ein Zieljahr für Klimaneutralität sagt wenig. Je später die Absenkung beginnt, desto früher muss die Neutralität erreicht sein, um das Budget einzuhalten. Entscheidend ist die Fläche unter der Emissionskurve.</div>`,
check:[
 {q:"Es bleiben 500 Gt CO₂, jährlich werden 40 Gt ausgestoßen. Wie lange reicht das Budget bei linearer Absenkung auf null?", o:["12,5 Jahre","25 Jahre","40 Jahre","50 Jahre"], a:1, ex:"Die Fläche eines Dreiecks ist halb so groß wie die eines Rechtecks: 2 · 12,5 = 25 Jahre."}
]}
];

LESSONS[3]=[
{id:"3-1", t:"Kritik am BIP aus Sicht der Paradigmen", html:`
<p>Alle Paradigmen sind mit der VGR auf ihre Weise unzufrieden. Diese Tabelle ist klausurrelevant (Teil I, 3 Punkte):</p>
<table class="kv">
<tr><td>Neoklassisch</td><td>Das BIP sollte ein Wohlfahrtsmaß sein. Aber Externalitäten fehlen weitgehend, etwa erhöhen Ausgaben zur Beseitigung von Umweltschäden das BIP. Preise aus unvollständiger Konkurrenz überschätzen die Wohlfahrt.</td></tr>
<tr><td>Keynesianisch</td><td>Das BIP sollte die beschäftigungswirksame Nachfrage messen. Aber es enthält Komponenten ohne echte Geldausgaben: imputierte Mieten für selbst genutztes Wohneigentum, impliziten Konsum von Finanzdienstleistungen. In den USA steigen so mit den Mieten der private Konsum und das BIP, ohne dass mehr Beschäftigung entsteht.</td></tr>
<tr><td>Klassisch/marxistisch</td><td>Das BIP sollte die Verteilung zwischen Klassen zeigen. Aber der Finanzsektor ist unproduktiv, er verschiebt nur Werte. Kapitaleinkommen sind leistungslose Renten, keine Faktoreinkommen.</td></tr>
<tr><td>Evolutionär-institutionell</td><td>Wohlfahrtsmaß, aber positionaler Konsum (Statusgüter) wird wie anderer Konsum behandelt, obwohl er im Aggregat die Wohlfahrt nicht erhöht.</td></tr>
<tr><td>Feministisch</td><td>Das BIP sollte die gesamte ökonomische Arbeit erfassen. Aber unbezahlte Arbeit (Sorgearbeit) fehlt. Warum tut man so, als zahlten sich Eigentümer Miete, aber niemand Lohn für Kinderbetreuung? „Wer hat Adam Smith sein Abendessen gekocht?“ Frauen leisten mehr unbezahlte Arbeit und insgesamt mehr Arbeit als Männer.</td></tr>
<tr><td>Ökologisch</td><td>Die Einbettung der Ökonomie ins Ökosystem fehlt. Energieintensiver Luxuskonsum zählt genauso wie die Befriedigung von Grundbedürfnissen.</td></tr></table>
<div class="merk"><b>Aufbau einer 3-Punkte-Antwort</b>Was soll das BIP aus dieser Sicht messen? Was misst es stattdessen falsch oder gar nicht? Ein konkretes Beispiel.</div>`,
check:[
 {q:"Welche BIP-Kritik ist keynesianisch?", o:["Unbezahlte Sorgearbeit fehlt","Imputierte Mieten sind keine beschäftigungswirksame Nachfrage","Der Finanzsektor ist unproduktiv","Externalitäten fehlen"], a:1, ex:"Keynesianisch soll das BIP die beschäftigungswirksame Nachfrage messen."},
 {q:"Welche Kritik äußert die feministische Ökonomik?", o:["Positionaler Konsum","Unbezahlte Arbeit bleibt unberücksichtigt","Monopolpreise","Imputierte Mieten"], a:1, ex:"Dazu: Bei Sorgearbeit sind Produktivität und Produktivitätsfortschritt kaum messbar."}
]},
{id:"3-2", t:"Neoklassik: Das Angebot schafft seine Nachfrage", html:`
<p>Das <b>Saysche Gesetz</b>: „Das Angebot schafft sich seine eigene Nachfrage.“ Die Logik in der geschlossenen Volkswirtschaft ohne Staat:</p>
<ol style="padding-left:1.2em"><li>Zuerst wird auf dem <b>Arbeitsmarkt</b> bestimmt, wie viel gearbeitet wird. Mit der Produktivität ergibt sich Y<sup>A</sup> = (Y/H) · H.</li>
<li>Dabei entstehen Einkommen W + Π. Ob sie bei Haushalten oder Unternehmen landen, ist egal, denn die Unternehmen gehören letztlich den Haushalten.</li>
<li>Die Einkommen werden konsumiert oder gespart: Y = C + S.</li>
<li>Konsum ist direkt Nachfrage. Ersparnis senkt über den <b>Zinsmechanismus</b> den Zins und erhöht die Investitionen: <b>S → I</b>.</li></ol>
{{fig:g3b}}
<p><b>Hierarchie der Märkte</b>: Der Arbeitsmarkt ist strategisch vorrangig, der Finanzmarkt koordiniert Sparen und Investieren, der Gütermarkt ist passiv. Preise koordinieren alles: der Reallohn den Arbeitsmarkt, der Zins den Kapitalmarkt, die Güterpreise den Gütermarkt.</p>
<p><b>Arbeitslosigkeit</b> entsteht auf dem Arbeitsmarkt: Ist der Lohn zu hoch, etwa durch einen Mindestlohn oder Gewerkschaftsmacht, übersteigt das Arbeitsangebot die Arbeitsnachfrage.</p>
{{fig:g3a}}
<div class="merk"><b>Grundprinzipien</b>Mikro-Makro-Analogien: Heutiger Konsum geht zu Lasten heutiger Ersparnis und damit künftigen Konsums. Höhere Löhne führen zu mehr Arbeitslosigkeit. Der Staat soll sich aus Güter- und Arbeitsmarkt weitgehend heraushalten. Zentrales Merkmal: Knappheit, zentrales Ziel: Effizienz.</div>`,
check:[
 {q:"Wie wird in der Neoklassik verhindert, dass Ersparnis zu einem Nachfrageausfall führt?", o:["Durch Staatsausgaben","Durch den Zinsmechanismus auf dem Kapitalmarkt","Durch Exporte","Gar nicht"], a:1, ex:"Mehr Ersparnis senkt den Zins, mehr Investitionen werden rentabel, bis I = S."},
 {q:"Wo entsteht Arbeitslosigkeit im einfachen neoklassischen Modell?", o:["Auf dem Gütermarkt","Auf dem Arbeitsmarkt durch zu hohe Löhne","Auf dem Kapitalmarkt","Im Ausland"], a:1, ex:"Ein Lohn über dem Gleichgewichtslohn erzeugt ein Überangebot an Arbeit."}
]},
{id:"3-3", t:"Neoklassik mit Staat und Ausland: Crowding-out", html:`
<p>Mit Staat gilt Y − C − G<sub>C</sub> = I<sub>P</sub> + G<sub>I</sub>, also wieder S = I. Neoklassisch ist Y durch die Angebotsseite vorgegeben. Höhere Staatsausgaben müssen deshalb privaten Konsum oder private Investitionen <b>verdrängen</b> (Crowding-out).</p>
<p>Zahlenbeispiel der Vorlesung: BIP 100. Privatsektor: Einkommen 80, Konsum 60, Investitionen 10. Staat: Einkommen 20, Konsum 25, Investitionen 5. Gesamtersparnis 20 − 5 = 15 = Investitionen 10 + 5. Der Staat hat ein Defizit von 10, der Privatsektor einen Überschuss von 10.</p>
<p>Senkt der Staat seinen Konsum von 25 auf 17,5 und erhöht seine Investitionen auf 7,5, können die privaten Investitionen auf 15 steigen. Die Ersparnis und die Investitionen steigen auf 22,5. Das BIP bleibt 100, legt aber die Grundlage für künftige Produktivität.</p>
<p><b>Leistungsbilanz</b>: Exportüberschüsse sind neoklassisch ein mögliches Gleichgewicht, das die Präferenzen der Individuen spiegelt, etwa Vorsorge für den demografischen Wandel durch Auslandsvermögen oder rentablere Investitionen im Ausland. So argumentiert Michael Hüther: „Wenn Deutschland spart, schafft es Potenzial für Investitionen in anderen Ländern.“ Kritisiert werden eher Defizitländer, die Kapitalimporte für Konsum statt für produktive Investitionen nutzen.</p>
<div class="merk"><b>Sozialphilosophie der Neoklassik</b>Einkommen entsprechen bei vollständiger Konkurrenz der Grenzproduktivität. Staatliche Aktivität verdrängt private. Freihandel steigert die Wohlfahrt (komparative Vorteile). Individuelle Freiheit ist das höchste Ziel.</div>`,
check:[
 {q:"Warum verdrängen Staatsausgaben neoklassisch private Ausgaben?", o:["Weil die Zinsen sinken","Weil Y angebotsseitig vorgegeben ist","Weil der Multiplikator größer als 1 ist","Weil die Exporte steigen"], a:1, ex:"Bei voll ausgelasteten Kapazitäten geht jede zusätzliche Ausgabe zu Lasten einer anderen."}
]},
{id:"3-4", t:"Keynes: Die Nachfrage bestimmt die Produktion", html:`
<p><b>Kontext</b>: 1883 geboren (Marx' Todesjahr), Diplomat in Versailles 1919, 1929 Weltwirtschaftskrise mit Massenarbeitslosigkeit trotz deregulierter Märkte, 1936 die „Allgemeine Theorie“, 1944 Architekt von Bretton Woods, 1946 gestorben. Nixon 1972: „We are all Keynesians now.“ 2008/09: „The return of the Master“.</p>
<p><b>Prinzip der effektiven Nachfrage</b>: Der Kapitalmarkt versagt bei der Umwandlung von S in I. Die Investitionen hängen von den <b>animal spirits</b> der Unternehmen ab, also von Instinkten, Emotionen und Herdenverhalten. Zuerst ergibt sich die Nachfrage C + I, das Angebot passt sich an, Beschäftigung und Einkommen folgen. Höheres I führt zu höherem Y und damit zu höherem S: <b>I → S</b>.</p>
<p><b>Sparparadox</b>: Wollen alle mehr sparen, sinkt die Nachfrage, wenn die Unternehmen nicht mehr investieren. Über den Multiplikator fallen die Einkommen, und gespart wird am Ende nicht mehr. Keynes' Restaurant-Beispiel: Ein Wirt, dessen Gäste wegbleiben, vergrößert nicht sein Restaurant, sondern verkleinert es eher.</p>
<p><b>Kostenparadox</b> (Kalecki): Erhöhen alle Unternehmen die Löhne, steigt der Konsum der Arbeitnehmer:innen, und durch den Nachfragezuwachs fällt die Arbeitslosigkeit.</p>
<p><b>Geld</b>: Neoklassisch ist Geld ein „Schleier“ über einer realen Tauschwirtschaft. Bei Keynes ist die Wirtschaft eine <b>monetäre Produktionswirtschaft</b>: Geld kann nachgefragt werden, ohne dass Produktion und Beschäftigung entstehen. Daraus folgt fundamentale Unsicherheit. Unregulierte Finanzmärkte verstärken sie.</p>
<div class="merk"><b>Arbeitsmarkt bei Keynes</b>Bei Arbeitslosigkeit ist der Reallohn zwar „zu hoch“, aber nicht wegen überzogener Lohnforderungen, sondern wegen zu geringer Güternachfrage. Die Ursache keynesianischer Arbeitslosigkeit liegt auf dem Gütermarkt.</div>`,
check:[
 {q:"Was beschreibt das Sparparadox?", o:["Sparen erhöht immer das Wachstum","Wenn alle mehr sparen wollen, sinken die Einkommen und gespart wird nicht mehr","Der Staat soll sparen","Sparen senkt den Zins"], a:1, ex:"Individuell rational, gesamtwirtschaftlich kontraproduktiv."},
 {q:"Was sind animal spirits?", o:["Rationale Erwartungen","Irrationale Elemente wie Instinkte, Emotionen und Herdenverhalten","Staatliche Investitionen","Zinserwartungen der Zentralbank"], a:1, ex:"Sie bestimmen die Investitionen, nicht die vorhandene Ersparnis."}
]},
{id:"3-5", t:"Keynesianisch mit Staat und Ausland: Crowding-in", html:`
<p>Im keynesianischen Fall der Nachfrageschwäche kann der Staat Ausgaben erhöhen, ohne dass andere Ausgaben fallen müssen. Zahlenbeispiel der Vorlesung: Der Staat erhöht seine Investitionen von 5 auf 10. Haushalte und Unternehmen reagieren mit mehr Konsum (60 → 62,5) und mehr Investitionen (10 → 12,5). Das BIP steigt von 100 auf 110, der Multiplikator ist 2 (<b>Crowding-in</b>). Ersparnis und Investitionen steigen auf 22,5. Das Staatsdefizit steigt auf 15, der private Überschuss ebenso.</p>
<p>Keynesianer:innen hoffen zusätzlich, dass sich höhere Staatsausgaben zum Teil selbst finanzieren, weil mit den Einkommen die Steuereinnahmen steigen.</p>
<p><b>Leistungsbilanz</b>: Hohe Exportüberschüsse gelten als Zeichen zu geringer Binnennachfrage. Überschussländer halten ihre Arbeitslosigkeit nur niedrig, weil andere Länder ihre Produkte teils kreditfinanziert importieren. Typische Forderung (etwa Thomas Fricke): die Binnennachfrage stärken, notfalls mit Staatsdefiziten. Streben alle Länder Überschüsse an, droht eine weltweite Nachfrageschwäche. Handlungsbedarf besteht bei hohen Defiziten <i>und</i> bei hohen Überschüssen.</p>
<div class="merk"><b>Sozialphilosophie von Keynes</b>Relativ gleichmäßige Einkommensverteilung (genug Konsumnachfrage ohne Überschuldung). Starker öffentlicher Sektor und regulierte Finanzmärkte. Internationale Kooperation und Sanktionierung von Exportüberschüssen. Langfristige Überwindung der Knappheit: In „Wirtschaftliche Möglichkeiten für unsere Enkelkinder“ (1930) erwartete Keynes, dass drei Stunden Arbeit am Tag genügen würden. In neoklassischer Sprache: Langfristig dominiert der Einkommenseffekt den Substitutionseffekt, das Arbeitsangebot sinkt.</div>`,
check:[
 {q:"Der Staat erhöht seine Ausgaben um 5, das BIP steigt um 10. Wie groß ist der Multiplikator?", o:["0,5","1","2","5"], a:2, ex:"ΔY/ΔG = 10/5 = 2. Private Ausgaben steigen mit: Crowding-in."},
 {q:"Wie deuten Keynesianer:innen hohe Exportüberschüsse?", o:["Als Zeichen von Wettbewerbsstärke ohne Probleme","Als Zeichen zu geringer Binnennachfrage","Als Gleichgewicht der Präferenzen","Als Folge zu hoher Löhne"], a:1, ex:"Die Nachfrageschwäche wird ins Ausland verlagert, das sich dafür verschuldet."}
]},
{id:"3-6", t:"Klassik und Marx: Klassen, Mehrwert, Krise", html:`
<p><b>Klassik</b>: Smith (Arbeitsteilung, Fortschritt), Ricardo (Verteilung, Stagnation), Malthus (Bevölkerung, Stagnation), Marx (Ausbeutung, Krise). Gemeinsam sind ihnen die Analyse von <b>Klassen</b> statt Individuen, die <b>Arbeitswertlehre</b> (der Wert einer Ware bemisst sich an der nötigen Arbeitszeit) und die Theorie der <b>Rente</b> als leistungslosem Einkommen.</p>
<p><b>Marx</b>: Arbeiter:innen haben ihre unabhängige Existenzgrundlage verloren und müssen ihre Arbeitskraft verkaufen. Sie arbeiten länger, als zur Produktion ihres Lohns nötig wäre. Den <b>Mehrwert</b> eignen sich die Kapitalist:innen an und investieren ihn (Akkumulation). Der Widerspruch: Mechanisierung verdrängt die Arbeit, die Quelle der Profite. Steigt die Produktivität bei Subsistenzlöhnen immer weiter, drohen <b>Absatzkrisen</b> (Überproduktion).</p>
<p><b>Entfremdung</b>: Die Arbeiter:innen besitzen die Produktionsmittel nicht, der Überschuss wird ihnen genommen. <b>Warenfetisch</b>: Wie ein menschengemachter Gott seinen Schöpfer beherrscht, erscheinen den Produzent:innen die von ihnen produzierten Waren als fremde Macht.</p>
<p><b>Kreislauf mit zwei Klassen</b>: Arbeiter:innen konsumieren ihren ganzen Lohn (W = C), Kapitalist:innen investieren ihren ganzen Gewinn (Π = I). Aus Y = W + Π = C + S folgt Π = S. Zahlen: Y = 200, C = W = 150, I = Π = S = 50. Die Investitionen sind Ausdruck der Ausbeutung.</p>
<p><b>Drei Klassen nach Ricardo</b>: Rentiers erhalten die Rente R und konsumieren sie. Y = 200, W = 150, R = 25, Π = I = S = 25. Steigt die Pacht auf 35, müssen bei gegebener Produktion die Investitionen auf 15 fallen. Ricardos Folgerung: Politik für die Kapitalisten, gegen die Großgrundbesitzer.</p>
<div class="merk"><b>Sozialphilosophie des Marxismus</b>Der Kapitalismus führt zu wachsender Ungleichheit, der Staat kann seine Widersprüche nicht beheben, erst die Vergesellschaftung der Produktionsmittel. Exporte und Expansion als Versuch, Absatzkrisen zu überwinden („Imperialismus“, Lenin; „Landnahme“, Rosa Luxemburg). Ziel: das „Reich der Freiheit“ jenseits der notwendigen Arbeit.</div>`,
check:[
 {q:"Im Zwei-Klassen-Modell gilt W = C und Π = I. Was ist die Ersparnis?", o:["S = W","S = Π","S = 0","S = C"], a:1, ex:"Nur die Kapitalist:innen sparen, indem sie investieren."},
 {q:"Was folgt bei Ricardo aus steigenden Renten?", o:["Höhere Löhne","Sinkende Gewinne und Investitionen","Mehr Exporte","Höhere Produktivität"], a:1, ex:"Löhne können nicht unter Subsistenz fallen, also gehen höhere Renten auf Kosten der Profite."}
]},
{id:"3-7", t:"Die Denkschulen im Vergleich", html:`
<p>Diese Übersicht ist dein Gerüst für jeden Essay:</p>
<div class="tablewrap"><table class="data" style="text-align:left">
<tr><th></th><th>Neoklassik</th><th>Keynesianismus</th><th>Klassik/Marxismus</th></tr>
<tr><th>Ausgangspunkt</th><td>Individuen, Knappheit</td><td>Gesamtnachfrage, Unsicherheit</td><td>Klassen, Ausbeutung</td></tr>
<tr><th>S und I</th><td>S → I über den Zins</td><td>I → S über das Einkommen</td><td>Π = I = S</td></tr>
<tr><th>Wichtigster Markt</th><td>Arbeitsmarkt</td><td>Gütermarkt</td><td>Produktion und Verteilung</td></tr>
<tr><th>Arbeitslosigkeit</th><td>zu hohe Löhne, Regulierung</td><td>zu geringe Güternachfrage</td><td>Reservearmee, Krisen</td></tr>
<tr><th>Staat</th><td>raushalten, Crowding-out</td><td>aktive Nachfragepolitik, Crowding-in</td><td>kann Widersprüche nicht lösen</td></tr>
<tr><th>Löhne</th><td>Kostenfaktor</td><td>auch Kaufkraft (Kostenparadox)</td><td>Subsistenz, Mehrwert</td></tr>
<tr><th>Exportüberschuss</th><td>Gleichgewicht der Präferenzen</td><td>Zeichen schwacher Binnennachfrage</td><td>Ausweg aus Absatzkrisen</td></tr>
</table></div>
<p>Wo die Kausalität von S = I verortet wird, entscheidet über fast alle wirtschaftspolitischen Empfehlungen.</p>`,
check:[
 {q:"Welcher Markt ist in der keynesianischen Theorie strategisch vorrangig?", o:["Arbeitsmarkt","Kapitalmarkt","Gütermarkt","Devisenmarkt"], a:2, ex:"Die Güternachfrage bestimmt die Produktion und damit die Beschäftigung."}
]}
];

LESSONS[4]=[
{id:"4-1", t:"Das einfache keynesianische Modell", html:`
<p>Das Modell beschreibt eine geschlossene Volkswirtschaft (ohne Ausland) ohne Staat. Die Nachfrage besteht nur aus Konsum und Investitionen:</p>
<div class="eq">Y<sup>N</sup> = C + I</div>
<h3>Die drei Annahmen</h3>
<div class="dlist">
<b>Konsum</b><span><span class="eq" style="display:block">C = c₀ + c₁Y<sup>VT</sup></span><b>c₀</b>: autonomer Konsum <span class="pz">(unabhängig vom Einkommen, z. B. Miete und Lebensmittel)</span><br><b>c₁</b>: marginale Konsumneigung <span class="pz">(Anteil jedes zusätzlichen Euros, der ausgegeben wird, 0 &lt; c₁ &lt; 1)</span></span>
<b>Investitionen</b><span>exogen <span class="pz">(außerhalb des Modells festgelegt)</span>: Sie hängen von der Stimmung der Unternehmer:innen ab <span class="pz">(animal spirits)</span>.</span>
<b>Angebot</b><span>passt sich der Nachfrage an: Y<sup>A</sup> = Y<sup>N</sup> = Y<sup>VT</sup></span>
</div>
<h3>Sind die Haushalte irrational?</h3>
<p>Die Konsumfunktion sagt: Haushalte richten ihren Konsum nach dem laufenden Einkommen. Ob das vernünftig ist, sehen die Schulen verschieden:</p>
${cmp([["","Neoklassik","Keynes"],["Antwort","Ja, irrational","Nein, vernünftig"],["Begründung","Haushalte sollten nach dem erwarteten Lebenseinkommen planen.","Über die ferne Zukunft weiß man wenig („In the long run, we are all dead“). Gegenwart und jüngste Vergangenheit sind eine vernünftige Orientierung."],["Fachbegriff","Hyperrationalität (perfekte Planung über das ganze Leben)","begrenzte Rationalität (bounded rationality)"]])}`,
check:[
 {q:"Was bedeutet c₁ = 0,8?", o:["80 % des Einkommens werden gespart","Von jedem zusätzlichen Euro Einkommen werden 80 Cent konsumiert","Der autonome Konsum beträgt 0,8","Die Investitionen steigen um 0,8"], a:1,
  ex:"c₁ ist die marginale Konsumneigung: der Anteil eines zusätzlichen Euros, der in den Konsum geht.",
  w:["Genau umgekehrt: 0,8 wird ausgegeben. Gespart werden nur 20 Cent je zusätzlichem Euro (1 − c₁ = 0,2).",null,"Hier ist c₁ mit c₀ verwechselt. c₀ ist ein fester Betrag (autonomer Konsum), c₁ ein Anteil zwischen 0 und 1.","c₁ gehört zur Konsumfunktion. Die Investitionen sind im Modell fest vorgegeben und hängen nicht von c₁ ab."]},
 {q:"Was heißt „Investitionen sind exogen“?", o:["Sie hängen vom Zins ab","Sie werden außerhalb des Modells bestimmt","Sie sind null","Sie kommen aus dem Ausland"], a:1,
  ex:"Exogen heißt „von außen“: Keine Größe im Modell (etwa Y oder c₁) bestimmt I. Den Ausschlag gibt die Stimmung der Unternehmer:innen (animal spirits).",
  w:["Das ist die neoklassische Sicht: Der Zins steuert die Investitionen. Im einfachen keynesianischen Modell kommt der Zins noch gar nicht vor.",null,"Exogen heißt nicht null, sondern fest vorgegeben, zum Beispiel I = 70.","„Von außen“ meint außerhalb des Modells, nicht aus dem Ausland. Das Modell hat gar kein Ausland."]}
]},
{id:"4-2", t:"Das keynesianische Kreuz", html:`
<p>Im Diagramm treffen Nachfrage und Angebot aufeinander:</p>
<div class="dlist">
<b>Nachfrage</b><span>Gerade Y<sup>N</sup> = c₀ + I + c₁Y mit Achsenabschnitt c₀ + I und Steigung c₁</span>
<b>Angebot</b><span>45°-Linie Y<sup>A</sup> = Y <span class="pz">(Produktion gleich Nachfrage)</span></span>
<b>Gleichgewicht</b><span>Schnittpunkt der beiden Linien, darunter auf der x-Achse liegt Y*</span>
</div>
{{fig:g4a0}}
<h3>Herleitung von Y* (in der Klausur 2 Punkte)</h3>
<ol class="steps">
<li>Nachfrage aufschreiben<div class="eq">Y<sup>N</sup> = c₀ + c₁Y + I</div></li>
<li>Gleichgewicht einsetzen: Y<sup>N</sup> = Y<sup>A</sup> = Y<sup>VT</sup> = Y<div class="eq">Y = c₀ + c₁Y + I</div></li>
<li>c₁Y nach links bringen und Y ausklammern<div class="eq">(1 − c₁) · Y = c₀ + I</div></li>
<li>Durch (1 − c₁) teilen<div class="eq">Y* = 1/(1 − c₁) · (c₀ + I)</div></li>
</ol>
<div class="merk"><b>Merksatz</b>1/(1 − c₁) heißt Multiplikator. Er vervielfacht die autonomen Ausgaben c₀ + I zum Gleichgewichtseinkommen.</div>
${bsp("Beispiel aus der Vorlesung",[["Gegeben","c₀ = 5, I = 15, c₁ = 0,8"],["Gesucht","Y*"],["Rechnung","$ Y* = 1/(1 − 0,8) · (5 + 15) = 5 · 20"],["Ergebnis","Y* = 100"],["Deutung","Autonome Ausgaben von 20 erzeugen ein Einkommen von 100, also das Fünffache."]])}`,
check:[
 {q:"c₀ = 80, c₁ = 0,8, I = 70. Wie hoch ist Y*?", o:["150","600","750","187,5"], a:2,
  ex:"Y* = 1/(1 − 0,8) · (80 + 70) = 5 · 150 = 750 (Aufgabenblatt 4, Aufgabe 2).",
  w:["150 sind nur die autonomen Ausgaben c₀ + I. Der Multiplikator 1/(1 − c₁) fehlt.","600 = 0,8 · 750 ist der einkommensabhängige Konsum c₁Y, nicht das Einkommen selbst.",null,"187,5 = 150 / 0,8: Hier wurde durch c₁ geteilt. Richtig ist durch 1 − c₁ = 0,2."]}
]},
{id:"4-3", t:"Die Logik des Multiplikators", html:`
<p>Warum wird aus 100 € Investition mehr als 100 € Einkommen? Weil jede Ausgabe Einkommen für jemand anderen ist:</p>
<ol class="steps">
<li>Ein Unternehmen investiert 100 € mehr. Das sind 100 € Einkommen für den Maschinenbauer.</li>
<li>Bei c₁ = 0,8 gibt er davon 80 € aus.</li>
<li>Die 80 € sind Einkommen für die nächste Person. Sie gibt 64 € aus.</li>
<li>Und so weiter: Jede Runde ist um 20 % kleiner als die vorige.</li>
</ol>
<div class="eq">100 + 80 + 64 + … = 1/(1 − 0,8) · 100 = 500</div>
<div class="merk"><b>Merksatz</b>Der Multiplikator ist hier 5. Im Diagramm verschiebt sich die Nachfragegerade um ΔI nach oben, und Y* steigt um das Fünffache.</div>
<h3>Und die Ersparnis?</h3>
${bsp("Beispiel aus dem Skript",[["Gegeben","c₁ = 0,5, die Investitionen steigen um 1"],["Rechnung","$ ΔY = 1/(1 − 0,5) · 1 = 2\n$ ΔC = 0,5 · 2 = 1\n$ ΔS = ΔY − ΔC = 2 − 1 = 1"],["Ergebnis","Die Ersparnis steigt um 1, genau so viel wie die Investitionen."],["Deutung","Es wird nicht mehr investiert, weil mehr gespart wird. Sondern weil mehr investiert wird, wird mehr gespart (I → S)."]])}`,
check:[
 {q:"c₁ = 0,75, die Investitionen steigen um 10. Um wie viel steigt Y*?", o:["7,5","10","30","40"], a:3,
  ex:"Multiplikator 1/(1 − 0,75) = 1/0,25 = 4, also ΔY = 4 · 10 = 40.",
  w:["7,5 = 0,75 · 10 ist nur die zweite Ausgabenrunde, nicht die Summe aller Runden.","10 wäre das Ergebnis ohne Multiplikator. Die Kettenreaktion aus Ausgaben und Einkommen fehlt.","30 = 0,75/0,25 · 10 ist der Steuermultiplikator c₁/(1 − c₁) aus dem Modell mit Staat. Investitionen gehen voll in die Nachfrage ein und wirken mit 1/(1 − c₁).",null]}
]},
{id:"4-4", t:"Das Sparparadox in Zahlen", html:`
<p>Was passiert, wenn alle Haushalte gleichzeitig mehr sparen wollen? Zahlenbeispiel der Vorlesung mit c₀ = 5 und I = 15:</p>
${cmp([["","Vorher","Alle sparen mehr"],["c₁","0,8","0,5"],["Y*","(5 + 15) / 0,2 = 100","(5 + 15) / 0,5 = 40"],["Konsum C","5 + 0,8 · 100 = 85","5 + 0,5 · 40 = 25"],["Ersparnis S = Y − C","15","15"]])}
<div class="merk"><b>Sparparadox</b>Die Haushalte wollten mehr sparen. Erreicht haben sie nur ein viel niedrigeres Einkommen. Die Ersparnis bleibt bei S = I = 15.</div>
<div class="merk"><b>Noch krasser mit Akzelerator</b>Hängen auch die Investitionen von der Nachfrage ab, sinken sie im Abschwung mit. Dann fällt die gesamtwirtschaftliche Ersparnis sogar, gerade weil alle mehr sparen wollen.</div>`,
check:[
 {q:"Was passiert im keynesianischen Modell, wenn c₁ sinkt und I konstant bleibt?", o:["Y* steigt, S steigt","Y* sinkt, S bleibt gleich","Y* bleibt gleich, S steigt","Y* sinkt, S steigt"], a:1,
  ex:"Gesamtwirtschaftlich gilt S = I. Bleibt I gleich, bleibt auch S gleich. Es sinkt nur das Einkommen.",
  w:["Das wäre die Sicht eines einzelnen Haushalts. Gesamtwirtschaftlich fehlt Konsumnachfrage, deshalb sinkt Y*.",null,"Y* hängt über den Multiplikator 1/(1 − c₁) von c₁ ab. Sinkt c₁, wird der Multiplikator kleiner und Y* sinkt.","Dass Y* sinkt, stimmt. S kann aber nicht steigen, denn S = I, und I bleibt gleich."]}
]},
{id:"4-5", t:"Der Akzelerator", html:`
<p>Bisher waren die Investitionen fest vorgegeben. Jetzt hängt ein Teil von ihnen von der Nachfrage ab:</p>
<div class="eq">I = I<sub>aut</sub> + aY</div>
<div class="dlist">
<b>I<sub>aut</sub></b><span>autonome Investitionen <span class="pz">(unabhängig von der Nachfrage)</span></span>
<b>a</b><span>Akzelerator: wie stark die Investitionen auf die Nachfrage reagieren</span>
</div>
<p>Die Idee: Unternehmen bauen ihre Kapazitäten aus, wenn die Nachfrage dauerhaft steigt. In Keynes' Beispiel schafft ein Restaurant mehr Tische an, wenn ständig alle belegt sind. Für das Gleichgewicht gilt dann:</p>
<div class="eq">Y* = 1/(1 − c₁ − a) · (c₀ + I<sub>aut</sub>)</div>
<p>Der Nenner wird kleiner, der Multiplikator also größer.</p>
${bsp("Beispiel aus dem Skript",[["Gegeben","c₁ = 0,5, a = 0,1, die Staatsausgaben steigen um 1"],["Rechnung","$ Multiplikator = 1/(1 − 0,5 − 0,1) = 1/0,4 = 2,5\n$ ΔC = 0,5 · 2,5 = 1,25\n$ ΔI = 0,1 · 2,5 = 0,25"],["Ergebnis","Y steigt um 2,5, der Konsum um 1,25 und die Investitionen um 0,25."],["Deutung","Die privaten Investitionen werden nicht verdrängt, sondern mitgezogen: kein Crowding-out, sondern Crowding-in."],["Hinweis","Im Skript steht an dieser Stelle, auch die Investitionen stiegen um 1,25. Richtig ist 0,1 · 2,5 = 0,25, sonst ginge die Rechnung 2,5 = 1,25 + 0,25 + 1 nicht auf. Im Gegenbeispiel direkt danach rechnet das Skript selbst mit 0,25."]])}`,
check:[
 {q:"c₁ = 0,5 und a = 0,2. Wie groß ist der Multiplikator?", o:["2","2,5","3,33","5"], a:2,
  ex:"1/(1 − 0,5 − 0,2) = 1/0,3 ≈ 3,33.",
  w:["2 = 1/(1 − 0,5) ist der Multiplikator ohne Akzelerator. Das a fehlt im Nenner.","2,5 = 1/0,4 wäre richtig für a = 0,1, hier ist a aber 0,2.",null,"5 = 1/0,2: Hier wurde nur a abgezogen und c₁ vergessen. Im Nenner stehen beide: 1 − c₁ − a."]}
]},
{id:"4-6", t:"Output-Lücke und keynesianische Arbeitslosigkeit", html:`
<p>Bis zum <b>Produktionspotenzial</b> Y<sub>V</sub> <span class="pz">(Produktion bei Vollbeschäftigung)</span> folgt die Produktion der Nachfrage entlang der 45°-Linie. Wegen des Multiplikators führt schon ein kleiner Anstieg der autonomen Nachfrage zu einem großen Anstieg des BIP.</p>
<p>Je nachdem, wo die Nachfragegerade die 45°-Linie schneidet, gibt es drei Fälle:</p>
<div class="dlist">
<b>A · Unterbeschäftigung</b><span>Schnittpunkt links von Y<sub>V</sub>, negative Output-Lücke</span>
<b>B · Vollbeschäftigung</b><span>Schnittpunkt genau bei Y<sub>V</sub>, keine Lücke</span>
<b>C · Inflation</b><span>Schnittpunkt rechts von Y<sub>V</sub>, positive Output-Lücke, früher oder später steigen die Preise</span>
</div>
{{fig:g4a}}
<div class="merk"><b>Ursache auf dem Gütermarkt</b>Anders als im neoklassischen Modell wird keine fallende Grenzproduktivität der Arbeit angenommen. Höhere Güternachfrage führt zu mehr Beschäftigung, aber nicht unbedingt zu geringeren Reallöhnen.</div>`,
check:[
 {q:"Der Schnittpunkt von Nachfrage und 45°-Linie liegt rechts von Y_V. Was droht?", o:["Deflation","Inflation","Arbeitslosigkeit","Nichts"], a:1,
  ex:"Rechts von Y_V ist die Nachfrage größer als das, was bei Vollbeschäftigung produziert werden kann (positive Output-Lücke). Früher oder später steigen die Preise.",
  w:["Sinkende Preise (Deflation) wären eher bei zu wenig Nachfrage zu erwarten, also links von Y_V.",null,"Arbeitslosigkeit herrscht links von Y_V (negative Output-Lücke). Rechts davon ist die Nachfrage zu hoch, nicht zu niedrig.","Rechts von Y_V kann die Wirtschaft die Nachfrage auf Dauer nicht bedienen. Das bleibt nicht folgenlos."]}
]},
{id:"4-7", t:"Das Kostenparadox", html:`
<p><b>Voraussetzung:</b> Lohnbezieher:innen geben einen größeren Teil ihres Einkommens aus als Gewinnbezieher:innen.</p>
<ol class="steps">
<li>Die Reallöhne steigen, Einkommen verschiebt sich von Gewinnen zu Löhnen.</li>
<li>Die durchschnittliche Konsumneigung steigt, die Nachfragegerade wird steiler.</li>
<li>Y* steigt. Das ist die <b>Kaufkrafttheorie der Löhne</b>.</li>
</ol>
{{fig:g4b}}
<div class="merk"><b>Das Paradox</b>Jedes Unternehmen hat höhere Kosten. Trotzdem, gerade deswegen, können die Gewinne insgesamt steigen, denn Π = Y<sup>VT</sup> − W. Einzelne Lohnabschlüsse haben also externe Effekte <span class="pz">(Wirkungen auf andere, die im eigenen Kalkül nicht vorkommen)</span>.</div>
<h3>Mikro-Makro-Paradoxa</h3>
<p>Spar- und Kostenparadox zeigen dasselbe Muster: Was für einen Einzelnen vernünftig ist, kann gesamtwirtschaftlich das Gegenteil bewirken.</p>
${cmp([["","Einzeln vernünftig","Wenn es alle tun"],["Sparparadox","Ein Haushalt spart mehr.","Das Einkommen sinkt, die Ersparnis steigt nicht."],["Kostenparadox","Ein Unternehmen hält die Löhne niedrig.","Die Nachfrage sinkt, die Gewinne insgesamt können sinken."]])}`,
check:[
 {q:"Wann führen höhere Löhne im keynesianischen Modell zu höherer Nachfrage?", o:["Immer","Wenn Lohnbezieher:innen eine höhere Konsumneigung haben als Gewinnbezieher:innen","Wenn die Zinsen steigen","Nie"], a:1,
  ex:"Dann fließt mehr Einkommen zu denen, die mehr davon ausgeben. Die durchschnittliche Konsumneigung und damit Y* steigen.",
  w:["Nicht immer: Geben Lohnbezieher:innen zusätzliches Einkommen nicht stärker aus als Gewinnbezieher:innen, ändert die Umverteilung die Nachfrage nicht.",null,"Zinsen kommen im einfachen Modell ohne Staat nicht vor. Entscheidend ist, wer das Einkommen bekommt.","„Nie“ wäre die Sicht, dass Löhne nur Kosten sind. Im keynesianischen Modell sind Löhne auch Kaufkraft."]}
]}
];

CARDS[1]=[
 {id:"c1-01", f:"Was ist Makroökonomik?", b:"Die Analyse gesamtwirtschaftlicher Aggregate (Größen, die für ganze Sektoren zusammengefasst werden: Haushalte, Unternehmen, Staat) und Entwicklungen wie Wachstum, Inflation, Arbeitslosigkeit, Verteilung, Staatsverschuldung."},
 {id:"c1-02", f:"Methodologischer Individualismus", b:"Gesellschaft besteht nur aus Individuen. Jede Erklärung sozialer Fakten beruht auf individuellem Verhalten (z. B. Arbeitslosigkeit wird aus den Entscheidungen einzelner Arbeitnehmer:innen und Firmen erklärt)."},
 {id:"c1-03", f:"Holismus", b:"Soziale Ganzheiten (z. B. Klassen, Nationen, Kulturen) haben eigene, nicht auf Einzelne reduzierbare Eigenschaften und bestimmen das individuelle Verhalten (z. B. prägt die Klassenlage, wie jemand denkt und handelt)."},
 {id:"c1-04", f:"Systemismus", b:"Gesellschaft als System aus sich wandelnden Subsystemen (z. B. Familien, Unternehmen, Staat, Finanzmärkte, die sich gegenseitig beeinflussen). Untersucht werden Aufbau, Umfeld, Struktur und Mechanismen."},
 {id:"c1-05", f:"Die drei Grundsätze des Beutelsbacher Konsenses", b:"Überwältigungsverbot (keine Meinung aufdrängen), Kontroversitätsgebot (was kontrovers ist, muss kontrovers erscheinen), Schülerorientierung (eigene Interessenlage analysieren)."},
 {id:"c1-06", f:"Neoklassisches oder sozioökonomisches Leitbild im Kernlehrplan SoWi NRW?", b:"Laut Vorlesung sozioökonomisch (Wirtschaft und Gesellschaft zusammen, mehrere Theorien): mündige Wirtschaftsbürger:innen, kontroverse Positionen erörtern, homo oeconomicus auf Tragfähigkeit bewerten (prüfen, ob dieses Menschenbild die Realität beschreibt)."},
 {id:"c1-07", f:"Wann war die Industrielle Revolution?", b:"Etwa 1760 bis 1850. Danach knickt das BIP pro Kopf steil nach oben („history's hockey stick“: die Kurve sieht aus wie ein Hockeyschläger)."},
 {id:"c1-08", f:"Phasen hoher Arbeitslosigkeit und Inflation in Deutschland mit herrschendem Paradigma", b:"Hyperinflation (extreme Geldentwertung) bis 1923 und Deflation (sinkende Preise) mit Massenarbeitslosigkeit ab 1929: pluralistische Phase (mehrere Denkschulen nebeneinander), danach Keynesianismus. Stagflation (Stillstand plus Inflation) 1970er: Wende zu Monetarismus und neoklassischer Dominanz. Finanzkrise 2007ff.: Ende der Dominanz."},
 {id:"c1-09", f:"Kamen die Nationalsozialisten in Zeiten hoher Inflation oder Deflation an die Macht?", b:"Deflation (sinkende Preise): Weltwirtschaftskrise mit Massenarbeitslosigkeit, Machtergreifung 1933."},
 {id:"c1-10", f:"Monetarismus und Neuklassik: Vertreter und Kernaussage", b:"Milton Friedman, Robert Lucas (1960–80). Selbstregelungskraft des Marktes (er findet von selbst ins Gleichgewicht), Geldpolitik durch die Zentralbank, Ablehnung staatlicher Konjunktursteuerung (Eingreifen gegen Auf- und Abschwünge). Kontext: Stagflation, also Stillstand plus Inflation in den 1970ern."},
 {id:"c1-11", f:"Neukeynesianismus / Neuer Konsens: Kernaussage", b:"Kurze Frist keynesianisch (Konjunkturpolitik gegen das Auf und Ab der Wirtschaft), lange Frist neoklassisch (Strukturpolitik: Reformen an Arbeits- und Gütermärkten). Krugman, Stiglitz, Mankiw."},
 {id:"c1-12", f:"Postkeynesianismus: Kernaussage", b:"Fundamentale Unsicherheit (die Zukunft ist nicht berechenbar, nicht einmal mit Wahrscheinlichkeiten), Macht und Konflikt (z. B. zwischen Gewerkschaften und Arbeitgebern). Ökonomien sind produktive, aber instabile Systeme. Erweiterung des Keynesianismus um marxistische Elemente."},
 {id:"c1-13", f:"Drei Gründe der Vorlesung für Pluralismus", b:"Wissenschaftstheorie (Fallibilismus: Wissen kann falsch sein; Vielschichtigkeit: die Realität hat viele Ursachen), Beutelsbacher Konsens und Kernlehrplan, Ende der neoklassischen Dominanz durch die Krisen seit 2007."}
];
CARDS[2]=[
 {id:"c2-01", f:"Nenne zwei Strom- und eine Bestandsgröße.", b:"Ströme: BIP, Konsum, Investitionen, Exporte, Löhne, Haushaltsdefizit.\nBestände: Staatsverschuldung, Vermögen der Haushalte, Kapitalstock (Maschinen, Gebäude, Infrastruktur)."},
 {id:"c2-02", f:"Was sind volkswirtschaftliche Identitäten?", b:"Gleichungen, die immer gelten, unabhängig von der Theorie. Sie sagen nichts über Kausalität (was was verursacht). Theorien ergänzen sie um Verhaltensgleichungen (Identität z. B. Y = C + I + G + X − M, Verhaltensgleichung z. B. die Konsumfunktion C = c₀ + c₁Y)."},
 {id:"c2-03", f:"Die drei Definitionen von Y", b:"Y^A: Marktwert der im Inland produzierten Güter.\nY^N: gesamtwirtschaftliche Nachfrage nach im Inland produzierten Gütern.\nY^VT: Bruttonationaleinkommen, alle von Inländer:innen bezogenen Einkommen."},
 {id:"c2-04", f:"Reales vs. nominales BIP", b:"Nominal: zu laufenden Preisen. Real: in Preisen eines Basisjahres (feste Preise eines Vergleichsjahres, die Inflation ist herausgerechnet). Reales Wachstum ≈ nominales Wachstum − Inflation."},
 {id:"c2-05", f:"Brutto vs. netto", b:"Netto = brutto minus Abschreibungen (Wertverlust des Kapitalstocks durch Alterung)."},
 {id:"c2-06", f:"Kritik am Vergleich realer BIPs über lange Zeit", b:"Preise, Mengen und Qualität ändern sich, neue Produkte kommen hinzu, Digitalisierung erschwert die Messung. Je nach Methode stark unterschiedliche Wachstumsraten."},
 {id:"c2-07", f:"Entstehungsseite", b:"Y^A = (Y/H) · H: Produktivität mal gearbeitete Stunden."},
 {id:"c2-08", f:"Verwendungsseite", b:"Y^N = C + I + G + (X − M)."},
 {id:"c2-09", f:"Verteilungsseite: funktional und sektoral", b:"Funktional (nach Einkommensart): Y = W + Π.\nSektoral (nach Sektoren): Y = Y_HH + Y_F + Y_St."},
 {id:"c2-10", f:"Definition Y_HH, Y_F, Y_St", b:"Y_HH = Löhne + Kapitaleinkommen (z. B. Zinsen) + Transfers (z. B. Kindergeld, Rente) − Steuern/Abgaben (z. B. Sozialbeiträge).\nY_F = einbehaltene (nicht ausgeschüttete) Gewinne + Subventionen (staatliche Zuschüsse) − Steuern/Abgaben.\nY_St = T − Z (Steuern minus Transfers und Subventionen)."},
 {id:"c2-11", f:"Arbeitsproduktivität", b:"Y/H: Produktion je gearbeiteter Stunde."},
 {id:"c2-12", f:"Staatlicher Finanzierungssaldo", b:"Y_St − G: verfügbare Einkommen des Staates minus Ausgaben für Güter und Dienstleistungen."},
 {id:"c2-13", f:"Warum gilt S = I?", b:"Ohne Staat und Ausland: Y = C + I und Y = C + S. Das nicht konsumierte Einkommen ist Ersparnis und entspricht immer den Investitionen. Eine Volkswirtschaft kann nur sparen, indem sie investiert."},
 {id:"c2-14", f:"Warum kann ein Individuum in Geld sparen, die Gesellschaft aber nicht?", b:"Was einer nicht ausgibt, fehlt anderen als Einnahme. Wollten alle nur Geld sparen, wäre Y = C + I = 0 und niemand hätte Einkommen zum Sparen."},
 {id:"c2-15", f:"Die Salden-Identität", b:"(Y_HH + Y_F − C − I) + (Y_St − G) + (M − X) = 0. Privatsektor + Staat + Ausland = 0."},
 {id:"c2-16", f:"Wann hat ein Land einen Leistungsbilanzüberschuss?", b:"Wenn der Überschuss des Privatsektors größer ist als das Defizit des Staates. Das Ausland verschuldet sich dann beim Inland."},
 {id:"c2-17", f:"Summe der Geldvermögen aller Wirtschaftseinheiten", b:"Immer null: Jedem Geldvermögen steht eine Schuld in gleicher Höhe gegenüber (z. B. ist dein Sparguthaben eine Schuld der Bank bei dir). (Das Sachvermögen, etwa Häuser und Maschinen, ist nicht null.)"},
 {id:"c2-18", f:"Staatsverschuldung und Generationengerechtigkeit", b:"Vererbt werden Staatsschulden und private Vermögen. Konflikt entsteht innerhalb der nächsten Generation: Steuerzahler:innen zahlen Zinsen an Erben."},
 {id:"c2-19", f:"Rolle der Leistungsbilanzen in der Eurokrise", b:"Defizite der Krisenstaaten (Portugal, Irland, Griechenland, Spanien), Überschüsse Deutschlands. Der Privatsektor der Krisenstaaten verschuldete sich. Staatsschulden stiegen erst nach 2007 (Bankenrettung, Rezession, also Wirtschaftseinbruch): Folge, nicht Ursache."},
 {id:"c2-20", f:"Erwerbspersonen, Arbeitslose (BA), Erwerbslose (ILO)", b:"Erwerbspersonen = Erwerbstätige + Arbeitslose.\nBA: gemeldet, sucht versicherungspflichtige Arbeit.\nILO: in den letzten 4 Wochen aktiv gesucht, binnen 2 Wochen verfügbar."},
 {id:"c2-21", f:"Was sind „Zieljahre“ bei CO₂-Budgets, und warum täuschen sie?", b:"Jahr der Klimaneutralität (ab dann keine zusätzlichen Netto-Emissionen). Entscheidend ist das Budget (Fläche unter der Kurve): Je später die Absenkung beginnt, desto früher muss die Neutralität erreicht sein."},
 {id:"c2-22", f:"Decoupling vs. Degrowth", b:"CO₂ = (CO₂/Y) · Y. Decoupling: CO₂-Intensität (Emissionen je Euro BIP) senken, Wachstum möglich. Degrowth: weniger Produktion, etwa durch Arbeitszeitverkürzung."}
];
CARDS[3]=[
 {id:"c3-01", f:"BIP-Kritik: neoklassisch", b:"BIP soll Wohlfahrt (das Wohlergehen der Menschen) messen. Externalitäten fehlen (Reparatur von Umweltschäden erhöht das BIP), Monopolpreise (überhöhte Preise mangels Konkurrenz) überschätzen die Wohlfahrt."},
 {id:"c3-02", f:"BIP-Kritik: keynesianisch", b:"BIP soll beschäftigungswirksame Nachfrage messen (Ausgaben, für die tatsächlich gearbeitet wird). Enthält aber Komponenten ohne Geldausgaben: imputierte Mieten für Wohneigentum, impliziter Konsum von Finanzdienstleistungen (der Verzicht auf Zinsen fürs Girokonto wird als Kauf von Bankdienstleistungen gezählt)."},
 {id:"c3-03", f:"BIP-Kritik: klassisch/marxistisch", b:"BIP soll Verteilung zwischen Klassen zeigen. Finanzsektor ist unproduktiv, Kapitaleinkommen (z. B. Zinsen, Dividenden) sind leistungslose Renten, keine Faktoreinkommen (Bezahlung für einen Beitrag zur Produktion)."},
 {id:"c3-04", f:"BIP-Kritik: feministisch", b:"BIP soll die gesamte ökonomische Arbeit erfassen. Unbezahlte Sorgearbeit fehlt, ihre Produktivität ist kaum messbar. Eigentümer zahlen sich fiktive Miete, aber niemand Lohn für Kinderbetreuung."},
 {id:"c3-05", f:"BIP-Kritik: ökologisch und evolutionär-institutionell", b:"Ökologisch: Einbettung ins Ökosystem fehlt, Luxuskonsum zählt wie Grundbedarf.\nEvolutionär: positionaler Konsum (z. B. Statussymbole wie Luxusuhren) erhöht im Aggregat die Wohlfahrt nicht."},
 {id:"c3-06", f:"Saysches Gesetz", b:"„Das Angebot schafft sich seine eigene Nachfrage.“ Konsum ist direkt Nachfrage, Ersparnis wird über den Zins zu Investitionen."},
 {id:"c3-07", f:"Wie verhindert der Zinsmechanismus in der Neoklassik einen Nachfragemangel?", b:"Mehr Ersparnis senkt den Zins, mehr Investitionen werden rentabel (lohnen sich), bis I = S. Jedes Einkommen wird direkt oder indirekt nachfragewirksam."},
 {id:"c3-08", f:"Hierarchie der Märkte: Neoklassik vs. Keynes", b:"Neoklassik: Arbeitsmarkt bestimmt Y, Finanzmarkt koordiniert, Gütermarkt passiv.\nKeynes: Gütermarkt bestimmt Produktion und Beschäftigung, Arbeitsmarkt nachgelagert (folgt dem Gütermarkt)."},
 {id:"c3-09", f:"Neoklassische Sicht auf Arbeitslosigkeit", b:"Entsteht auf dem Arbeitsmarkt durch zu hohe Löhne (Mindestlohn, Gewerkschaften, Sozialleistungen). Lösung: Deregulierung (Abbau von Regeln wie Mindestlohn oder Kündigungsschutz)."},
 {id:"c3-10", f:"Crowding-out", b:"Neoklassisch: Bei angebotsseitig vorgegebenem Y (die Produktion ist durch Arbeitskräfte und Technik begrenzt) verdrängen höhere Staatsausgaben private Ausgaben."},
 {id:"c3-11", f:"Crowding-in", b:"Keynesianisch: Bei unterausgelasteten Kapazitäten (Maschinen und Arbeitskräfte stehen teilweise still) ziehen Staatsausgaben über den Multiplikator privaten Konsum und Investitionen nach."},
 {id:"c3-12", f:"Sozialphilosophie der Neoklassik", b:"Einkommen = Grenzproduktivität (jede:r verdient, was sie oder er zur Produktion beiträgt), Staat verdrängt Private, Freihandel steigert Wohlfahrt, individuelle Freiheit als höchstes Ziel."},
 {id:"c3-13", f:"Das Keynes'sche Sparparadox", b:"Wollen alle mehr sparen, sinkt die Nachfrage. Über den Multiplikator fallen die Einkommen, gespart wird am Ende nicht mehr (S = I bleibt)."},
 {id:"c3-14", f:"Inwiefern bestimmen bei Keynes die Investitionen die Ersparnis?", b:"Höhere Investitionen erhöhen über den Multiplikator das Einkommen. Davon wird ein Teil gespart, bis S = I. Kausalität I → S."},
 {id:"c3-15", f:"Monetäre Produktionswirtschaft (Keynes) vs. reale Tauschwirtschaft (Neoklassik)", b:"Neoklassik: Geld ist ein Schleier (es erleichtert nur den Tausch, an der Produktion ändert es nichts), Finanzmärkte koordinieren S und I.\nKeynes: Geld kann gehortet werden (z. B. bleibt es auf dem Konto liegen, statt ausgegeben zu werden), ohne Produktion zu schaffen. Fundamentale Unsicherheit (die Zukunft ist nicht berechenbar), Finanzmärkte koordinieren nicht."},
 {id:"c3-16", f:"Sozialphilosophie von Keynes", b:"Gleichmäßige Verteilung, starker öffentlicher Sektor, regulierte Finanzmärkte, internationale Kooperation gegen Exportüberschüsse, langfristig Überwindung der Knappheit und Arbeitszeitverkürzung."},
 {id:"c3-17", f:"Keynes 1930: „Wirtschaftliche Möglichkeiten für unsere Enkelkinder“", b:"Prognose massiver Arbeitszeitverkürzung (drei Stunden am Tag) aus sozialen Gründen, wenn materielle Bedürfnisse befriedigt sind."},
 {id:"c3-18", f:"Gemeinsamkeiten der Klassik", b:"Analyse von Klassen statt Individuen, Arbeitswertlehre, Theorie der Rente als leistungslosem Einkommen (z. B. Pacht für Land)."},
 {id:"c3-19", f:"Ausbeutung und Mehrwert bei Marx", b:"Arbeiter:innen produzieren mehr Wert, als sie als Lohn erhalten. Den Mehrwert eignen sich die Kapitalist:innen an und investieren ihn."},
 {id:"c3-20", f:"Entfremdung und Warenfetisch", b:"Entfremdung: Arbeiter:innen besitzen die Produktionsmittel (Fabriken, Maschinen) nicht, der Überschuss wird ihnen genommen.\nWarenfetisch: Die eigenen Produkte erscheinen als fremde, beherrschende Macht (z. B. wirken Marktpreise und Konkurrenz wie Naturgesetze, obwohl Menschen sie hervorbringen)."},
 {id:"c3-21", f:"Warum sind Investitionen bei Marx Ausdruck der Ausbeutung?", b:"Arbeiter:innen produzieren Konsum- und Investitionsgüter, kaufen von ihrem Lohn aber nur Konsum. Der Rest (I = Π = S) gehört den Kapitalist:innen."},
 {id:"c3-22", f:"Ricardo: Wirkung steigender Renten", b:"Bei gegebener Produktion und Subsistenzlöhnen (Löhne, die gerade zum Überleben reichen) sinken Gewinne und Investitionen. Folgerung: Politik für Kapitalisten, gegen Grundbesitzer."}
];
CARDS[4]=[
 {id:"c4-01", f:"Konsumfunktion im keynesianischen Modell", b:"$ C = c₀ + c₁Y\nc₀: **autonomer Konsum** (unabhängig vom Einkommen)\nc₁: **marginale Konsumneigung**, der Anteil jedes zusätzlichen Euros, der ausgegeben wird (zwischen 0 und 1)"},
 {id:"c4-02", f:"Ist die keynesianische Konsumfunktion irrational?", b:"| | Neoklassik | Keynes\n| Antwort | Ja | Nein\n| Grund | Haushalte sollten nach dem erwarteten Lebenseinkommen konsumieren. | Perfekte Planung über das ganze Leben ist unmöglich (Hyperrationalität).\n| Folge | – | Bei unsicherer Zukunft ist das laufende Einkommen eine vernünftige Orientierung: **begrenzte Rationalität** (bounded rationality)."},
 {id:"c4-03", f:"Was heißt „Investitionen sind exogen“?", b:"Sie werden **außerhalb des Modells** bestimmt, also nicht durch Y oder c₁.\nDen Ausschlag gibt die **Stimmung der Unternehmer:innen** (animal spirits)."},
 {id:"c4-04", f:"Herleitung von Y* ohne Staat", b:"1. Gleichgewicht ansetzen\n$ Y = c₀ + c₁Y + I\n2. c₁Y nach links bringen, Y ausklammern\n$ (1 − c₁) · Y = c₀ + I\n3. Durch (1 − c₁) teilen\n$ Y* = 1/(1 − c₁) · (c₀ + I)"},
 {id:"c4-05", f:"Wie entsteht die Multiplikatorwirkung?", b:"Jede Ausgabe ist **Einkommen für andere**. Die geben davon wieder den Anteil c₁ aus, und so weiter.\nBei c₁ = 0,8 wird aus 100 € Investition ein Einkommen von 500 €:\n$ 100 + 80 + 64 + … = 1/(1 − 0,8) · 100 = 500"},
 {id:"c4-06", f:"Was zeigt das keynesianische Kreuz?", b:"Nachfrage: Gerade Y^N = c₀ + I + c₁Y\nAngebot: 45°-Linie Y^A = Y\nGleichgewicht Y*: Schnittpunkt der beiden Linien"},
 {id:"c4-07", f:"Multiplikator mit Akzelerator", b:"$ I = I_aut + aY\n$ Y* = 1/(1 − c₁ − a) · (c₀ + I_aut)\na: **Akzelerator**, wie stark die Investitionen auf die Nachfrage reagieren\nDer Multiplikator wird **größer**, weil auch die Investitionen auf die Nachfrage reagieren."},
 {id:"c4-08", f:"Warum ist der Multiplikator mit Akzelerator größer?", b:"Steigende Nachfrage löst **zusätzliche Investitionen** aus (Unternehmen bauen Kapazitäten aus).\nDiese Investitionen sind wieder Einkommen für andere. Die Kettenreaktion wird länger.\n$ 1/(1 − c₁ − a) > 1/(1 − c₁)"},
 {id:"c4-09", f:"Negative und positive Output-Lücke", b:"| | Negativ | Positiv\n| Lage | Y* < Y_POT | Y* > Y_POT\n| Folge | Unterbeschäftigung (Arbeitslosigkeit) | früher oder später Inflation\nY_POT: **Produktionspotenzial**, die Produktion bei Vollbeschäftigung"},
 {id:"c4-10", f:"Drei Konstellationen des Gleichgewichts", b:"- Unterbeschäftigung: Y* links vom Vollbeschäftigungsoutput Y_V\n- Vollbeschäftigung: Y* genau bei Y_V\n- Inflation: Y* rechts von Y_V"},
 {id:"c4-11", f:"Wo liegt die Ursache keynesianischer Arbeitslosigkeit?", b:"Gütermarkt: Die Güternachfrage ist zu gering für Vollbeschäftigung.\nNicht der Arbeitsmarkt (zu hohe Löhne) wie in der Neoklassik."},
 {id:"c4-12", f:"Sparparadox im Zahlenbeispiel", b:"Gegeben: c₀ = 5, I = 15\n| | Vorher | Alle sparen mehr\n| c₁ | 0,8 | 0,5\n| Y* | 100 | 40\n| S | 15 | 15\nDie Haushalte wollen mehr sparen, erreichen aber nur ein **niedrigeres Einkommen**. S bleibt gleich I."},
 {id:"c4-13", f:"Kostenparadox (Kaufkrafttheorie der Löhne)", b:"Voraussetzung: Lohnbezieher:innen geben einen größeren Teil ihres Einkommens aus als Gewinnbezieher:innen.\nWirkung: Höhere Löhne erhöhen die Nachfrage und Y*.\nParadox: Alle Unternehmen haben höhere Kosten, trotzdem können die Gewinne insgesamt steigen.\n$ Π = Y − W"},
 {id:"c4-14", f:"Unterschied Gleichgewichtsoutput vs. Vollbeschäftigungsoutput", b:"| | Gleichgewichtsoutput Y* | Vollbeschäftigungsoutput Y_V\n| Was? | Schnittpunkt von Nachfrage und Angebot | Produktion, wenn alle Arbeitswilligen Arbeit haben\n| Hängt ab von | der Nachfrage (Multiplikator) | Arbeitskräften und Produktivität\nBeide müssen **nicht übereinstimmen**. Die Differenz ist die Output-Lücke."},
 {id:"c4-15", f:"„Sag mir, was du über die Kausalität von S = I denkst …“", b:"„… und ich sage dir, was für ein Ökonom du bist.“\n| | Neoklassik | Keynesianismus\n| Richtung | S → I | I → S\n| Bedeutung | Die Ersparnis finanziert über den Zins die Investitionen. | Die Investitionen schaffen über das Einkommen die Ersparnis."}
];

GRAPHS[3]=[
 {id:"g3a", t:"Neoklassik: Mindestlohn auf dem Arbeitsmarkt", klausur:"Aufgabenblatt 3, Aufgabe 5",
  task:"Der Staat führt einen Mindestlohn oberhalb des Gleichgewichtslohns ein. Zeigen Sie die Wirkung im neoklassischen Arbeitsmarktmodell.",
  check:["Mindestlohn als waagerechte Linie über dem Gleichgewicht","Arbeitsnachfrage L_N beim Mindestlohn abgelesen (links vom Gleichgewicht)","Arbeitsangebot L_A beim Mindestlohn abgelesen (rechts)","Differenz als Arbeitslosigkeit markiert","Folge: weniger Beschäftigung und damit weniger Produktion Y = (Y/H)·H"]},
 {id:"g3b", t:"Neoklassik: höhere Sparneigung am Kapitalmarkt",
  task:"Die Haushalte sparen mehr. Zeigen Sie im neoklassischen Kapitalmarktmodell, wie sich Zins und Investitionen verändern.",
  check:["Sparangebot verschiebt sich nach rechts","Neuer, niedrigerer Gleichgewichtszins","Investitionen steigen (Bewegung entlang der Investitionsnachfrage)","Neues Gleichgewicht mit S = I auf höherem Niveau","Ergänzung: Y bleibt gleich, also sinkt C, wenn I steigt"]}
];
GRAPHS[4]=[
 {id:"g4a", t:"Keynesianisches Kreuz mit Output-Lücke", klausur:"Aufgabenblatt 4, Aufgabe 1c",
  task:"Zeichnen Sie das Gleichgewicht Y* ein. Markieren Sie den Unterschied zwischen Gleichgewichtsoutput und Vollbeschäftigungsoutput und zeigen Sie, wo die Nachfrage für Vollbeschäftigung liegen müsste.",
  check:["Gleichgewicht A im Schnittpunkt mit der 45°-Linie","Y* auf der x-Achse links von Y_V","Negative Output-Lücke zwischen Y* und Y_V markiert","Höhere, parallele Nachfragegerade durch die 45°-Linie bei Y_V","Begriffe: Gleichgewicht bei Unterbeschäftigung"]},
 {id:"g4b", t:"Umverteilung zu den Löhnen", klausur:"Aufgabenblatt 4, Aufgabe 6",
  task:"Zeigen Sie die Wirkung einer Umverteilung von Gewinnen zu Löhnen auf Y*, wenn die marginale Konsumneigung aus Löhnen höher ist als aus Gewinnen und der autonome Konsum gleich bleibt.",
  check:["Gleicher Achsenabschnitt (autonomer Konsum unverändert)","Nachfragegerade wird steiler (höhere durchschnittliche Konsumneigung)","Neues Gleichgewicht B weiter rechts auf der 45°-Linie","Y* steigt","Benennung: Kostenparadox / Kaufkrafttheorie der Löhne"]}
];

ESSAYS[1]=[
 {id:"e1-1", pts:12, q:"Erläutern Sie, warum die Vorlesung verschiedene makroökonomische Paradigmen gegenüberstellt, und beziehen Sie den Beutelsbacher Konsens ein.",
  k:["Wissenschaftstheoretische Gründe: Fallibilismus, Vielschichtigkeit sozialer Realität","Beutelsbacher Konsens: Überwältigungsverbot erklärt","Kontroversitätsgebot: Kontroverses muss kontrovers erscheinen","Kernlehrplan NRW mit sozioökonomischem Leitbild (mündige Wirtschaftsbürger:innen)","Ende der neoklassischen Dominanz durch die Krisen seit 2007","Beispiel für eine Kontroverse (etwa Kausalität von S = I)"],
  m:`Die Vorlesung stellt Neoklassik, Keynesianismus, Klassik und Marxismus sowie ihre modernen Erweiterungen gegenüber, weil es gute wissenschaftstheoretische Gründe für Pluralismus gibt: Wissen ist fehlbar, und die soziale Realität ist vielschichtig und multikausal, sodass keine einzelne Theorie sie vollständig erfassen kann.

Hinzu kommt der Auftrag der politischen Bildung. Nach dem Beutelsbacher Konsens dürfen Schüler:innen nicht im Sinne erwünschter Meinungen überwältigt werden, und was in Wissenschaft und Politik kontrovers ist, muss auch im Unterricht kontrovers erscheinen. Der Kernlehrplan Sozialwissenschaften in NRW formuliert ein sozioökonomisches Leitbild mündiger Wirtschaftsbürger:innen, die kontroverse Positionen zu staatlichen Eingriffen erörtern können.

Schließlich hat die Phase neoklassischer Dominanz mit den Krisen seit 2007 ein Ende gefunden. Ein Beispiel ist die Identität S = I: Neoklassisch bestimmt die Ersparnis über den Zins die Investitionen, keynesianisch bestimmen die Investitionen über das Einkommen die Ersparnis. Daraus folgen gegensätzliche Empfehlungen, die künftige Lehrkräfte kennen müssen.`}
];
ESSAYS[2]=[
 {id:"e2-1", pts:12, klausur:"Aufgabenblatt 1, Aufgabe 7",
  q:"„Wenn man dem Staat verbietet, sich zu verschulden, kann der private Sektor kein Vermögen aufbauen.“ Stimmt das? Erläutern und kommentieren Sie im Lichte der Volkswirtschaftlichen Gesamtrechnung.",
  k:["Salden-Identität: FS_P + FS_St + FS_AL = 0 korrekt angegeben","Geldvermögen des einen sind Schulden des anderen (Summe null)","Ohne Staatsdefizit nur über Leistungsbilanzüberschüsse (Ausland verschuldet sich)","Einschränkung: Gilt für Geldvermögen, nicht für Sachvermögen (Investitionen)","Für die Welt als geschlossene Volkswirtschaft gilt die Aussage für Geldvermögen","Kommentar: Risiken der Exportabhängigkeit / Bewertung der Schuldenbremse"],
  m:`Die Aussage folgt im Kern aus der VGR. Die Finanzierungssalden von Privatsektor, Staat und Ausland addieren sich immer zu null: (Y_HH + Y_F − C − I) + (Y_St − G) + (M − X) = 0. Jedem Geldvermögen steht eine Schuld in gleicher Höhe gegenüber.

Darf sich der Staat nicht verschulden, kann der Privatsektor nur dann einen Finanzierungsüberschuss erzielen und Geldvermögen aufbauen, wenn sich das Ausland verschuldet, das Land also einen Leistungsbilanzüberschuss hat. Für die Welt als Ganzes, eine geschlossene Volkswirtschaft, ist auch das ausgeschlossen.

Einschränken muss man die Aussage für das Sachvermögen: Investiert der Privatsektor, baut er einen Kapitalstock auf, auch ohne Staatsschulden. Gesamtwirtschaftliche Ersparnis ist dann gleich den Investitionen.

Kommentar: Eine strikte Schuldenbremse macht private Vermögensbildung in Geldform also von der Verschuldung des Auslands abhängig. Das birgt, wie die Eurokrise zeigt, Risiken: Geraten die Schuldnerländer in die Krise, sind Exporte und Auslandsvermögen in Gefahr. Aus keynesianischer Sicht sollte der Staat den Sparwunsch des Privatsektors durch Defizite ermöglichen, aus neoklassischer Sicht spiegeln Überschüsse die Präferenzen der Sparer.`},
 {id:"e2-2", pts:12, klausur:"Aufgabenblatt 2, Aufgabe 2",
  q:"Bundeskanzlerin Merkel sagte 2010, Deutschland habe „seit Jahrzehnten über seine Verhältnisse gelebt“, und kündigte Einsparungen an. Erläutern und kommentieren Sie diese Aussage auf Grundlage der Volkswirtschaftlichen Gesamtrechnung.",
  k:["„Über die Verhältnisse leben“ = mehr ausgeben als einnehmen, für ein Land: Leistungsbilanzdefizit","Deutschland hatte Leistungsbilanzüberschüsse, lebte also insgesamt unter seinen Verhältnissen","Privatsektor baut mehr Vermögen auf, als sich der Staat verschuldet","Staatsdefizit spiegelt die Überschüsse des Privatsektors (Salden-Identität)","Sparen des Staates erfordert, dass andere Sektoren ihren Saldo verschlechtern","Keynesianisch: Sparpolitik kann über den Multiplikator die Wirtschaft schwächen"],
  m:`„Über seine Verhältnisse leben“ heißt, mehr auszugeben als einzunehmen. Für ein Land als Ganzes misst das die Leistungsbilanz: Ein Defizit bedeutet, dass das Inland mehr für Güter ausgibt, als es Einkommen hat, und sich im Ausland verschuldet.

Deutschland hatte seit Anfang der 2000er Jahre hohe Leistungsbilanzüberschüsse. Der deutsche Privatsektor baute jedes Jahr mehr Vermögen auf, als sich der deutsche Staat neu verschuldete, also auch gegenüber dem Ausland. Insgesamt lebte Deutschland in diesem Bild unter seinen Verhältnissen.

Die Staatsverschuldung ist im Kreislauf zu sehen: Nach der Salden-Identität entsprechen staatliche Defizite bei ausgeglichener Leistungsbilanz genau den Überschüssen des Privatsektors. Will der Staat sparen, muss ein anderer Sektor seinen Saldo verschlechtern: Entweder sparen die Privaten weniger, oder das Ausland verschuldet sich stärker.

Aus keynesianischer Sicht ist Sparpolitik daher riskant: Über den Multiplikator sinken Einkommen und Steuereinnahmen, das Defizit sinkt weniger als geplant. Aus neoklassischer Sicht kann ein ausgeglichener Haushalt dagegen private Investitionen fördern. Die Aussage verwechselt aber den Staat mit dem ganzen Land.`}
];
ESSAYS[3]=[
 {id:"e3-1", pts:12, klausur:"Aufgabenblatt 3, Aufgabe 1",
  q:"Der Sachverständigenrat schreibt: „Der Anstieg der gesamtwirtschaftlichen Produktivität ist ein entscheidender Faktor für das Wachstum einer Volkswirtschaft und den damit verbundenen Zuwachs an materiellem Wohlstand.“ Kommentieren Sie die Aussage vor dem Hintergrund der BIP-Kritik verschiedener Paradigmen.",
  k:["Aussage setzt BIP-Wachstum mit Wohlstand gleich","Neoklassische Kritik: Externalitäten, Monopolpreise","Keynesianische Kritik: BIP misst nicht nur beschäftigungswirksame Nachfrage; Produktivität erfordert ausreichende Nachfrage","Feministische Kritik: unbezahlte Arbeit, Produktivität bei Sorgearbeit kaum messbar","Ökologische Kritik: Umweltkosten, Grenzen des Wachstums","Evolutionär-institutionelle Kritik: positionaler Konsum","Produktivitätsgewinne können auch in Arbeitszeitverkürzung fließen (Y = Y/H · H)","Begründetes Fazit"],
  m:`Der Sachverständigenrat verknüpft Produktivität, BIP-Wachstum und materiellen Wohlstand. Rein rechnerisch steigt mit der Produktivität Y/H die Produktion je Stunde. Ob daraus mehr Wohlstand wird, hängt aber davon ab, was das BIP misst.

Aus neoklassischer Sicht soll das BIP Wohlfahrt messen, erfasst aber Externalitäten nicht: Die Beseitigung von Umweltschäden erhöht das BIP. Die ökologische Kritik geht weiter: Das BIP blendet die Einbettung ins Ökosystem aus, und mehr Produktion kann mehr Emissionen bedeuten. Die feministische Ökonomik betont, dass unbezahlte Sorgearbeit fehlt und ihre Produktivität kaum messbar ist; ein Wohlstandsbegriff ohne diese Arbeit ist unvollständig. Die evolutionär-institutionelle Kritik verweist auf positionalen Konsum, der im Aggregat die Wohlfahrt nicht erhöht.

Keynesianisch ist zudem fraglich, ob Produktivitätsgewinne überhaupt in Wachstum münden: Ohne ausreichende Nachfrage führt höhere Produktivität bei gleicher Produktion zu weniger Arbeitsstunden, im ungünstigen Fall zu Arbeitslosigkeit. Produktivität kann auch in Arbeitszeitverkürzung fließen, wie Keynes für die „Enkelkinder“ erwartete.

Fazit: Produktivität ist eine wichtige Voraussetzung für Wohlstand. Die Gleichsetzung mit BIP-Wachstum und materiellem Wohlstand übergeht aber Verteilung, unbezahlte Arbeit und ökologische Grenzen.`},
 {id:"e3-2", pts:24,
  q:"„Höhere Staatsausgaben gehen immer zu Lasten privater Investitionen.“ Diskutieren Sie diese Aussage vor dem Hintergrund der Vorlesungsinhalte. Berücksichtigen Sie unterschiedliche theoretische Perspektiven.",
  k:["Identität S = I bzw. Y − C − G_C = I_P + G_I korrekt eingeordnet (gilt immer, sagt nichts über Kausalität)","Neoklassik: Y angebotsseitig über den Arbeitsmarkt bestimmt","Crowding-out: höhere G verdrängen C oder I","Zinsmechanismus: Staatsnachfrage nach Kapital erhöht den Zins","Zahlenbeispiel oder Mechanismus: staatlicher Konsum verdrängt Investitionen","Keynesianisch: Unterauslastung, Nachfrage bestimmt Y","Multiplikator und Crowding-in (Akzelerator: Investitionen steigen mit der Nachfrage)","Defizit spiegelt den Überschusswunsch der Privaten","Unterscheidung staatlicher Konsum vs. staatliche Investitionen","Neuer Konsens: kurzfristig keynesianisch, langfristig neoklassisch","Neuklassik: Ricardianische Äquivalenz","Fazit: Antwort hängt von der Auslastung ab, „immer“ ist nicht haltbar"],
  m:`Die Aussage berührt den Kern des Streits zwischen Neoklassik und Keynesianismus. Unstrittig ist die Identität der VGR: In einer geschlossenen Volkswirtschaft gilt Y − C − G_C = I_P + G_I, also S = I. Über die Kausalität sagt sie nichts.

Aus neoklassischer Sicht ist Y angebotsseitig vorgegeben: Der Arbeitsmarkt bestimmt das Arbeitsvolumen, zusammen mit der Produktivität ergibt sich das Produktionspotenzial. Höhere Staatsausgaben müssen dann privaten Konsum oder private Investitionen verdrängen (Crowding-out). Der Mechanismus läuft über den Kapitalmarkt: Der Staat beansprucht Ersparnis, der Zins steigt, private Investitionen werden unrentabel. Im Zahlenbeispiel der Vorlesung können die privaten Investitionen erst steigen, wenn der Staat seinen Konsum senkt. Die Neuklassik verschärft das mit der Ricardianischen Äquivalenz: Haushalte sparen für künftige Steuern, der Multiplikator geht gegen null.

Aus keynesianischer Sicht gilt das nur bei voller Auslastung. Herrscht Unterbeschäftigung, bestimmt die Nachfrage die Produktion. Staatsausgaben erhöhen über den Multiplikator das Einkommen; steigen mit der Nachfrage auch die Investitionen (Akzelerator), kommt es zu Crowding-in. Im Beispiel der Vorlesung steigen nach höheren Staatsinvestitionen auch Konsum und private Investitionen, das BIP wächst von 100 auf 110. Das Staatsdefizit spiegelt dann den Wunsch der Privaten, Überschüsse zu bilden. Zudem können staatliche Investitionen in Infrastruktur und Bildung private Investitionen erst rentabel machen.

Der Neue Konsens vermittelt: Kurzfristig gilt die keynesianische Logik, langfristig die neoklassische. Entscheidend ist also, ob eine Output-Lücke vorliegt, und genau deren Messung ist umstritten.

Fazit: Bei Vollbeschäftigung ist Verdrängung plausibel, bei Unterauslastung eher das Gegenteil. Das „immer“ der Aussage ist aus Sicht der Vorlesung nicht haltbar.`}
];
ESSAYS[4]=[
 {id:"e4-1", pts:12, klausur:"Aufgabenblatt 4, Aufgabe 5",
  q:"Eine Vertreterin der Versicherungswirtschaft sagt im Unterricht: „Sparen ist eine wichtige Tugend. Wer in der Erwerbsphase viel spart, kann im Alter die Früchte ernten.“ Die Lehrerin ergänzt: „Wir wollen nur hoffen, dass die Unternehmen auch so viel investieren möchten, wie gesamtwirtschaftlich gespart wird.“ Erklären Sie, was die Lehrerin meint.",
  k:["Unterscheidung individuelle vs. gesamtwirtschaftliche Sicht","Identität S = I: Gesellschaft kann nur sparen, indem sie investiert","Neoklassisch: Zinsmechanismus sorgt für I = S, Aussage der Vertreterin stimmig","Keynesianisch: Investitionen hängen von animal spirits ab, nicht von der Ersparnis","Sparparadox: Nachfrage und Einkommen sinken, S steigt nicht","Folge für die Altersvorsorge: künftige Konsummöglichkeiten entstehen nur durch Investitionen"],
  m:`Für einen einzelnen Haushalt hat die Versicherungsvertreterin recht: Wer heute spart, kann später mehr konsumieren. Die Lehrerin weist auf die gesamtwirtschaftliche Ebene hin.

Nach der VGR gilt S = I: Eine Volkswirtschaft kann nur sparen, indem sie investiert. Ob mehr Sparwünsche zu mehr Investitionen führen, ist umstritten. Neoklassisch senkt mehr Ersparnis den Zins, Investitionen steigen, und die heutige Ersparnis erhöht über einen größeren Kapitalstock die künftigen Konsummöglichkeiten.

Keynesianisch hängen die Investitionen aber von den animal spirits ab. Sparen alle mehr, fehlt Nachfrage; Unternehmen investieren eher weniger. Über den Multiplikator sinken die Einkommen, bis die Ersparnis wieder den unveränderten Investitionen entspricht (Sparparadox). Am Ende wird nicht mehr gespart, aber das Einkommen ist gesunken.

Für die Altersvorsorge heißt das: Künftige Renten werden aus künftiger Produktion bezahlt. Gesamtwirtschaftlich sorgt eine Gesellschaft nur durch Investitionen vor, nicht durch Konsumverzicht allein.`}
];

CALC[2]=["vgr","salden","real","schuld"];
CALC[3]=["marx"];
CALC[4]=["herl","ohne","akz","voll"];

/* Mikro-Grundlagen für Makro */
LESSONS[1].push({id:"1-6", t:"Was du aus der Mikroökonomik brauchst", html:`
<p>Die Makro-Vorlesung setzt an einigen Stellen Begriffe aus „Einführung in die Mikroökonomik“ voraus. Mehr als diese sechs brauchst du nicht:</p>
<table class="kv">
<tr><td>Homo oeconomicus</td><td>Das Menschenbild der Neoklassik: Individuen handeln rational und eigennützig, sie wägen Nutzen und Kosten ab und maximieren ihren Nutzen. Aus seinen Entscheidungen werden gesamtwirtschaftliche Ergebnisse abgeleitet (methodologischer Individualismus).</td></tr>
<tr><td>Grenzproduktivität</td><td>Der zusätzliche Output einer zusätzlichen Arbeitsstunde. Sie sinkt, je mehr Arbeit eingesetzt wird. Ein Unternehmen stellt nur ein, solange der Reallohn w/p nicht über der Grenzproduktivität liegt. Daraus folgt die fallende Arbeitsnachfrage im neoklassischen Arbeitsmarkt: Ein höherer Lohn bedeutet weniger Beschäftigung (Kapitel 3).</td></tr>
<tr><td>Einkommens- und Substitutionseffekt</td><td>Steigt der Stundenlohn, wird Freizeit teurer, man arbeitet mehr (Substitutionseffekt). Gleichzeitig ist man reicher und kann sich mehr Freizeit leisten, man arbeitet weniger (Einkommenseffekt). Keynes erwartete langfristig, dass der Einkommenseffekt dominiert und die Arbeitszeit sinkt (Kapitel 3, „Enkelkinder“).</td></tr>
<tr><td>Lebenszyklushypothese</td><td>Neoklassisch planen Haushalte ihren Konsum über das ganze Leben und glätten ihn: Sie konsumieren nach dem erwarteten Lebenseinkommen, nicht nach dem laufenden. Das ist die Gegenposition zur keynesianischen Konsumfunktion C = c₀ + c₁Y (Kapitel 4).</td></tr>
<tr><td>Komparative Kostenvorteile</td><td>Nach Ricardo lohnt sich Handel auch dann, wenn ein Land alles billiger herstellen kann: Jedes Land spezialisiert sich auf das, was es relativ am günstigsten produziert. Darauf stützt sich die neoklassische Aussage „Freihandel steigert die Wohlfahrt“ (Kapitel 3).</td></tr>
<tr><td>Externalitäten</td><td>Kosten oder Nutzen, die bei Dritten anfallen und nicht im Preis stecken, etwa Umweltschäden. Grundlage der neoklassischen BIP-Kritik und der Umweltökonomik (Kapitel 3).</td></tr></table>
<div class="merk"><b>Tipp</b>Wenn auf einer Folie „vgl. Einführung in die Mikroökonomik“ steht, ist fast immer einer dieser Begriffe gemeint.</div>`,
check:[
 {q:"Warum fällt im neoklassischen Modell die Arbeitsnachfrage mit steigendem Reallohn?", o:["Weil die Preise steigen","Weil die Grenzproduktivität der Arbeit mit mehr Beschäftigung sinkt","Weil Gewerkschaften streiken","Weil die Nachfrage sinkt"], a:1, ex:"Unternehmen stellen nur ein, solange w/p ≤ Grenzproduktivität. Bei höherem Lohn lohnen sich weniger Arbeitsstunden."},
 {q:"Der Stundenlohn steigt, und jemand arbeitet weniger. Welcher Effekt dominiert?", o:["Substitutionseffekt","Einkommenseffekt","Multiplikatoreffekt","Crowding-out"], a:1, ex:"Er kann sich mit weniger Arbeit denselben Lebensstandard leisten und nimmt mehr Freizeit."}
]});
CARDS[1].push(
 {id:"c1-14", f:"Homo oeconomicus", b:"Rational und eigennützig handelndes Individuum, das seinen Nutzen maximiert. Menschenbild der Neoklassik."},
 {id:"c1-15", f:"Grenzproduktivität der Arbeit und Arbeitsnachfrage", b:"Zusätzlicher Output je zusätzlicher Arbeitsstunde, sinkend. Unternehmen stellen ein, solange der Reallohn w/p (Lohn geteilt durch Preisniveau) nicht über der Grenzproduktivität liegt. Daher fällt die Arbeitsnachfrage mit dem Reallohn."},
 {id:"c1-16", f:"Einkommens- vs. Substitutionseffekt beim Arbeitsangebot", b:"Höherer Lohn: Freizeit wird teurer, man arbeitet mehr (Substitution). Man ist reicher, man arbeitet weniger (Einkommen)."},
 {id:"c1-17", f:"Lebenszyklushypothese", b:"Konsum richtet sich nach dem erwarteten Lebenseinkommen, nicht nach dem laufenden (z. B. leiht sich eine Studentin Geld, weil sie später mehr verdienen wird). Neoklassische Gegenposition zur keynesianischen Konsumfunktion."},
 {id:"c1-18", f:"Komparative Kostenvorteile", b:"Jedes Land spezialisiert sich auf das, was es relativ am günstigsten produziert (Ricardos Beispiel: England Tuch, Portugal Wein, obwohl Portugal beides billiger herstellen konnte). Basis der neoklassischen Freihandelsposition (Ricardo)."}
);
