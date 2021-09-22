import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StrengthData from '../../MetaData/Area.json';
//import Typography from '@mui/material/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
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

export default function Area() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={6}>
        {StrengthData.map((data,id) => (
          <Grid item xs={12} sm={6} key={id}>
            <Paper className={classes.paper}>
              <div className={classes.headerSection}>
              {data.heading}
              </div>
              {data.dataSet.map((children,childId) => (
                <div className={classes.childrenSection} key = {childId}>
                  {"-"} {children.name} {"--"} {children.attention}
                </div>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};