import { makeStyles } from '@mui/styles';
export default makeStyles(() => ({
  title: {
    display: 'Block',
    gap:10,
  },
  search: {
    position: 'relative',
    backgroundColor:'#ccc',
    opacity:0.7,
    '&:hover': { backgroundColor: 'whitesmoke' },
    marginRight: 2,
    marginLeft: 0,
    width: '100%',
    borderRadius:20,
  },
  searchIcon: {
    padding:5,
    marginLeft:3,
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



