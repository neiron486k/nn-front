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

const styles = (theme: Theme) => createStyles({
    root: {
        background: 'none'
    },
    title: {
        textTransform: 'uppercase'
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
            </Toolbar>
        </AppBar>
    )
};

const mapStateToProps = (state: AppState) => ({
    section: state.landing.section
});

export default connect(mapStateToProps)(withStyles(styles)(Header))