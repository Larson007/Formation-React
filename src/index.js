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


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';


// ReactDOM.render(
//   React.createElement('h1', null, 'hello world!'),
//   document.getElementById('root')
// );