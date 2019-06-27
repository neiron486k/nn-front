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
    content: {
        padding: theme.spacing(2),
    },
    header: {
        display: 'flex',
        alignItems: 'center'
    }
});

interface IProps extends WithStyles<typeof styles> {
}

const Feedback = ({ classes }: IProps) => {
    const [open, setOpen] = useState(false);

    const handleDrawer = (): void => {
        setOpen(!open)
    };

    return (
        <div>
            <Button color={"inherit"} component={"span"} onClick={handleDrawer}>
                <FormatMessage id={'feedback'} />
            </Button>
            <Drawer
                elevation={0}
                open={open}
                anchor={'right'}
                onClose={handleDrawer}
            >
                <div className={classes.content}>
                    <div className={classes.header}>
                        <Typography variant={"subtitle1"} style={{flexGrow: 1}}>Заказать звонок</Typography>
                        <IconButton edge="end" onClick={handleDrawer}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <FeedbackForm />
                </div>
            </Drawer>
        </div>
    )
};

export default withStyles(styles)(Feedback);