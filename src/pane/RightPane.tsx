import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import LangMenu from "../locale/LangMenu";
import { Button } from "@material-ui/core";
import FormatMessage from "../locale/FormatMessage";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { openFeedbackAction } from "../feedback/feedbackAction";
import { connect } from "react-redux";

const styles = (theme: Theme) => createStyles({
    root: {
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        position: 'fixed',
        right: 0,
        top: theme.spacing(8),
        bottom: theme.spacing(8),
        zIndex: theme.zIndex.appBar + 1,
        color: "#fff",
        display: 'flex',
    },
    lang: {
        flexGrow: 1
    },
});

interface IProps extends WithStyles<typeof styles> {
    openFeedback: Function
}

const RightPane = ({ classes, openFeedback }: IProps) => {
    return (
        <div className={classes.root}>
            <LangMenu className={classes.lang} />
            <Button color={"inherit"} component={"span"} onClick={() => openFeedback()}>
                <FormatMessage id={'feedback'} />
            </Button>
        </div>
    )
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{},{}, AnyAction>) => ({
    openFeedback: () => dispatch(openFeedbackAction(true))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(RightPane))