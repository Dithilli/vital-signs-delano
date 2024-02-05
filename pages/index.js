import React, { useState, useEffect, useRef } from 'react';
import { CssBaseline, Box, Container, ThemeProvider, createTheme, Typography } from '@mui/material';
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

const pictureData = [
  { src: 'https://via.placeholder.com/150', content: 'Content for Picture 1' },
  { src: 'https://via.placeholder.com/150', content: 'Content for Picture 2' },
  { src: 'https://via.placeholder.com/150', content: 'Content for Picture 3' },
  { src: 'https://via.placeholder.com/150', content: 'Content for Picture 4' },
  { src: 'https://via.placeholder.com/150', content: 'Content for Picture 5' },
  { src: 'https://via.placeholder.com/150', content: 'Content for Picture 6' },
  // Add more pictures as needed
];

function Home() {
  const [selectedPicture, setSelectedPicture] = useState(null);

  const contentRef = useRef(null);

  const handlePictureClick = (index) => {
    console.log("click on pic")
    setSelectedPicture(pictureData[index]);
  };

  const handleClickOutside = (event) => {
    console.log("event.target", event.target)
    if (contentRef.current && !contentRef.current.contains(event.target)) {
      setSelectedPicture(null); // Clear selection if click is outside the content
    }
  };

  useEffect(() => {
    // Add click event listener when the component mounts
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      // Remove event listener when the component unmounts
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);


  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Sidebar />
            {selectedPicture === null ? (
              <PictureLinks onPictureClick={handlePictureClick} />
            ) : (
              <div  ref={contentRef}>
                <img src={selectedPicture.src} alt="Selected" style={{ maxWidth: '100%', height: 'auto' }} />
                <Typography variant="body1" style={{ marginTop: '20px' }}>
                  {selectedPicture.content}
                </Typography>
              </div>
            )}
          </Box>
          <BottomBar />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Home;
