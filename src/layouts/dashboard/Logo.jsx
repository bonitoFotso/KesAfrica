import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

// import { HEADER } from './config-layout';

// const SPACING = 8;


const Logo = ({ src, alt }) => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // bgcolor: "white",
        zIndex: 1000,
        // py: `${HEADER.H_MOBILE + SPACING}px`,
        img: {
          maxWidth: '100%',
          height: 'auto',
          maxHeight: { xs: '50px', sm: '75px', md: '75px' },
        },
      }}
    >
      <img src={src} alt={alt} />
    </Box>
  );

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Logo.defaultProps = {
  alt: 'Company Logo',
};

export default Logo;
