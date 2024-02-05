import React from 'react';
import { Box } from '@mui/material';
import Blah from '../assets/vital_logo_nonrespond.svg'

const Sidebar = () => {
  return (
    <Box sx={{ width: { md: '75%' }, p: 2, bgcolor: 'grey.200' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <Blah/>
      </Box>
    </Box>
  );
};

export default Sidebar;
