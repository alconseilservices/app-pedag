# Structure du projet

Dossier/Fichier | Description
-------|------------
dist | dossier de sortie d'`electron` (généré)
doc | dossier de la documentation du project
e2e | dossier des tests *end-to-end*
hooks | dossier des *hooks* de `cordova`
plaforms | dossier *plaforms*  de `cordova` (généré)
plugins | dossier *plugins* de `cordova` (généré)
res | dossier des ressources `cordova`
src | dossier des sources de l'application `Angular`
typings | dossier des déclérations de types `Typescript`
www | dossier de sortie d'`Angular` (généré)
main.js | fichier d'entrée pour l'application `electron`
electron-builder | fichier de configuration d'`electron-builder`

## Intégration Angular/Cordova/Electron

La structure du projet résulte de la fusion entre 3 squelettes de base des projets d'applications `Angular`/`cordova`/`electron`. Des transformations ont été effectuées afin d'intégrer les 3 squelettes.

### 1. Génération du contenu web
De base, Angular génére le contenu compilé vers le dossier `dist/`. La configuration a été modifié afin de rediriger la sortie vers le dossier `www/`. Ceci a permis de rendre accessible le contenu web, en même temps, à l'application `cordova` et l'application `electron`.
````js
// angular.json
"outputPath": "www/"
````
### 2. Chargement de l'application

L'application `cordova` ne requiert aucune configuration supplémentaire quand à la manière de charger l'application. En effet, `cordova` s'attend à avoir un index.html qui, une fois chargé, initialise l'application.

L'application `electron`, quand à elle, démarre via le point d'entrée configuré au niveau du fichier `package.json` :
````js
// package.json
  "main": "main.js"
````
Ce fichier a été également configuré afin de charger le fichier `index.html` packagé sous le dossier `www/`  :
````js
// main.js
mainWindow.loadFile('www/index.html')
````
L'ensemble du contenu web généré sous `www/` est packagé pour `electron` grâce au fichier de configuration `electron-builder.yml` :
````yaml
# electron-builder.yml

appId: edu.edf.renewableenergy
productName: EDFEnergiesRenouvlables
directories:
  output: dist
  buildResources: build
files:
  - "www/**"
  - "main.js"
  - "!**/node_modules/**/*"
win:
  target:
    - target: portable
      arch:
        - x64
        - ia32
```` 






