import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navbar = ({ color }) => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: color }}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Tester Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
