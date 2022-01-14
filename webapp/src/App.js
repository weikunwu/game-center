import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import axios from 'axios'

function App() {
  const [games, setGames] = useState({})

  useEffect(() => {
      axios.get('/api/games').then(response => {
          setGames(response.data.games)
      }).catch(error => {
          console.log(error)
      })
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/home" />} />
        <Route path="/home" exact element={
          <Home games={games}/>
        } />
        {games.length > 0 ? games.map((game) => {
          return (
            <Route path={`/${game}`} exact element={
              <div>{game}</div>
            } />
          )
        }) : "loading"}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;