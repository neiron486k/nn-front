import React from 'react';
import { createStyles, Theme, WithStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import renderTextField from "../../utils/renderTextForm";
import { Field, InjectedFormProps, reduxForm, SubmitHandler } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { sendFeedback } from "../feedbackOperation";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { AppState } from "../../app/reducer";
import green from '@material-ui/core/colors/green';

const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
    },
    message: {
        color: green[500]
    }
});

interface IProps extends WithStyles<typeof styles>, InjectedFormProps {
    onSubmit: SubmitHandler
    message: string
}

export interface IFeedbackForm {
    name: string,
    phone: string,
    content: string
}

export const FEEDBACK_FORM = 'feedbackForm';

const Form = ({ classes, handleSubmit, onSubmit, message }: IProps) => {
    return (
        <form className={classes.root} noValidate={true} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="name"
                        label={'Name'}
                        component={renderTextField}
                        fullWidth={true}
                        required={true}
                        margin={"normal"}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="phone"
                        label={'Phone'}
                        component={renderTextField}
                        fullWidth={true}
                        required={true}
                        margin={"normal"}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="content"
                        label={'Content'}
                        component={renderTextField}
                        fullWidth={true}
                        required={true}
                        multiline={true}
                        rows={6}
                        margin={"normal"}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Grid container alignItems={"center"}>
                        <Grid item xs={6}>
                            <Button color={"secondary"} variant={"contained"} type={"submit"} fullWidth>
                                Send
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography align={"right"} className={classes.message}>{message}</Typography>
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>

        </form>
    )
};

const FeedbackForm = reduxForm({
    form: FEEDBACK_FORM
})(withStyles(styles)(Form));

const mapStateToProps = (state: AppState) => ({
    message: state.feedback.message
})

const mapDispatchToProps = (dispatch: ThunkDispatch<{},{}, AnyAction>) => ({
    onSubmit: (values: IFeedbackForm) => dispatch(sendFeedback(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
