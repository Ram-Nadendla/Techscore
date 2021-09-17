import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex"
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
       <Typography gutterBottom variant="h5" component="div">
         Recommended Videos
        </Typography>
     <div className={classes.root}>
    {[1,2,3,4].map(()=>(
      <div>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://upload.wikimedia.org/wikipedia/commons/3/3f/YOUTUBE--SOCIAL-PLAY.png"
    />
        <Typography gutterBottom variant="h6" component="div">
            How to ace your coding challenge
        </Typography>
        <Button size="small" onClick={handleClickOpen}>Source YouTube</Button>
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