import React from 'react';
import { createStyles, Theme, WithStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import renderTextField from "../../utils/renderTextForm";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
    },
});

interface IProps extends WithStyles<typeof styles>, InjectedFormProps {
    handleSubmit: any
}

const Form = ({ classes, handleSubmit }: IProps) => {
    return (
        <form className={classes.root} noValidate={true} autoComplete="off" onSubmit={handleSubmit((v: any) => console.log(v))}>
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

const styledForm = withStyles(styles)(Form);

const FeedbackForm = reduxForm({
    form: 'contactForm'
})(styledForm);

export default FeedbackForm
