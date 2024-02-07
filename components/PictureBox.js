import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import  rhs  from '/assets/interior_graphics/rhs_curved tub.jpg';
import  rhs2  from '/assets/interior_graphics/rhs_mainoffice.jpg';
import  rhs3 from '/assets/interior_graphics/rockford_ib_world_mural.jpg';

// An array of all the picture and text for each page
const pictureData = [
    {
        text: 'Interior Graphics',
        images: [rhs, rhs2, rhs3]
    },
    {
        text: 'Sign Systems',
        images: []
    },
    {
        text: 'Exhibits & Displays',
        images: []
    },
    {
        text: 'Nation-Wide Installation',
        images: []
    },
    {
        text: 'Real Estate Signage',
        images: []
    },
    {
        text: 'Monuments',
        images: []
    }
];


const PictureBox = ({ pictureIndex, onPictureClick  }) => {

    const selectedPicture = pictureData[pictureIndex];
    console.log(selectedPicture);


  return (
    <Box sx={{ flexGrow: 2, p: 2 }}>
      <Grid container spacing={2}>
        {selectedPicture.images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} onClick={() => onPictureClick(null)} >
             <Card key={index} style={{ maxWidth: 600, maxHeight: 'auto' }}>
              <CardMedia
                component="img"
                height="300"
                image={image.src}
                alt={""}
              />
                <CardContent sx={{
                  textTransform: 'uppercase',
                  backgroundColor: 'black',
                  color: 'white',
                  textAlign: 'center',
                  padding: '16px',
                  width: '100%', // Ensure the Typography component spans the full width
                }}>
                <Typography gutterBottom variant="h7" fontFamily={'sans-serif'}>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
};

export default PictureBox;