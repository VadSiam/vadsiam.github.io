import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Experience = () => {
  const experiences = [
    {
      image: '/screen/cake.png',
      title: 'Cake DeFi',
      description: '• Created huge web app, frontend with React and backend part with NodeJS, made a major contribution to the development.\n• Conducted daily code reviews for teams in GitHub, made full integrations with third - party companies(login, swap data)',
    },
    {
      image: '/screen/cake1.jpg',
      title: 'Cake DeFi',
      description: '• Created huge mobile app, frontend with React Native and backend part with NodeJS, made a major contribution to the development.\n• Conducted daily code reviews for teams in GitHub, wrote a full flow push notification service for mobile app(FE + BE)',
    },
    // Add more experiences as needed
  ];

  return (
    <Carousel>
      {experiences.map((experience, index) => (
        <div key={index}>
          <Card sx={{
            backgroundColor: 'background.paper',
            color: 'primary.main',
            border: '1px solid',
            borderColor: 'secondary.main'
          }}>
            <CardMedia
              component="img"
              image={experience.image}
              alt={experience.title}
              height={600}
              sx={{ width: 'auto!important' }}
            />
            <CardContent>
              <Typography
                sx={{ color: 'secondary.main', }}
                variant="h5"
              >
                {experience.title}
              </Typography>
              <br />
              <Typography
                sx={{ whiteSpace: 'pre-line' }}
                variant="body1"
              >
                {experience.description}
              </Typography>
              <br />
            </CardContent>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default Experience;
