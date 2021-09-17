import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SamplejobsData from '../../MetaData/SampleJobs.json';
import Typography from '@mui/material/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  scoreLabel : {
    float : 'right',
    backgroundColor : '#FFFBF6'
  }
}));

export default function SampleJobs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" component="div">
         Sample Jobs with suggested Score
        </Typography>
      <Grid container spacing={3}>
      {SamplejobsData.map((card) => (
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography gutterBottom variant="h6" component="h2">
              {card.name}
              <span className={classes.scoreLabel}>{card.score}</span>
              </Typography>
                <Typography>
                  {card.comapny}
                </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
