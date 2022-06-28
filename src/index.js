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


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';


// ReactDOM.render(
//   React.createElement('h1', null, 'hello world!'),
//   document.getElementById('root')
// );