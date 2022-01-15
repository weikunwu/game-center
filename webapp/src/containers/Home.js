import { Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import styled from 'styled-components'

const Home = ({ games }) => {
  return (
    <Fragment>
      <Typography
        variant="h3"
        noWrap
        component="div"
        sx={{ mt: 2, mb: 2 }}
      >Game Center</Typography>
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