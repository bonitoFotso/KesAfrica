import React from 'react';

import { Box, Grid, Paper, Typography } from '@mui/material';

const KeyStatistics = () => {
  const statistics = [
    { label: 'Projets Réalisés', value: 120 },
    { label: 'Clients Satisfaits', value: 95 },
    { label: 'Années d\'Expérience', value: 10 },
    { label: 'Partenaires', value: 50 },
  ];

  return (
    <Box
      sx={{
        padding: '40px 20px',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom textAlign="center">
        Nos Statistiques Clés
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {statistics.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: '20px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
              }}
            >
              <Typography variant="h4" component="p" color="primary" gutterBottom>
                {stat.value}+
              </Typography>
              <Typography variant="subtitle1" component="p">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyStatistics;
