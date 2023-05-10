import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  formControl: {
    margin: 10,
    minWidth: 160,
    width:160, 
    marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: 2,
  },
  loading: {
    height: '600px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  container: {
    padding: '50px',

  },
  marginBottom: {
    marginBottom: '50px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));
