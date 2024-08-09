import React from 'react';

import { Box, Grid, Button, Container, Typography } from '@mui/material';

const NewsComponent = () => {
  const newsItems = [
    {
      title: "WHAT'S NEW",
      description: 'VOIR LES DERNIÈRES ACTUALITÉS',
      buttonText: 'VOIR PLUS',
      date: '',
    },
    {
      title: 'PRESS RELEASE',
      description: "FORT DÉMARRAGE DE L’ANNÉE ; PERSPECTIVES 2024 CONFIRMÉES",
      date: 'Apr. 25 2024',
      buttonText: 'VOIR PLUS',
    },
    {
      title: 'NEWS',
      description: "BUREAU VERITAS NOMMÉ FOURNISSEUR MONDIAL DE CERTIFICATION POUR LA CERTIFICATION DES BÂTIMENTS ÉCOLOGIQUES EDGE PAR LA SFI",
      date: 'Apr. 5 2024',
      buttonText: 'VOIR PLUS',
    },
    {
      title: 'PRESS RELEASE',
      description: "SOLIDE CROISSANCE ORGANIQUE DU CHIFFRE D'AFFAIRES AU TROISIÈME TRIMESTRE, PERSPECTIVES 2023 CONFIRMÉES",
      date: 'Oct. 25 2023',
      buttonText: 'VOIR PLUS',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="stretch">
        {newsItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1">
                {item.description}
              </Typography>
              {item.date && (
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {item.date}
                </Typography>
              )}
              <Button variant="contained" color="primary">
                {item.buttonText}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsComponent;
