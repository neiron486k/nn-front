import React from 'react';
import { createStyles, Theme, WithStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from '@material-ui/core/Drawer';
import { AppState } from "../app/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { openFeedbackAction } from "./feedbackAction";
import { connect } from "react-redux";

const styles = (theme: Theme) => createStyles({
    drawer: {}
});

interface IProps extends WithStyles<typeof styles> {
    open: boolean,
    closeFeedback: Function
}

const Feedback = ({ classes, open, closeFeedback }: IProps) => {
    return (
        <Drawer
            elevation={0}
            open={open}
            anchor={'right'}
            onClose={() => closeFeedback()}
        >
            feedback form here
        </Drawer>
    )
};

const mapStateToProps = (state: AppState) => ({
    open: state.feedback.open
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{},{}, AnyAction>) => ({
    closeFeedback: () => dispatch(openFeedbackAction(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Feedback));