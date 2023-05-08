import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography,InputBase,Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import makeStyles from './styles';

const Header=({ onPlaceChanged,onLoad })=>{
    const classes=makeStyles();
    return(
        <div>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore New Places
                </Typography>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search ..." classes={{root:classes.inputRoot,input:classes.inputInput}}/>
                    </div>
                </Autocomplete>
                </Box>
            </Toolbar>
          </AppBar>
        </div>
    )
}

export default Header;