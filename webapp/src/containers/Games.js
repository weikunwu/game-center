import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box, Button, Typography } from '@mui/material';
import GameCard from '../components/GameCard';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Games = ({ games }) => {
  const navigate = useNavigate();
  return (
    <Box>
      {games.length > 0 ?
        <Grid container spacing={{ xs: 4, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {games.map((game) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={game}>
                <GameCard game={game} />
              </Grid>
            )
          })}
        </Grid>
        :
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mt: 2, mb: 2, color: "#1976d2" }}
        >Loading</Typography>
      }
    </Box >
  );
}

export default Games;