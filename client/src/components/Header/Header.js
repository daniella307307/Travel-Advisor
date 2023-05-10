import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography,Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles';


const Header = () => {

const classes=useStyles();
  return (
   <AppBar position='static'>
    <Toolbar className={classes.toolbar}>
      <Typography variant='h5' className={classes.title}>
        Travel Advisor
      </Typography>
      <Typography variant='h6' className={classes.title}>
        Explore New places
      </Typography>
      <Box display="flex">
      {/* <Autocomplete> */}
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase placeholder='Search..' className={{root:classes.inputRoot,input:classes.inputInput}}/>
        </div>
      {/* </Autocomplete> */}
      </Box> 
    </Toolbar>
   </AppBar>
  );
};

export default Header;
