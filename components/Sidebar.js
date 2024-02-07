import React from 'react';
import { Box, Hidden, Grid, IconButton } from '@mui/material';
import Logo from '../assets/vital_logo_nonrespond.svg'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

const Sidebar = () => {
  return (
    <Box sx={{ width: { md: '75%' }, p: 2, bgcolor: '#84C8E6' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, paddingTop: '30' }}>
      <Grid container direction="column" spacing={2}>
      <Grid item sx={{ textAlign: 'center'}}>
        <Logo/>
      </Grid>
      <Hidden smUp> {/* Hides content on screens larger than small */}
      <Grid item sx={{ textAlign: 'center'}}>
      <IconButton component="a" href="tel:+17639725101" target="_blank" rel="noopener noreferrer">
        <CallIcon/>
        </IconButton>
        <IconButton component="a" href="mailto:enquires@vitalvisual.com" target="_blank" rel="noopener noreferrer">
        <EmailIcon/>
        </IconButton>
      </Grid>
      </Hidden>
    </Grid>
      </Box>
    </Box>
  );
};

export default Sidebar;
