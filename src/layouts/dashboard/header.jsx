import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

import Logo from './Logo';
import { HEADER } from './config-layout';
import Searchbar from './common/searchbar';
import LanguagePopover from './common/language-popover';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const renderTopStrip = (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        p: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Grid>
      <Searchbar />


      </Grid>
            
      <Button color="inherit" sx={{ ml: 2 }}>
        Aide
      </Button>
      <Button color="inherit" sx={{ ml: 2 }}>
        Assistance
      </Button>
      <Button color="inherit" sx={{ ml: 2 }}>
        Connexion
      </Button>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}
    </Box>
  );

  const renderContent = (
    <>
             <Logo src="/assets/logo1.png" alt="Company Logo" />



      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={2}>
        <Button href="#home">Page d Accueil</Button>
        <Button href="#about">À Propos</Button>
        <Button href="#services">Services</Button>
        <Button href="#projects">Projets / Réalisations</Button>
        <Button href="#blog">Blog / Actualités</Button>
        <Button href="#contact">Contact</Button>
        <Button href="#faq">FAQ</Button>

        <LanguagePopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: 'none',
        width: '100%',
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      {renderTopStrip}
      <Toolbar
        sx={{
          height: HEADER.H_MOBILE,
          px: { lg: 5 },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
