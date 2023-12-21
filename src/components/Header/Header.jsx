import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{props.title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
