import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SelectionData from '../../MetaData/Section.json';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#FFFAF5",
    border: '4px solid white',
    padding: '20px'
  },
  span: {
    color: 'orange',
    fontSize: '22px',
    fontFamily: 'revert',
    fontWeight: 'bold'
  },
  headerTitle: {
    fontSize: '34px',
    fontWeight: 'bold',
    fontFamily: 'revert',
    margin: '14px'
  },
  headerSubTitle: {
    fontSize: '28px',
    fontWeight: 400,
    fontFamily: 'revert',
    opacity: 0.8,
    margin: '14px'
  },
  headerSection: {
    fontSize: '24px',
    fontFamily: 'revert',
    fontWeight: 'bold'
  },
  sectionContent: {
    fontSize: '22px',
    fontFamily: 'emoji',
    fontWeight: 500
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
      <div className={classes.headerTitle}>Following sections determine your comprehensive carrer score</div>
      <div className={classes.headerSubTitle}>To get an acurate score, ensure all foure sections has be completed.Retake if necessary</div>
      <Grid container spacing={4}>
        {SelectionData.map((post,id) => (
          <Grid item xs={12} sm={6} key={id}>
            <Paper variant="outlined" square className={classes.paper}>
              <div className={classes.headerSection}>{post.name} <span className={classes.span}>{"Last Updated  "}{post.date}</span></div>
              <div className={classes.sectionContent}>{post.content}
                <Button size="small" color="primary" onClick={handleClickOpen}>
                  {post.action}
                </Button>
              </div>
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
