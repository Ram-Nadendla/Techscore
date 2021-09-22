import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import VideoData from '../../MetaData/ReommendedVideo.json';
const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex"
  },
  headerTitle: {
    fontSize: '34px',
    fontWeight: 'bold',
    fontFamily: 'revert',
    margin: '14px'
  },
  mainContainer : {
    padding : '20px'
  },
  middleContent : {
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '8px'
  },
  sourceContent : {
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    backgroundColor: 'white',
    color: '#1789FC',
    cursor: 'pointer'
  }
}));
export default function RecommendedVideos() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
       <div className={classes.headerTitle}>
         Recommended Videos
        </div>
     <div className={classes.root}>
    {VideoData.map((data,i)=>(
      <div className={classes.mainContainer} key={i}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"

        image={data.url}
    />
        <div className = {classes.middleContent}>
            {data.content}
        </div>
        <button onClick={handleClickOpen} className={classes.sourceContent}>{data.source}</button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"This feature has not been implemented yet'"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      ))}
      </div>
      </div>
  );
};