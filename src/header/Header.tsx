import React from 'react';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import logo from './images/logo.png';
import HeaderMenu from "./menu/HeaderMenu";
import { AppState } from "../app/reducer";
import { connect } from "react-redux";
import { menus } from './menu/HeaderMenu';
import FormatMessage from "../locale/FormatMessage";
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import Button from "@material-ui/core/Button";

const styles = (theme: Theme) => createStyles({
    root: {
        background: 'none'
    },
    title: {
        textTransform: 'uppercase',
        flexGrow: 1
    },
    contact: {
        display: 'flex',
        alignItems: 'center',
        '& svg': {
            marginRight: theme.spacing()
        }
    },
    a: {
        textDecoration: 'none',
        color: '#fff',
        textTransform: 'lowercase'
    },
    icon: {
        marginRight: theme.spacing(1)
    }
});

interface Props extends WithStyles<typeof styles> {
    section: string
}

const Header = ({ classes, section }: Props) => {
    return (
        <AppBar position={"fixed"} elevation={0} className={classes.root}>
            <Toolbar>
                <HeaderMenu />
                <img src={logo} alt="logo" width={50} />
                <Typography variant="h6" className={classes.title}>
                    Neironet - <FormatMessage id={menus.filter(item => item.id === section)[0]['label']} />
                </Typography>
                <Button color={"inherit"}>
                    <PhoneIcon className={classes.icon} />
                    <a href="tel:+79213594494" className={classes.a}>+7 (921) 3594494</a>
                </Button>
                <Button color={"inherit"}>
                    <EmailIcon className={classes.icon} />
                    <a href="mailto:efsneiron@gmail.com" className={classes.a}>efsneiron@gmail.com</a>
                </Button>
            </Toolbar>
        </AppBar>
    )
};

const mapStateToProps = (state: AppState) => ({
    section: state.landing.section
});

export default connect(mapStateToProps)(withStyles(styles)(Header))