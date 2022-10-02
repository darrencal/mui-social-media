import { Box } from '@mui/material';
import React from 'react';

const RightSidebar = () => {
  return (
    <Box
      bgcolor="lightcoral"
      flex={2}
      p={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      RightSidebar
    </Box>
  );
};

export default RightSidebar;
