import React, { Fragment, useEffect, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components'

const Home = ({games}) => {
    return (
        <Fragment>
            <NavBar />
            <ul style={{ listStyle: "none" }}>
                {games.length > 0 ? games.map((game) => {
                    return <li><Link to={`/${game}`}>{game}</Link></li>
                }) : "loading"}
            </ul>
        </Fragment>
    );
}

export default styled(Home)`

`;