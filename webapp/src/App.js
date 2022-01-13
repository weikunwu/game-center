import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios'

function App() {
  const [games, setGames] = useState({})

  useEffect(()=>{
    axios.get('/api/games').then(response => {
      console.log("SUCCESS", response)
      setGames(response.data.games)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={
          games.length > 0 ? games.map((game) => {
            return <Link to={`${game}`}>{game}</Link>
          }):"loading"
        }>
        </Route>
        {games.length > 0 ? games.map((game) => {
          return (
            <Route path={`/${game}`} exact element={
              <div>{game}</div>
            }/>
          )
        }):"loading"}
        
      </Routes>
    </div>
  );
}

export default App;