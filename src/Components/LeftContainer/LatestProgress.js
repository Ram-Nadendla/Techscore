import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ProgressData from '../../MetaData/LatestProgress.json';
const useStyles = makeStyles((theme) => ({
  middleContainer : {
    padding: '5px',
    textAlign : 'left',
    fontSize: '17px',
    fontFamily: 'revert'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  profileName : {
    fontFamily: 'inherit',
    fontWeight: 'bold',
    fontSize: '24px',
    padding: '4px'
  },
}));

export default function Progress() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3} spacing={8} style={{margin:'20px'}}>
      <Typography variant="h6" gutterBottom component="div" className={classes.profileName}>
        Latest Progress
      </Typography>
      {ProgressData.map((progress,id)=>(
         <Typography variant="body2" color="text.secondary" className = {classes.middleContainer}>
        {progress.name}
        <Typography variant="body2" color="text.secondary" className = {classes.middleContainer}>{progress.date}</Typography>
        </Typography>
        
      ))}
      </Paper>
  );
};