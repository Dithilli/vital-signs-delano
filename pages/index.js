import React from 'react';
import { CssBaseline, Box, Container, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from '@components/Sidebar';
import PictureLinks from '@components/Picturelinks';
import BottomBar from '@components/Bottombar';

// Create a theme instance and set the global background color
const theme = createTheme({
  palette: {
    background: {
      default: '#84C8E6' // Your desired background color
    },
  },
});

// background darkblue 84C8E6


function Home() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Sidebar />
            <PictureLinks />
          </Box>
          <BottomBar />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Home;
