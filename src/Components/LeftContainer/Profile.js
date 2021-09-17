import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import EditIcon from '@mui/icons-material/Edit';
const useStyles = makeStyles((theme) => ({
    iconAlign : {
        float : 'right'
    }
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Card container spacing={3}>
     <CardContent>
     <PersonAddAltIcon/>
     <EditIcon className={classes.iconAlign}/>
     <Typography variant="h6" gutterBottom component="div">
     
       Ram Nadendla
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Active Seen June 2021
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
         Last Active Session June 10, 2021 2:55pm
        </Typography>
       </CardContent>
      
    </Card>
  );
};
