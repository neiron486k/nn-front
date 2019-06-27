import React, { useState } from 'react';
import { Button, createStyles, Theme, WithStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from '@material-ui/core/Drawer';
import FeedbackForm from './form/FeedbackForm';
import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import FormatMessage from "../locale/FormatMessage";

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
});

interface IProps extends WithStyles<typeof styles> {
}

const Feedback = ({ classes }: IProps) => {
    const [open, setOpen] = useState(false);

    const handleDrawer = (): void => {
        setOpen(!open)
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
                    <Typography variant={"subtitle1"} align={"center"}>Заказать звонок</Typography>
                    <FeedbackForm />
                </div>
            </Drawer>
        </div>
    )
};

export default withStyles(styles)(Feedback);