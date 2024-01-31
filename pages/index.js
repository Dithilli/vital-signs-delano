import React from 'react';
import { CssBaseline, Box, Container, Grid } from '@mui/material';
import Sidebar from '@components/Sidebar';
import PictureLinks from '@components/Picturelinks';
import BottomBar from '@components/Bottombar';

// background darkblue 84C8E6


function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <Sidebar />
          <PictureLinks />
        </Box>
        <BottomBar />
      </Container>
    </React.Fragment>
  );
}

export default Home;
