import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import  InteriorGraphics from '/assets/home_page/wm_entrance_graphics.png';
import signSystems from '/assets/home_page/sign_systems.png';
import delToro from '/assets/home_page/exhibits_displays.jpg';
import nationWide from '/assets/home_page/nation_wide_install.jpg';
import realEstate from '/assets/home_page/realestate_signs.png';
// import monuments from '/assets/home_page/monuments.jpg';

const cardData = [
  {
    image: InteriorGraphics,
    alt: `Interior & Exterior Graphics`,
    title: `Interior & Exterior Graphics`,
  },
 {
    image: signSystems,
    alt: `Sign Systems`,
    title: `Sign Systems`,
  },
   {
    image: delToro,
    alt: `Exhibits & Displays`,
    title: `Exhibits & Displays`,
  },
   {
    image: nationWide,
    alt: `Nation-Wide Installation`,
    title: `Nation-Wide Installation`,
  },
   {
    image: realEstate,
    alt: `Real Estate Signage`,
    title: `Real Estate Signage`,
  },
//   6: {
//     image: monuments,
//     alt: `Placeholder`,
//     title: `Monuments`
// }
];

const PictureLinks = ({ onPictureClick }) => {
  return (
    <Box sx={{ flexGrow: 2, p: 2 }}>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} onClick={() => onPictureClick(index)}>
             <Card key={index} style={{ maxWidth: 600, maxHeight: 'auto' }}>
              <CardMedia
                component="img"
                height="300"
                image={card.image.src}
                alt={card.alt}
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
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
};

export default PictureLinks;