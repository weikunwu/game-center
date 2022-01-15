import { Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import Games from './Games';

const Home = ({ games }) => {
  return (
    <Fragment>
      <Typography
        variant="h3"
        noWrap
        component="div"
        sx={{ mt: 2, mb: 2 ,color:"#1976d2"}}
      >Game Center</Typography>
      <Games games = {games}/>
    </Fragment>
  );
}

export default styled(Home)`

`;