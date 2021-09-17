import React from 'react';
import "../index.css";
import Button from '@mui/material/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const useStyles = makeStyles(() => ({
    appBar: {
      backgroundColor : "#e8dfdf17"
    }
  }));
function Footer(){
    const [open, setOpen] = React.useState(false);
const handleClose = () => {
    setOpen(false);
};
const handleClickOpen = () => {
    setOpen(true);
};
const classes = useStyles();
    return(
<footer className="footer">
<AppBar
                className={classes.appBar}
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                   <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        About
                    </Typography>      
                    <nav>
                        <Button variant="text" onClick={handleClickOpen}>FAQ</Button>
                        <Button variant="text" onClick={handleClickOpen}>Terms & Conditions | </Button>
                        <Button variant="text" onClick={handleClickOpen}>Privacy Policies</Button>
                        {/* <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        @2021 Your Tech Sore
                    </Typography> */}
                    </nav>
                </Toolbar>
            </AppBar>
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
    </footer>
    )
}
export default Footer;