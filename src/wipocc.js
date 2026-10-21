/* ================= Vertiefung auf wipocc.de (Online-Lehrbuch des Instituts) ================= */
const W="https://wipocc.de/";
const WIPOCC={
 "1-1":[["Warum gibt es unterschiedliche Meinungen?","warum-gibt-es-unterschiedliche-meinungen/"]],
 "1-2":[["„In the long run …“: Revolutionen in der Wirtschaftsforschung","in-the-long-run-revolutionen-in-der-wirtschaftsforschung/"]],
 "1-3":[["„In the long run …“: Wirtschaftspolitische Ziele im Spiegel ihrer Zeit","in-the-long-run-wirtschaftspolitische-ziele-im-spiegel-ihrer-zeit/"]],
 "1-5":[["Wie wertfrei ist die Volkswirtschaftslehre?","oekonomie-fuer-expertinnen-wie-wertfrei-ist-die-volkswirtschaftslehre-ein-bisschen-wissenschaftsphilosophie/",1]],
 "1-6":[["„Exploring Economics“: Die Neoklassik","exploring-economics-die-neoklassik/"]],
 "2-1":[["Ströme und Bestände, oder: Über Wasserhähne und Badewannen","stroeme-und-bestaende-oder-ueber-wasserhaehne-und-badewannen/"]],
 "2-2":[["Was wächst eigentlich, wenn „die Wirtschaft“ wächst?","was-waechst-eigentlich-wenn-die-wirtschaft-waechst/"],["Die Logik des kumulativen Wachstums","oekonomie-fuer-expertinnen-die-logik-des-kumulativen-wachstums/",1],["Das BIP-Wachstum – ein Zerrbild?","das-bip-wachstum-ein-zerrbild/",1]],
 "2-3":[["Die Produktionsseite","wie-der-kuchen-entsteht-die-produktionsseite/"],["Die Nachfrageseite","wozu-der-kuchen-verwendet-wird-die-nachfrageseite/"],["Die Verteilungsseite","wie-der-kuchen-verteilt-wird-die-verteilungsseite/"],["Crashkurs VGR: Alles klar? (Übung)","chrashkurs-vgr-alles-klar/"]],
 "2-5":[["Der Außenhandel im gesamtwirtschaftlichen Kreislauf","der-aussenhandel-im-gesamtwirtschaftlichen-kreislauf/"]],
 "2-7":[["Überschüsse und Defizite in den letzten Jahrzehnten","in-the-long-run-ueberschuesse-und-defizite-in-den-letzten-jahrzehnten/"],["Eine Geldpolitik für alle: zu wenig für eine Währungsunion?","eine-geldpolitik-fuer-alle-zu-wenig-fuer-eine-erfolgreiche-waehrungsunion/"]],
 "2-8":[["Crashkurs Arbeitsmarktstatistik","crashkurs-arbeitsmarkstatistik-arbeitslosigkeit-richtig-messen/"]],
 "2-9":[["Grundbegriffe der Einkommensverteilung","grundbegriffe-der-einkommensverteilung/"],["Der Gini-Koeffizient","oekonomie-fuer-expertinnen-der-gini-koeffizient/",1]],
 "3-1":[["Das BIP: Eine Zahl mit blinden Flecken?","das-bip-eine-zahl-mit-blinden-flecken/"],["„Exploring Economics“: Die feministische Ökonomik","exploring-economics-die-feministische-oekonomik/"]],
 "3-2":[["Gesamtwirtschaftliche Zusammenhänge aus Sicht der Neoklassik","gesamtwirtschaftliche-zusammenhaenge-aus-der-sicht-der-neoklassik/"],["Arbeitslosigkeit im einfachen neoklassischen Modell (interaktiv)","oekonomie-fuer-expertinnen-arbeitslosigkeit-im-einfachen-neoklassischen-modell/",1]],
 "3-3":[["Wie lässt sich mehr Beschäftigung schaffen? Vier Positionen","wie-laesst-sich-mehr-beschaeftigung-in-europa-schaffen-vier-positionen/"]],
 "3-4":[["Gesamtwirtschaftliche Zusammenhänge aus Sicht des Keynesianismus","gesamtwirtschaftlichen-zusammenhaenge-aus-der-sicht-des-keynesianismus/"]],
 "3-6":[["„Exploring Economics“: Die Marxistische Politische Ökonomie","exploring-economics-die-marxistische-politische-oekonomie/"]],
 "3-7":[["Wer hat recht? Drei Streitpunkte zwischen Angebots- und Nachfrageorientierung","wer-hat-recht-drei-streitpunkte-zwischen-angebots-und-nachfrageorientierung/"],["Angebot oder Nachfrage: Alles klar? (Übung)","angebot-oder-nachfrage-alles-klar/"]],
 "4-2":[["Arbeitslosigkeit im einfachen keynesianischen Modell (interaktiv)","oekonomie-fuer-expertinnen-arbeitslosigkeit-im-einfachen-keynesianischen-modell/",1]],
 "4-6":[["Arbeitslosigkeit im einfachen keynesianischen Modell (interaktiv)","oekonomie-fuer-expertinnen-arbeitslosigkeit-im-einfachen-keynesianischen-modell/",1]],
 "5-1":[["Schließe die Outputlücke!","schliesse-die-outputluecke/"]],
 "5-6":[["Wirkung und Grenzen der Geldpolitik im keynesianischen Grundmodell","oekonomie-fuer-expertinnen-wirkung-und-grenzen-der-geldpolitik-im-keynesianischen-grundmodell/",1]],
 "5-7":[["Wirkung und Grenzen der Geldpolitik im keynesianischen Grundmodell","oekonomie-fuer-expertinnen-wirkung-und-grenzen-der-geldpolitik-im-keynesianischen-grundmodell/",1]],
 "5-8":[["Zwei Länder = zwei Outputlücken","oekonomie-fuer-expertinnen-zwei-laender-zwei-outputluecken/",1]],
 "5-9":[["Die Rückkehr des Streits zwischen den Denkschulen","oekonomie-fuer-expertinnen-die-rueckkehr-des-streits-zwischen-den-denkschulen/",1]],
 "6-1":[["Was sind Folgen von Inflation und Deflation?","was-sind-folgen-von-inflation-und-deflation/"]],
 "6-2":[["Nachfrage, Angebot oder beides? Neoklassik, Keynesianismus und ihre Synthese","nachfrage-angebot-oder-beides-neoklassik-keynesianismus-und-ihre-synthese/"]],
 "6-6":[["Die Inflationssteuerung durch die Geldpolitik","die-inflationssteuerung-durch-die-geldpolitik/"],["Keynesianische Nachfragepolitik in der kurzen Frist (GeoGebra aus der Vorlesung)","https://www.geogebra.org/m/d2ac5jj7"],["Länderspezifische Nachfragesteuerung (GeoGebra aus der Vorlesung)","https://www.geogebra.org/m/fzmhbayk"]],
 "6-7":[["Der Streit um die Wirkungen der „Agenda 2010“","oekonomie-fuer-expertinnen-der-streit-um-die-wirkungen-der-agenda-2010/",1]],
 "7-1":[["„Exploring Economics“: Der Postkeynesianismus","exploring-economics-der-postkeynesianismus/"]],
 "7-3":[["Die Rückkehr des Streits zwischen den Denkschulen (Hysterese, interaktiv)","oekonomie-fuer-expertinnen-die-rueckkehr-des-streits-zwischen-den-denkschulen/",1]],
 "7-4":[["Die Rückkehr des Streits zwischen den Denkschulen (Struktur oder Konjunktur?)","oekonomie-fuer-expertinnen-die-rueckkehr-des-streits-zwischen-den-denkschulen/",1]],
 "7-6":[["Verursacht Ungleichheit Wirtschaftskrisen?","oekonomie-fuer-expertinnen-verursacht-ungleichheit-wirtschaftskrisen/",1]],
 "8-2":[["Ungleichheit, Ungleichgewichte, Instabilität: keynesianisch geprägte Ursachenanalysen","ungleichheit-ungleichgewichte-instabilitaet-keynesianisch-gepraegte-ursachenanalysen/"]],
 "8-4":[["Verursacht Ungleichheit Wirtschaftskrisen?","oekonomie-fuer-expertinnen-verursacht-ungleichheit-wirtschaftskrisen/",1]]
};
function wipoccBox(id){
  const L=WIPOCC[id]; if(!L) return "";
  return `<div class="block"><h3>Vertiefen</h3><p class="small muted" style="margin:0 0 6px">Optional, wenn etwas nicht klickt: wipocc.de ist das Online-Lehrbuch des Instituts mit interaktiven Grafiken.</p>
    <div class="stack">${L.map(([t,u,ex])=>`<a class="wlink" href="${u.startsWith("http")?u:W+u}" target="_blank" rel="noopener">${ex?'<span class="tag core">Expert:innen</span> ':""}${t} ↗</a>`).join("")}</div></div>`;
}
