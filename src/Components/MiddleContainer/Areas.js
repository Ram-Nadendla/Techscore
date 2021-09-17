import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StrengthData from '../../MetaData/Area.json';
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
}));

export default function Area() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={3}>
        {StrengthData.map((data) => (
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography gutterBottom variant="h5" component="h2">
                {data.heading}
              </Typography>
              {data.dataSet.map((children) => (
                <Typography>
                  {children.name} {"."} {children.attention}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
