import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import  InteriorGraphics from '/assets/WM_Interior_graphics.png';
import signSystems from '/assets/sign_systems.png';
import delToro from '/assets/del_toro.jpg';
import nationWide from '/assets/nation_wide_install.jpg';
import realEstate from '/assets/real_estate.png';
// import monuments from '/assets/monuments.jpg';

const PictureLinks = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} key="1">
            <Card>
              <CardMedia
                component="img"
                image={InteriorGraphics.src}
                alt={`Placeholder`}
              />
              <CardContent sx={{
        textTransform: 'uppercase',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '16px',
        textOverflow: 'ellipsis',
        width: '100%', // Ensure the Typography component spans the full width
      }}>
                <Typography gutterBottom component="div">
                  Interior & Exterior Graphics
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} key="2">
            <Card>
              <CardMedia
                component="img"
                image={signSystems.src}
                alt={`Placeholder`}
              />
              <CardContent sx={{
        textTransform: 'uppercase',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '16px',
        textOverflow: 'ellipsis',
        width: '100%', // Ensure the Typography component spans the full width
      }}>
                <Typography gutterBottom variant="h6" component="div">
                  Sign Systems
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} key="3">
            <Card>
              <CardMedia
                component="img"
                image={delToro.src}
                alt={`Placeholder`}
              />
              <CardContent sx={{
        textTransform: 'uppercase',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '16px',
        textOverflow: 'ellipsis',
        width: '100%', // Ensure the Typography component spans the full width
      }}>
                <Typography gutterBottom variant="h6" component="div">
                  Exhibits & Displays
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} key="4">
            <Card>
              <CardMedia
                component="img"
                image={nationWide.src}
                alt={`Placeholder`}
              />
              <CardContent sx={{
        textTransform: 'uppercase',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '16px',
        textOverflow: 'ellipsis',
        width: '100%', // Ensure the Typography component spans the full width
      }}>
                <Typography gutterBottom variant="h6" component="div">
                  Nation-Wide Installation
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4} key="5">
            <Card>
              <CardMedia
                component="img"
                image={realEstate.src}
                alt={`real estate signage`}
              />
              <CardContent sx={{
        textTransform: 'uppercase',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '16px',
        textOverflow: 'ellipsis',
        width: '100%', // Ensure the Typography component spans the full width
      }}>
                <Typography gutterBottom variant="h6" component="div">
                  Real Estate Signage
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* <Grid item xs={12} sm={6} md={4} key="6">
            <Card>
              <CardMedia
                component="img"
                image={monuments.src}
                alt={`Monuments`}
              />
              <CardContent sx={{
        textTransform: 'uppercase',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '16px',
        textOverflow: 'ellipsis',
        width: '100%', // Ensure the Typography component spans the full width
      }}>
                <Typography gutterBottom variant="h6" component="div">
                  Monuments to Man's Hubris
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}

      </Grid>
    </Box>
  );
};

export default PictureLinks;