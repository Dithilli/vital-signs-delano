import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const PictureLinks = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {[...Array(6)].map((_, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`https://via.placeholder.com/150`}
                alt={`Placeholder ${i}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Picture {i + 1}
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