import React, { useState } from 'react';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles'
import withStyles from "@material-ui/core/styles/withStyles";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { IconButton } from "@material-ui/core";
import { AppState } from "../../app/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { setSectionAction } from "../../pages/landing/landingAction";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = (theme: Theme) => createStyles({
    root: {
        background: 'none',
        color: '#fff'
    },
});

interface Props extends WithStyles<typeof styles> {
    section: string,
    setSection: Function
}

const menus = [
    { id: 'intro', label: 'Intro' },
    { id: 'work', label: 'Works' },
    { id: 'contact', label: 'Contacts' }
];

const HeaderMenu = ({ classes, section, setSection }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.root}>
            <IconButton edge="start" color="inherit" aria-label="Menu" onClick={() => setOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>

                    {menus.map(item => {
                        return (
                            <ListItem key={item.id} onClick={() => setSection(item.id)}>
                                <ListItemText primary={item.label}
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
    setSection: (section: string) => dispatch(setSectionAction(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HeaderMenu))