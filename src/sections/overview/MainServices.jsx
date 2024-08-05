import React from 'react';

import { Box, Grid, Button, Typography } from '@mui/material';

const MainServices = () => {
  const services = [
    {
      title: 'Service 1',
      description: 'Description courte de Service 1.',
      link: '/service1',
    },
    {
      title: 'Service 2',
      description: 'Description courte de Service 2.',
      link: '/service2',
    },
    {
      title: 'Service 3',
      description: 'Description courte de Service 3.',
      link: '/service3',
    },
    {
      title: 'Service 4',
      description: 'Description courte de Service 4.',
      link: '/service4',
    },
  ];

  return (
    <Box
      sx={{
        padding: '40px 20px',
        backgroundColor: '#fff',
        // p: 3, pb: 1
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom textAlign="center">
        Nos Services Principaux
      </Typography>
      
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                padding: '20px',
                boxShadow: 1,
                borderRadius: 2,
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" paragraph>
                {service.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={service.link}
              >
                En savoir plus
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainServices;
