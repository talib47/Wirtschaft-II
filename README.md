# Wirtschaft II – Lern-App (Makroökonomik)

Live: https://talib47.github.io/Wirtschaft-II/

Eine Datei (`index.html`, Vanilla-JS, kein Framework), gebaut aus den Modulen in `src/`:

```
python3 build.py      # erzeugt index.html neu
```

## Aufbau von `src/`

| Datei | Inhalt |
|---|---|
| `head.html` | Kopf, Icons, Manifest, komplettes CSS (Farben als Tokens, Dunkelmodus), Zoom |
| `core.js` | Speicher (`localStorage`), Geräte-Abgleich über GitHub, Hilfsfunktionen, `judge()` |
| `format.js` | Textformat: Karten-Rückseiten (Listen, Begriff: Erklärung, Formelbox, Vergleichstabelle), Beispielboxen, Kopierhilfe |
| `model.js`, `model2.js` | Rechenaufgaben-Generatoren (Schritte mit Erklärung, 3 Stufen) |
| `content*.js` | Kapitel, Lektionen, Karten, Grafiken, Essays, Rechentypen je Kapitel |
| `cardinfo.js` | Kontextzeile (Vorderseite) und dezente i-Infos (Rückseite) je Karte |
| `wipocc.js` | Links zu passenden Erklärseiten je Lektion |
| `views.js` | Startseite, Kapitel, Lektionen, Karten mit Wiederholungsplan, Statistik |
| `symbols.js` | Symbole und Formeln: Karten in beide Richtungen und Lexikon |
| `recall.js` | Verständnisfragen: erst abrufen, dann Auswahl; eigener Wiederholungsplan (`state.qbox`) |
| `who.js` | „Wer sagt das?“: Aussagen den Denkschulen zuordnen |
| `session.js` | Tägliche Einheit „Heute“: gemischte Schritte mit Schrittleiste |
| `plan.js` | Klausurtermin, Probeklausur-Plan, Schwachstellen in der Statistik |
| `gfx2.js` | SVG-Grafiken |
| `exam.js` | Kurzfragen und Probeklausur mit Timer und Selbstbewertung |
| `task.js`, `start.js` | Aufgabenansicht, Start, Zoom, Token aus dem Link |

## Geräte-Abgleich

- Fortschritt liegt als `fortschritt.json` im Zweig `fortschritt` dieses Repos (GitHub-Contents-API, neuerer `state.updated` gewinnt, Abgleich alle 30 s).
- Gerät verbinden: `https://talib47.github.io/Wirtschaft-II/#t=<GitHub-Schlüssel>` einmal öffnen.
- Eigene Schlüssel pro App, damit nichts kollidiert: `w2-lernapp-v1`, `w2-gh-token`, `w2-zoom`.

## Neue App nach diesem Muster

1. Neues Repo unter `talib47` anlegen, diesen Inhalt kopieren.
2. In `core.js` `KEY`, `GH.repo`, `GH.tokenKey` und in `start.js` den Zoom-Schlüssel ändern (eigenes Präfix).
3. Titel, Farbe, Icons, `manifest.webmanifest`, Pfade in `head.html` anpassen.
4. `content*.js`, `cardinfo.js`, `wipocc.js`, Generatoren und Grafiken durch eigene Inhalte ersetzen.
5. GitHub Pages aktivieren (Settings → Pages → Branch `main`, Ordner `/`) und dem GitHub-Schlüssel Zugriff auf das neue Repo geben.
