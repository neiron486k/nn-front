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

const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
    },
});

interface IProps extends WithStyles<typeof styles>, InjectedFormProps {
    // handleSubmit: SubmitHandler
    onSubmit: SubmitHandler
}

export interface IFeedbackForm {
    name: string,
    phone: string,
    description: string
}

export const FEEDBACK_FORM = 'feedbackForm';

const Form = ({ classes, handleSubmit, onSubmit }: IProps) => {
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
                        name="description"
                        label={'Description'}
                        component={renderTextField}
                        fullWidth={true}
                        required={true}
                        multiline={true}
                        rows={6}
                        margin={"normal"}
                    />
                </Grid>
                <Grid item xs={12} style={{textAlign: 'right'}}>
                    <Button color={"primary"} variant={"contained"} type={"submit"} >
                        Send
                    </Button>
                </Grid>
            </Grid>

        </form>
    )
};

const FeedbackForm = reduxForm({
    form: FEEDBACK_FORM
})(withStyles(styles)(Form));

const mapDispatchToProps = (dispatch: ThunkDispatch<{},{}, AnyAction>) => ({
    onSubmit: (values: IFeedbackForm) => dispatch(sendFeedback(values))
});

export default connect(null, mapDispatchToProps)(FeedbackForm);
