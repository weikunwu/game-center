import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box, Button, Typography } from '@mui/material';
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
      <Grid container spacing={{ xs: 4, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {games.length > 0 ? games.map((game) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <Button onClick={() => {
                navigate(`/${game}`);
              }}>
                <Item >
                  <img alt={game} src={`/assets/${game}.png`} style={{ width: "100%" }} />
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mt: 2, mb: 2, color: "#1976d2" }}
                  >{game}</Typography>
                </Item>
              </Button>
            </Grid>)
        }) : "loading"}
      </Grid>
    </Box >
  );
}

export default Games;