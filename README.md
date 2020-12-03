# Codebeispiele für den Fachartikel "Snowpack - ungebundelte Entwicklung"

Das vorliegende Projekt Demo-Projekt besteht aus drei Bestandteilen: Die eigentliche Demo-Anwendung ("sp_demo_app") und zwei Bibliotheken die auf npm veröffentlicht wurden:
* sp_demo_dep_cjs: [npm](https://www.npmjs.com/package/@zaphod1984/sp_demo_dep_cjs) / [lokal](./sp_demo_dep_cjs)
* sp_demo_dep_esm: [npm](https://www.npmjs.com/package/@zaphod1984/sp_demo_dep_esm) / [lokal](./sp_demo_dep_esm)

Die beiden Bibliotheken dienen nur dem Zweck der Dokumentation und Referenz.

Die Demo-Anwendung ist unter [sp_demo_app](./sp_demo_app) zu finden. Um die die Anwendung auszuführen sind ein paar einfache Schritte notwendig (Vorraussetzung ist eine aktuelle Version von node.js):

## Installation der Abhängigkeiten
```bash
$ cd sp_demo_app
$ npm i
```

## Start im Entwicklungs-Modus
```bash
$ npm run dev
```

## Erzeugung eines Produktions-Builds
```bash
$ npm run build
```