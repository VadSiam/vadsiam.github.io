import React from 'react';
import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';


const Hobbies = () => {

  return (
    <div id='Hobbies'>
      <Typography variant="h4">
        Hobbies
      </Typography>
      <Card
        id="Hobbies"
        sx={{
          backgroundColor: 'background.paper',
          color: 'primary.main',
          border: '1px solid',
          borderColor: 'secondary.main'
        }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: 'cover',
            height: '300px',
          }}
          image="/img/cycling.jpg"
          alt="Vadim Shamigulov"
        />
        <CardContent>
          <Typography variant="h4">
            Road cycling
          </Typography>
          <Divider />
          <br />
          <Typography
            variant="body1"
            sx={{ fontSize: 18 }}
          >
            My main hobby is road cycling. Follow me at <a style={{ color: '#ff3d80' }} href='https://www.strava.com/athletes/vnevod'>Strava</a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hobbies;
