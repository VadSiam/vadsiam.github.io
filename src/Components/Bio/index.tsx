import React from 'react';
import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { calculateYearsDifference } from '../../utils/helpers';

const startWorkDate = [2015, 4]; // 4 - is May!
const startWorkDateBE = [2021, 5]; // 5 - is June!

const Bio = () => {
  const currentWorkingYears = calculateYearsDifference(startWorkDate);
  const currentWorkingYearsBE = calculateYearsDifference(startWorkDateBE);

  return (
    <Card
      id="BIO"
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
        image="/img/me2.jpg"
        alt="Vadim Shamigulov"
      />
      <CardContent>
        <Typography variant="h4">
          Vadim Shamigulov
        </Typography>
        <Divider />
        <br />
        <Typography
          variant="body1"
          sx={{ fontSize: 18 }}
        >
          I am a Software Engineer with over <span style={{ color: '#ff3d80' }}>{currentWorkingYears} years</span> of experience as a frontend developer and <span style={{ color: '#ff3d80' }}>{currentWorkingYearsBE} years</span> of experience as a full-stack developer. My expertise lies in <span style={{ color: '#ff3d80' }}>TypeScript, React, React Native, NodeJS, NextJS, REST, GraphQL</span>. I have a strong background in problem-solving and creating innovative solutions. I have worked in diverse roles across multiple countries, and I am proficient in English and a native Russian speaker. I hold a Master's Degree equivalent in Industrial Automation Engineering from South Ural State University, Russia. Currently, I am contributing in few startups as a Full-Stack Developer.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Bio;
