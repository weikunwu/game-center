import './App.css';
import React, { Fragment, useEffect, useState } from 'react';
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
      <NavBar />
      <Routes>
        {games.length > 0 ?
          <Fragment >
            {games.map((game) => {
              return (
                <Route path={`/${game}`} exact element={
                  <div>{game}</div>
                } />
              )
            })}
            <Route path="*" element={<Navigate replace to="/pagenotfound" />} />
          </Fragment>
          : "loading"}
        <Route path="/" exact element={<Navigate replace to="/home" />} />
        <Route path="/home" exact element={
          <Home games={games} />
        } />
        <Route path="/pagenotfound" element={<div>Page Not Found</div>} />
        <Route path="/login" exact element={
          <div>Login</div>
        } />
        <Route path="/signup" exact element={
          <div>Sign Up</div>
        } />
      </Routes>
    </div>
  );
}

export default App;