import React from 'react';

import { Box, Grid, Link, Button, TextField, Typography, } from '@mui/material';

const Footer = () => {
  const handleNewsletterSignup = (event) => {
    event.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup submitted');
  };

  return (
    <Box
      component="footer"
      sx={{
        padding: '40px 20px',
        backgroundColor: '#333',
        color: '#fff',
        mt: 'auto',
      }}
    >
      <Grid container spacing={4}>
        {/* Navigation Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="h2" gutterBottom>
            Navigation Rapide
          </Typography>
          <Link href="/" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
            Accueil
          </Link>
          <Link href="/about" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
            À Propos
          </Link>
          <Link href="/services" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
            Services
          </Link>
          <Link href="/contact" color="inherit" underline="hover" display="block">
            Contact
          </Link>
        </Grid>

        {/* Legal Information */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="h2" gutterBottom>
            Informations Légales
          </Typography>
          <Link href="/terms" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
            Mentions Légales
          </Link>
          <Link href="/privacy" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
            Politique de Confidentialité
          </Link>
          <Link href="/terms" color="inherit" underline="hover" display="block">
            Conditions d Utilisation
          </Link>
        </Grid>

        {/* Newsletter Signup */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="h2" gutterBottom>
            Inscription à la Newsletter
          </Typography>
          <form onSubmit={handleNewsletterSignup}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              size="small"
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              S inscrire
            </Button>
          </form>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} KES AFRICA. Tous droits réservés.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
