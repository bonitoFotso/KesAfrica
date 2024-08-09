import React from 'react';

import { Box, Grid, Card, Avatar, Typography, CardContent } from '@mui/material';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jean Dupont',
      feedback: 'Excellent service! Je suis très satisfait de la qualité et de la rapidité.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Marie Curie',
      feedback: 'Une équipe professionnelle et à l’écoute, je recommande vivement.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Paul Martin',
      feedback: 'Le produit livré a dépassé nos attentes. Merci pour ce travail remarquable!',
      avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
    },
    {
      name: 'Sophie Tremblay',
      feedback: 'Une expérience client exceptionnelle du début à la fin.',
      avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
    },
  ];

  return (
    <Box
      sx={{
        padding: '40px 20px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom textAlign="center">
        Témoignages de nos Clients
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
              }}
            >
              <CardContent>
                <Avatar
                  alt={testimonial.name}
                  src={testimonial.avatar}
                  sx={{ width: 60, height: 60, margin: 'auto', mb: 2 }}
                />
                <Typography variant="body2" color="textSecondary" paragraph>
                  {testimonial.feedback}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                  {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
