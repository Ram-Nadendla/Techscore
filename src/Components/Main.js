import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Profile from '../Components/LeftContainer/Profile';
import Progress from '../Components/LeftContainer/LatestProgress';
import Section from '../Components/MiddleContainer/Section';
import Area from '../Components/MiddleContainer/Areas';
import SampleJobs from '../Components/MiddleContainer/SampleJobs';
import RecommendedVideos from '../Components/MiddleContainer/RecommendedVideos';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Chart from '../Components/LeftContainer/Chart';
const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex', 
    flexDirection:'row'
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    backgroundColor: '#F8F8F8'
  },
  headerTitle : {
    color: '#1789FC',
    fontWeight: 'bold',
    fontSize: '36px',
    fontFamily: 'revert'
  },
  headerSubTitle : {
    color: '#1789FC',
    fontWeight: 400,
    fontSize: '26px',
    opacity: 0.8,
    fontFamily: 'revert'
  },
  
  leftContainerCls :{
    width: '30%',
    // fontFamily: 'arial',
    height: 'auto',
    borderRadius: '10px',
    display: 'inline-block'
  },
  rightContainerCls :{
    width: '68%',
    height: 'auto',
    display: 'inline-block',
    marginLeft: '30px'
  },
  iconCls : {
    float : 'right',
    fontSize: '45px'
  }
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     
      <div className={classes.leftContainerCls}>
      <Profile />
      <Progress />
</div>
<main className={classes.rightContainerCls}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>
              <Grid item xs={12}>
                <Paper className={classes.paper} elevation={3}>
                  <Typography gutterBottom variant="h5" component="div" className = {classes.headerTitle}>Congratulations! Your hardwork paid off.
                  <CheckCircleOutlineIcon sx={{ fontSize: 65,color :'#1789FC',float: 'right'}}/>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" className = {classes.headerTitle}>You're ready take your carrer to the next level.</Typography>
                  <Typography variant="body2" color="text.secondary" className = {classes.headerSubTitle}>Learn additional tips and advice to take your professional career to the next chapter.</Typography>
                  <Typography variant="body2" color="text.secondary" className = {classes.headerSubTitle}>Learn More</Typography>
                </Paper>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
        <Chart />
        <Section/>
    <Area/>
    <SampleJobs/>
    <RecommendedVideos/>
      </main>
      {/* <Footer/> */}
    </div>
  );
};
export default ResponsiveDrawer;