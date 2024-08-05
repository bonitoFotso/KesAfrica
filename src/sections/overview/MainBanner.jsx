import React from 'react';

import { Box, Button, Typography } from '@mui/material';

export default function  MainBanner() {

    <Box
    sx={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Video Background Example */}
    {/* 
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      <source src="your-video-url.mp4" type="video/mp4" />
    </video>
    */}

    <Box
      sx={{
        maxWidth: '800px',
        zIndex: 1,
        px: 2,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Votre Slogan Ici
      </Typography>
      <Typography variant="h5" paragraph>
        Un court texte accrocheur qui décrit votre service ou produit.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="#"
      >
        En savoir plus
      </Button>
    </Box>
  </Box>
}

