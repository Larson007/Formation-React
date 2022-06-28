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
