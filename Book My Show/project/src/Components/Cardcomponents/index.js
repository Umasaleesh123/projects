import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cardcomponents(Props) {
    const image=Props.image;
    const heading=Props.heading;
    const description=Props.description;
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="green iguana"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}