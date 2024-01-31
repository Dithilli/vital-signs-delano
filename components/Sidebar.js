import React from 'react';
import { Box } from '@mui/material';
import {blah} from '../assets/VITAL_LOGOwAddress.svg'

const Sidebar = () => {
  return (
    <Box sx={{ width: { md: '25%' }, p: 2, bgcolor: 'grey.200' }}>
      <Box
  component="img"
  sx={{
    height: 233,
    width: 350,
    maxHeight: { xs: 233, md: 167 },
    maxWidth: { xs: 350, md: 250 },
  }}
  alt="Logo"
  src={blah}
/>
    </Box>
  );
};

export default Sidebar;
