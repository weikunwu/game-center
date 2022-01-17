import { Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Games from './Games';

const Home = ({ games }) => {
  return (
    <Fragment>
      <Typography
        variant="h3"
        noWrap
        component="div"
        sx={{ mt: 2, mb: 2, color: "#1976d2" }}
      >Game Center</Typography>
      <Games games={games} />
    </Fragment>
  );
}

export default styled(Home)`

`;