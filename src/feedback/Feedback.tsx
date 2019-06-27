import React, { useState } from 'react';
import { Button, createStyles, ListItem, List, ListItemAvatar, Avatar, ListItemText, Theme, WithStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from '@material-ui/core/Drawer';
import FeedbackForm from './form/FeedbackForm';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import FormatMessage from "../locale/FormatMessage";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { setMessageAction } from "./feedbackAction";
import { connect } from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Email';

const styles = (theme: Theme) => createStyles({
    root: {
        position: 'relative'
    },
    close: {
        position: 'absolute',
        right: 0
    },
    content: {
        padding: theme.spacing(3),
        maxWidth: 500
    },
    listItem: {
        color: theme.palette.common.black
    }
});

interface IProps extends WithStyles<typeof styles> {
    setMessage: Function
}

const ListItemLink = (props: any) => <ListItem component="a" {...props} />;

const Feedback = ({ classes, setMessage }: IProps) => {
    const [open, setOpen] = useState(false);

    const handleDrawer = (): void => {
        setOpen(!open);
        setMessage('');
    };

    return (
        <div className={classes.root}>
            <Button color={"inherit"} component={"span"} onClick={handleDrawer}>
                <FormatMessage id={'feedback'} />
            </Button>
            <Drawer
                elevation={0}
                open={open}
                anchor={'right'}
                onClose={handleDrawer}
            >
                <IconButton onClick={handleDrawer} className={classes.close}>
                    <CloseIcon />
                </IconButton>
                <div className={classes.content}>
                    <Typography variant={"h6"} align={"center"}><FormatMessage id={'feedback.orderCall'} /></Typography>
                    <FeedbackForm />
                </div>
                <Typography variant={"h6"} align={"center"}><FormatMessage id={'feedback.contacts'} /></Typography>
                <List>
                    <ListItemLink href={'tel:+79213594494'} className={classes.listItem}>
                        <ListItemAvatar>
                            <Avatar>
                                <PhoneIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="+7 (921) 3594494" />
                    </ListItemLink>
                    <ListItemLink href={'mailto:efsneiron@gmail.com'} className={classes.listItem}>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="efsneiron@gmail.com"/>
                    </ListItemLink>
                </List>
            </Drawer>
        </div>
    )
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    setMessage: (message: string) => dispatch(setMessageAction(message))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Feedback));