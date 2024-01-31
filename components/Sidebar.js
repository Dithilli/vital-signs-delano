import React from 'react';
import { Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Box sx={{ width: { md: '25%' }, p: 2, bgcolor: 'grey.200' }}>
      <p>Sidebar content here</p>
    </Box>
  );
};

export default Sidebar;
