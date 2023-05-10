import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper,Typography,useMediaQuery} from '@mui/material';
import LocationOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material';
import useStyles from './styles';

function Maps() {
  const classes=useStyles();
  const isMobile=useMediaQuery(('min-width:600px'));
  const coordinates={ lat:30 , lng:15 };
  return (
    <div className={classes.mapContainer}>
    <GoogleMapReact bootstrapURLKeys={{key:'AIzaSyC3wJQPNzcRjNp4wmHo9amlm-zPeDPmFsY'}}
    defaultCenter={coordinates}
    center={coordinates}
    defaultZoom={14}
    margin={[50,50,50,50]}
    options={''}
    onChange={''}
    onChildClick={''}
    >
      
    </GoogleMapReact>
      
    </div>
  );
}

export default Maps;
