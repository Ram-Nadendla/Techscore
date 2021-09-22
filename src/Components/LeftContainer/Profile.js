import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import EditIcon from '@mui/icons-material/Edit';
const useStyles = makeStyles((theme) => ({
  profileName : {
    fontFamily: 'inherit',
    fontWeight: 'bold',
    fontSize: '32px',
    padding: '4px'
  },
  active : {
    fontSize: '19px',
    opacity: 0.9,
    fontFamily: 'revert'
  }
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Card container spacing={3} style={{margin: '20px', padding: '5px'}}>
     <CardContent>
     <PersonAddAltIcon sx={{ fontSize: 44,color :'#1789FC'}}/>
     <EditIcon sx={{ fontSize: 44,color :'#1789FC',float: 'right'}}/>
     <Typography variant="h4" gutterBottom component="div"mt={8} className = {classes.profileName}>
     
       Ram Nadendla
         </Typography>
         <Typography variant="body2" color="text.secondary" className = {classes.active}>
         Active Seen June 2021
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p" className = {classes.active}>
         Last Active Session June 10, 2021 2:55pm
        </Typography>
       </CardContent>
      
    </Card>
  );
};
