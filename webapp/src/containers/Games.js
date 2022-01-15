import React, { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Games = ({ games }) => {
  return (
    <Box>
      <Grid container spacing={{ xs: 4, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {games.length > 0 ? games.map((game) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                <img alt={game} src={`/assets/${game}.png`}/>
                <Link to={`/${game}`}>{game}</Link>
              </Item>
            </Grid>)
        }) : "loading"}
      </Grid>
    </Box >
  );
}

export default Games;