import React from 'react';

import { Menu, AppBar, Button, Toolbar, MenuItem, Container, Typography, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify';

function H2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [langEl, setLangEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangClick = (event) => {
    setLangEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setLangEl(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Cameroun
          </Typography>
          <Button color="inherit" href="/fr/newsroom/calendrier-des-formations-2022">
            News: Calendrier des formations 2022
          </Button>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="search"
            aria-controls="search-menu"
            aria-haspopup="true"
          >
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="language"
            onClick={handleLangClick}
            aria-haspopup="true"
          >
            fr
          </IconButton>
          <Menu
            id="language-picker-dropdown"
            anchorEl={langEl}
            open={Boolean(langEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component="a" href="/node">
              en
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/fr/node">
              fr
            </MenuItem>
          </Menu>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            aria-haspopup="true"
          >
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>
          <Menu
            id="main-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component="a" href="/fr/expertise-sustainability">
              EXPERTISE DÉVELOPPEMENT DURABLE
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/fr/who-we-are">
              Qui sommes-nous ?
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/markets-services">
              Nos Marchés
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default H2;
