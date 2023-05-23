import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Pets = () => {
  const experiences = [
    {
      image: '/screen/pet_aivisik.jpg',
      title: 'AIVisik',
      description: '• Autonomy bot which generate images from random search string by country and Midjourney/Dall-E2',
    },
    {
      image: '/screen/pet_aivisik1.jpg',
      title: 'AIVisik',
      description: '• Autonomy bot which generate images from random search string by country and Midjourney/Dall-E2',
    },
    {
      image: '/screen/pet_aivisik2.jpg',
      title: 'Audienzz',
      description: '• Autonomy bot which generate images from random search string by country and Midjourney/Dall-E2',
    },
    {
      image: '/screen/pet_xmlc.png',
      title: 'XMLC',
      description: '• Blockchain project with own tokens and NFT collections for Fashion Industry',
    },
    {
      image: '/screen/pet_zizi.jpg',
      title: 'Zizi',
      description: '• My home cat. Help me at work',
    },
  ];

  return (
    <div
      id="Pets"
    >
      <Typography variant="h4">
        Pets
      </Typography>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
      >
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
    </div>

  );
};

export default Pets;
