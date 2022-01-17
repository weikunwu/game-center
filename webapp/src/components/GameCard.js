import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Paper, Button, Typography } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  return (
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
  )
};

export default GameCard;