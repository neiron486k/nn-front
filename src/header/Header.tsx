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
import FormatMessage, { formatMessage } from "../locale/FormatMessage";
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import Button from "@material-ui/core/Button";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { Helmet } from "react-helmet";

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
    width: Breakpoint,
    lang: string
}

const Header = ({ classes, section, width, lang }: Props) => {
    return (
        <AppBar position={"fixed"} elevation={0} className={classes.root}>
            <Helmet
                titleTemplate="NEIRONET - %s"
            >
                <title>{formatMessage('app.title', lang)}</title>
                <meta property="og:title" content={formatMessage('app.title', lang)} />
                <meta property="og:description" content={formatMessage('app.description', lang)} />
            </Helmet>
            <Toolbar>
                <HeaderMenu />
                <img src={logo} alt="logo" width={50} />
                <Typography variant="h6" className={classes.title}>
                    Neironet - <FormatMessage id={menus.filter(item => item.id === section)[0]['label']} />
                </Typography>
                {!isWidthDown('sm', width) && <div>
                    <Button color={"inherit"}>
                        <PhoneIcon className={classes.icon} />
                        <a href="tel:+79213594494" className={classes.a}>+7 (921) 3594494</a>
                    </Button>
                    <Button color={"inherit"}>
                        <EmailIcon className={classes.icon} />
                        <a href="mailto:efsneiron@gmail.com" className={classes.a}>efsneiron@gmail.com</a>
                    </Button>
                </div>
                }
            </Toolbar>
        </AppBar>
    )
};

const mapStateToProps = (state: AppState) => ({
    section: state.landing.section,
    lang: state.locale.lang
});

export default connect(mapStateToProps)(withWidth()(withStyles(styles)(Header)))