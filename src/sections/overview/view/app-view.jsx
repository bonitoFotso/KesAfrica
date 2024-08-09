
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import MainBanner from '../MainBanner';
import MainServices from '../MainServices';
import NewsComponent from '../NewsComponent';
import ImageCarousel from '../ImageCarousel';
import QuickIntroduction from '../QuickIntroduction';


// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xxl">

      

      <Grid container spacing={3}>

      <Grid id="home" xs={12} >
        <MainBanner />
        </Grid>

        <Grid id="about" xs={12} >
        <NewsComponent />
        </Grid>

        <Grid id="about" xs={12} >
        <ImageCarousel />
        </Grid>

        
        <Grid id="about" xs={12} >
        <QuickIntroduction />
        </Grid>
        
        <Grid id="services" xs={12} >
        <MainServices />
        </Grid>

      </Grid>
    </Container>
  );
}
