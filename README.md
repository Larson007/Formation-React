# React

&nbsp;

---
---

## **SOMMAIRES**

* [**Installation**](##Installation)

* [**Syntaxe**](##Syntaxe)
  * [**Single Components**](###Single-Components)
  * [**Dynamic Data**](###Dynamic-Data)
  * [**Working with Lists**](###Working-with-Lists)
  * [**Adding keys to Lists**](###Adding-keys-to-Lists)
  * [**Display images**](###Display-Images)
  * [**Fragments**](###Fragments)
  * [**Css**](###Css)
  
* [**Les States**](##Les-States)
  * [**Conditional Rendering**](##Conditional-Rendering)
  * [**useState**](##useState)
  * [**useEffect**](##useEffect)
  * [**useReducer**](##useReducer)

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

#### La structure du projet sera la suivante

![Structure](md/structure.png "structure dossier")

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

## Syntaxe

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

### Dynamic Data

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

### Working with Lists

````js
// App.js

import './App.css';

function Header(props) {

  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(props) {
  return (
    <header>
      <p>Création d'un élément{props.adjectives}</p>
      <ul>
        {props.formations.map((formation) => (<li>{formation}</li>))}
      </ul>
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

const formations = [
  "Installation",
  "Components",
  "Dynamic Data",
  "React Create App"
]

function App() {
  return (
    <div className="App">
      <Header name='Mon application React'/>
      <Main adjectives=' - Cours : ' formations={formations}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

````

&nbsp;

---

&nbsp;

### Adding keys to Lists

React nécéssite que chaque donnée dynamique soit soit doté de son propre `id`.
On va donc placé nos données das un `object` et passé les données en `props` :

````js
// App.js

import './App.css';

function Header(props) {

  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(props) {
  return (
    <header>
      <p>Création d'un élément{props.adjectives}</p>
      <ul>
      <!-- 3. On affects les props -->
        {props.formations.map((formation) => (<li key={formation.id}>{formation.title}</li>))}
      </ul>
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

const formations = [
  "Installation",
  "Components",
  "Dynamic Data",
  "React Create App"
]

// 1. On créer un object qui va boucler dans le tableau formations & auquel on bind les données a des clés.
const formationsObjects = formations.map((formation, formation_id) => (
  {
    id: formation_id,
    title: formation
  }
))

console.log(formationsObjects);


// 2. On passe l'object en props
function App() {
  return (
    <div className="App">
      <Header name='Mon application React' />
      <Main adjectives=' - Cours : ' formations={formationsObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

````

&nbsp;

---

&nbsp;

### Display images

Les images stocker localement doivent être importer :

````js
// App.js

import './App.css';
import img from './images/formations.jpg'

...

function Main(props) {
  return (
    <header>
      <p>Création d'un élément{props.adjectives}</p>
      <img src={img} alt={'formation'} height={200} />
      <img src='https://avatars.githubusercontent.com/u/39912616?v=4' alt='github_photo' height={200} />
      <ul>
        {props.formations.map((formation) => (<li key={formation.id}>{formation.title}</li>))}
      </ul>
    </header>
  )
}
...

export default App;
````

&nbsp;

---

&nbsp;

### Fragments

Avec `React`, on ne peut pas avoir dans les `composants` **plusieurs balises au même niveau**.

Ici `<App />` et le `<AppTwo />` sont au même niveau d'imbrication ce qui provoque une erreur de syntaxe.

*Pour remédier à ce problème il suffit de les imbriquer dans une `div`.*

**Cependant pour éviter de polluer le code de balise inutile, `React` propose un composent appelé `Fragment`.**

Il suffit d'englober notre code de la balise React suivante :

* `<React.Fragment>...</React.Fragment>` ou sa syntaxe courte `<>...</>`

````js
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function AppTwo() {
    return (
        <h1>Voiçi une seconde App</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        <AppTwo />
    </>
);
````

&nbsp;

---

&nbsp;

### Css

Le `css` fonctionne dans `React` comme en `html`.

Cependant pour définir une `class`, il faut le nommée `className` et `importer` le fichier dans le composent qui sollicite la feuille de style `css` :

````js
// App.js

import './App.css';
import img from './images/formations.jpg'

function Header(props) {

  return (
    <header className='header-styles'>
      <h1>{props.name}</h1>
    </header>
  )
}
...
export default App;

````

&nbsp;

---

&nbsp;

## Les States

### Conditional Rendering

````js
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    {/* Si true alors on affiche SecretComponent, si false RegularComponent */}
        <App authorized={false}/>
    </>
);
````

````js
// App.js

import './App.css';

function SecretComponent() {
  return (
    <h1>Informations pour utilisateur autorisé uniquement</h1>
  )
}

function RegularComponent() {
  return (
    <h1>Informations disponibles pour tous</h1>
  )
}

function App(props) {
  return (
    <>
      {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

export default App;

````

&nbsp;

---

&nbsp;

### useState

Pour utiliser le `useState`, on commence par l'importer depuis `React`

````js
// App.js

import React, {useState} from 'react';
````

&nbsp;

Le `UseState` nous retourne 2 éléments :

* Le `State` ***value***

* Une `fonction` qui va mettre à jour la ***value***

&nbsp;

Dans l'exemple suivant, on destructure un tableau pour changer dynamiquement la value :

````js
// App.js

import './App.css';
import React, {useState} from 'react';

function App() {

const [first, changeFirst] = useState('in a Good Mood!')
console.log(first);

  return (
    <>
      <h1>Today, i am {first}</h1>
      <button onClick={() => {changeFirst("in Happy Mood")}} >change Mood to Happy</button>
      <button onClick={() => {changeFirst("in Sad Mood")}} >change Mood to Sad</button>
      <button onClick={() => {changeFirst("in Bad Mood")}} >change Mood to Bad</button>
    </>
  )
}

export default App;

````

&nbsp;

---

&nbsp;

### useEffect

````js
// App.js

import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

const [first, changeFirst] = useState('in a Good Mood')

const [secondary, changeSecondary] = useState('Nice')

useEffect(() => {
  console.log(`We are ${first} today!`)
}, [first])

useEffect(() => {
  console.log(`It's ${secondary} here!`)
}, [secondary])

  return (
    <>
      <h1>Today, i am {first}</h1>
      <button onClick={() => {changeFirst("in Happy Mood")}} >change Mood to Happy</button>
      <button onClick={() => {changeFirst("in Sad Mood")}} >change Mood to Sad</button>
      <button onClick={() => {changeFirst("in Bad Mood")}} >change Mood to Bad</button>
      <button onClick={() => {changeSecondary('Awesome')}} >change day to awesome</button>
      <button onClick={() => {changeSecondary('Great')}} >change day to great</button>
    </>
  )
}

export default App;
````

&nbsp;

---

&nbsp;

### useReducer

Sans le `useReducer` :

````js
// App.js

import './App.css';
import React, {useState} from 'react';

function App() {

  const [checked, setChecked] = useState(false)

  return (
    <>
      <input type='checkbox' value={checked} onChange={
        () => setChecked((checked) => !checked)
      } />
      <p>{checked ? 'checked' : 'not checked'}</p>
    </>
  )
}

export default App;
````

&nbsp;

Avec le `useReducer` :

````js
// App.js

import './App.css';
import React, { useReducer } from 'react';

function App() {

  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  )

  return (
    <>
      <input type='checkbox' value={checked} onChange={toggle} />
      <p>{checked ? 'checked' : 'not checked'}</p>
    </>
  )
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
