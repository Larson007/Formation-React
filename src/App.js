import './App.css';
import React, { useState, useEffect } from 'react';

// https://api.github.com/users/larson007

function App({login}) {

  const [data, updateData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    
    if (!login) return
    setLoading(true)

    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then((updateData))
    .then(() => setLoading(false))
    .catch(setError)
  }, [login])

  if (loading) return <h1>Loading</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (!data) return null

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img src={data.avatar_url} alt={data.login}></img>
    </div>
)}

export default App;
