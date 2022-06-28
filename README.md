# React

&nbsp;

---
---

## **SOMMAIRES**

* [**Installation**](##Installation)

* [**Components**](##Components)
  * [**Single Components**](##Single-Components)
  * [**Dynamic Data**](##Dynamic-Data)

* [**Getting Started with Create React App**](##Getting-Started-with-Create-React-App)


&nbsp;

---

&nbsp;

## Installation

### **NODE & NPM**

Pour travailler avec `React`, on va avoir besoin d'installer des dépendances.

Nous commencons par vérifier dans le terminal si Node et npù sont déja présent :

````bash
node --version
npm --version
````

&nbsp;

Si ce n'est pas le cas, il suffit de ce rendre sur le site de `Node` pour installer les 2 outils d'environnement :

> <https://nodejs.org/fr/>

*L'installer de `Node` va également installer `npm`*

&nbsp;

### **React Create App**

`Create React App` permet de créer de petit application `React`:

> <https://create-react-app.dev/>

Il suffit de ce positionner dans le dossier de travail et d'entrer les lignes de `cmd` suivantes dans le terminal :

````bash
npx create-react-app my-app
cd my-app
npm start
````

&nbsp;

#### La structure du projet sera la suivante :

![Structure](md/structure.png)

&nbsp;

### **Boostrap**

> <https://getbootstrap.com/>

````bash
npm i bootstrap@5.2.0-beta1 --save
````

````js
// src/index.js

import 'bootstrap/dist/css/bootstrap.min.css';
````

&nbsp;

### **React Icons**

> <https://react-icons.github.io/react-icons>

````bash
npm install react-icons --save
````

````js
// src/index.js

// Exemple d'icons Fontawesome importer
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa'
````

&nbsp;

### **JQuery**

````bash
npm install jquery --save
````

&nbsp;

### **Popper.js**

````bash
npm install popper.js --save
````

&nbsp;

---

&nbsp;

## Components

### Single Components

````js
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>
);
````

````js
// App.js

import './App.css';

function Header() {
  return (
    <header>
      <h1>Mon application React</h1>
    </header>
  )
}

function Main() {
  return (
    <header>
      <p>création d'un élément</p>
    </header>
  )
}

function Footer() {
  return (
    <header>
      <p>Copyright &copy; 2022</p>
    </header>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

````

&nbsp;

---

&nbsp;

## Dynamic Data

On va utiliser des `props` qui est un `object` en params de nos fonctions :

````js
// App.js

import './App.css';

function Header(props) {

  console.log(props);

  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(props) {
  return (
    <header>
      <p>création d'un élément{props.adjectives}</p>
    </header>
  )
}

function Footer(props) {
  return (
    <header>
      <p>Copyright &copy; {props.year}</p>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header name='Mon application React'/>
      <Main adjectives=' : dynamic data'/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

````

&nbsp;

---

&nbsp;

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
