import React from 'react';

import { Box, Card, Typography } from '@mui/material';

const QuickIntroduction = ({...other }) => (
    <Card {...other}>
    <Box
      sx={{
        padding: '40px 20px',
        textAlign: 'center',
        // backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        À Propos de Nous
      </Typography>
      <Typography variant="body1"  margin="auto">
        Nous sommes une entreprise dédiée à fournir des solutions innovantes et
        sur mesure pour répondre aux besoins de nos clients. Avec une équipe
        expérimentée et passionnée, nous nous engageons à offrir un service de
        qualité et à surpasser vos attentes.
      </Typography>
    </Box>
    </Card>
  );

export default QuickIntroduction;
