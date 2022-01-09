## Utilisation des components
### Alert Message 
Entrer le message de l'alerte dans la props "message".
Définir le type de message dans pa props "type" : success, info, error, warning.

### Checkbox
Entrer le texte pour la case à cocher dans la props "text".

### Tooltip
Définir le placement de l'info-bulle dans la props "placement" :
    - topLeft, top. topRight, rightTop, right, rightBottom, bottomRight, bottom, bottomLeft, leftBottom, left, leftTop.

### TimeSelect
Définir la grosseur de la selection avec la props "size" : small, large.

### InputForm
Définir la grosseur de l'entré avec la props "size" : small, large.

### PaginationCount
Définir le nombre total de page avec la props "total".
Définir la page courrante par défaut avec la props "defaultCurrent".

### Switch
Définir la grosseur de la switch avec la props "size" : small, "".

### ProgressBar
Définir le niveau de progression dans la props "percent" : 100, 30.

### Popover
Définir le placement du popover dans la props "placement" :
    - topLeft, top. topRight, rightTop, right, rightBottom, bottomRight, bottom, bottomLeft, leftBottom, left, leftTop.
Entrer le titre dans la props "title".
Définir l'action avec la props "trigger" : click, hover, focus.

### Buttons
Définir la grosseur du bouton avec la props "size" : large, "", small.
Définir le type de bouton avec la props "type" : 
    - primary, default, dashed, text, link



[![Build Status](https://travis-ci.com/morewings/cra-template-npm-library.svg?branch=master)](https://travis-ci.com/morewings/cra-template-npm-library)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=morewings/cra-template-npm-library)](https://dependabot.com)
[![dependencies Status](https://david-dm.org/morewings/cra-template-npm-library/status.svg)](https://david-dm.org/morewings/cra-template-npm-library)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7448a6f6-8be5-4d26-b886-f59db21ebb4e/deploy-status)](https://app.netlify.com/sites/cra-template-npm-library/deploys)
[![npm version](https://badge.fury.io/js/cra-template-npm-library.svg)](https://www.npmjs.com/package/cra-template-npm-library)
[![npm](https://img.shields.io/npm/dm/cra-template-npm-library)](https://www.npmjs.com/package/cra-template-npm-library)

# NPM library Create React App template

[Create React App](https://github.com/facebook/create-react-app) (CRA) template to build and publish NPM libraries with **rollup**, **eslint** and **stylelint** configurations. See [full documentation](https://cra-template-npm-library.netlify.com/).

## Usage

```shell script
npx create-react-app %PROJECT_NAME% --template npm-library
``` 
Or
```shell script
yarn create react-app %PROJECT_NAME% --template npm-library
```

Then

```shell script
cd %PROJECT_NAME%
yarn start
```

## Features

- Handles all modern JS features.
- Bundles `commonjs` and `es` module formats.
- [Husky](https://github.com/typicode/husky) for git hooks.
- [Eslint](https://eslint.org/) and [stylelint](https://stylelint.io/).
- [Rollup](https://rollupjs.org/guide/en/) for bundling.
- [Babel](https://babeljs.io/) for transpiling.
- [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) for testing.
- Supports CSS modules, SASS/SCSS, Less and PostCSS.
- [Storybook](https://storybook.js.org/) for documentation and demo.
- And [much more](https://cra-template-npm-library.netlify.com/).

## Contributors

@morewings, @sky0matic
