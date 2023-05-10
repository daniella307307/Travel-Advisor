import { makeStyles } from '@mui/styles';
export default makeStyles(() => ({
  title: {
    display: 'Block',
    gap:10,
  },
  search: {
    position: 'relative',
    borderRadius: 5,
    backgroundColor:'white',
    '&:hover': { backgroundColor: 'whitesmoke' },
    marginRight: 2,
    marginLeft: 0,
    width: '100%',
    
  },
  searchIcon: {
    padding:5,
    color:'blue',
    display:'flex',
    alignItems:'center',
    float:'right',
  },
  inputRoot: {
    color: 'inherit',
    textAlign:'center',
    display:'flex',
    alignItems:'center',
  },
  inputInput: {
   height:1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));



