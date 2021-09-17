import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import LogoutIcon from '@mui/icons-material/Logout';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
//import Footer from '../Components/Footer';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
    appBar: {
      backgroundColor : "#e8dfdf17"
    }
  }));
function Navbar() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const classes = useStyles();
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                className={classes.appBar}
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Tech Score
                    </Typography>
                    <nav>
                        <Button variant="text" onClick={handleClickOpen}>Give Feedback</Button>
                        <Button variant="text" onClick={handleClickOpen}>Invite a Friend</Button>
                        <Button variant="text" endIcon={<LogoutIcon />} onClick={handleClickOpen}>Log Out</Button>
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
            {/* <Footer/> */}
        </React.Fragment>
        
    );
}

export default Navbar;