import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SamplejobsData from '../../MetaData/SampleJobs.json';
//import Typography from '@mui/material/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  scoreLabel : {
    float: "right",
    backgroundColor: '#FFFBF6',
    color: 'orange',
    fontSize: 30
  },
  headerTitle: {
    fontSize: '34px',
    fontWeight: 'bold',
    fontFamily: 'revert',
    margin: '14px'
  },
  headerSection: {
    fontSize: '26px',
    fontFamily: 'revert',
    fontWeight: 'bold'
  },
  childrenSection : {
    fontSize: '22px',
    fontFamily: 'emoji',
    fontWeight: 500,
    padding: '6px'
  }
}));

export default function SampleJobs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headerTitle}>
         Sample Jobs with suggested Score
        </div>
      <Grid container spacing={3}>
      {SamplejobsData.map((card,id) => (
          <Grid item xs={12} sm={6} key={id}>
            <Paper className={classes.paper}>
            <div className={classes.headerSection}>
              {card.name}
              <span className={classes.scoreLabel}>{card.score}</span>
              </div>
              <div className={classes.childrenSection}>
                  {card.comapny}
                </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
