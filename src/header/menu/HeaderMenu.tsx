import React, { useState } from 'react';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles'
import withStyles from "@material-ui/core/styles/withStyles";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { IconButton } from "@material-ui/core";
import { AppState } from "../../app/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { setLandingSection } from "../../pages/landing/landingOparation";
import FormatMessage from "../../locale/FormatMessage";


const styles = (theme: Theme) => createStyles({
    root: {
        background: 'none',
        color: '#fff'
    },
    paper: {
        // background: 'rgba(255, 255, 255, .7)'
    }
});

interface Props extends WithStyles<typeof styles> {
    section: string,
    setSection: Function
}

export const menus = [
    { id: 'intro', label: 'menu.intro' },
    { id: 'work', label: 'menu.work' },
    { id: 'contact', label: 'menu.contact' }
];

const HeaderMenu = ({ classes, section, setSection }: Props) => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (): void => {
        setOpen(!open)
    };

    return (
        <div className={classes.root}>
            <IconButton edge="start" color="inherit" aria-label="Menu" onClick={toggleDrawer}>
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer} classes={{paper: classes.paper}}>
                <List onClick={toggleDrawer}>
                    {menus.map(item => {
                        return (
                            <ListItem key={item.id} onClick={() => setSection(item.id)} button={true}>
                                <ListItemText primary={<FormatMessage id={item.label}/>}
                                              style={item.id === section ? { color: '#922' } : {}} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
        </div>
    )
};

const mapStateToProps = (state: AppState) => ({
    section: state.landing.section
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    setSection: (section: string) => dispatch(setLandingSection(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HeaderMenu))