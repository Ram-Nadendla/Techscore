import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SelectionData from '../../MetaData/Section.json';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@mui/material/Typography';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding : '16px',
    backgroundColor: "#FFFBF6",
    fontSize: '16px',
    fontFamily: 'inherit',
    lineHeight : '20px',
    border : '4px solid white'
  },
  span : {
    color: 'orange',
    fontSize: '16px',
    fontWeight: 700
  },
  headerTitle : {
    marginTop: '0.35em'
  }
}));

export default function Selections() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" component="div" className = {classes.headerTitle}>
          Following sections determine your comprehensive carrer score
          <Typography variant="body2" color="text.secondary" className = {classes.headerTitle}>
            To get an acurate score, ensure all foure sections has be completed.Retake if necessary
            </Typography>
        </Typography>
      <Grid container spacing={3}>
        {SelectionData.map((post) => (
            <Grid item xs={12} sm={6}>
              <Paper variant="outlined" square className={classes.paper}>
                <div>{post.name} <span className={classes.span}>{": Last Updated  "}{post.date}</span></div>
                {post.content}
                <Button size="small" color="primary" onClick={handleClickOpen}>
                  
                  {post.action}
                </Button>
              </Paper>

            </Grid>
        ))}
      </Grid>
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
  );
}
