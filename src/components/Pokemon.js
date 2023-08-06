import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material';

export default function PokemonDetails() {
  return (
    <Grid container spacing={2}>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://www.clipartmax.com/png/middle/141-1418644_pokemon-png-images-free-download-high-resolution-of-pokemon.png"
        title="green iguana"
      />
      <CardContent>
       <Stack direction={"row"} spacing={10}> <Typography gutterBottom variant="h5" component="div">
          pokemon Name
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          HP:
        </Typography>
        </Stack>
        <Typography gutterBottom variant="h5" component="div">
          Attacks
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          Abilities
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Image
        </Typography>

        
      </CardContent>
    </Card>
    </Grid>
    </Grid>
  );
}