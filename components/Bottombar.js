import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const BottomBar = () => {
  return (
    <Box sx={{ p: 2, bgcolor: '#84C8E6', mt: 2, textAlign: 'center' }}>
      <Typography variant="h6" >
        <strong>call: </strong> <Link href="tel:+17639725101" style={{ color: 'inherit' }}>763 972-5101</Link> <strong> or email: </strong> <Link href="mailto:enquires@vitalvisual.com" style={{ color: 'inherit' }}>enquires@vitalvisual.com</Link>
      </Typography>
    </Box>
  );
};

export default BottomBar;
