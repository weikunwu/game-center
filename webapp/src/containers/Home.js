import React, { Fragment, useEffect, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import styled from 'styled-components'

const Home = ({games}) => {
    return (
        <ul style={{ listStyle: "none" }}>
            {games.length > 0 ? games.map((game) => {
                return <li><Link to={`/${game}`}>{game}</Link></li>
            }) : "loading"}
        </ul>
    );
}

export default styled(Home)`

`;