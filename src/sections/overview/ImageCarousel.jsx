import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Typography } from '@mui/material';

const ImageCarousel = () => {
  const carouselItems = [
    { title: 'First Slide', imageUrl: '/assets/images/covers/cover_1.jpg' },
    { title: 'Second Slide', imageUrl: '/assets/images/covers/cover_3.jpg' },
    { title: 'Third Slide', imageUrl: '/assets/images/covers/cover_5.jpg' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {carouselItems.map((item, index) => (
        <Box key={index} sx={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src={item.imageUrl}
            alt={item.title}
            style={{
              width: '100%',
              transition: 'transform 0.3s ease-in-out',
              ':hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <Typography variant="h6">{item.title}</Typography>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
