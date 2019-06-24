import React from 'react';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles'
import withStyles from "@material-ui/core/styles/withStyles";
import { Button } from "@material-ui/core";
import classnames from 'classnames'
import { AppState } from "../app/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { setLocale } from "./localeOperation";
import { connect } from "react-redux";

const styles = (theme: Theme) => createStyles({
    root: {
        color: "#fff"
    }
});

interface Props extends WithStyles<typeof styles> {
    className?: string,
    setLang: Function
}

const LangMenu = ({ classes, className, setLang }: Props) => {
    return (
        <div className={classnames(classes.root, className)}>
            <Button color={"inherit"} component={"span"} onClick={() =>setLang('en')}>English</Button>
            <Button color={"inherit"} component={"span"} onClick={() =>setLang('ru')}>Русский</Button>
        </div>
    )
};

const mapStateToProps = (state: AppState) => ({
    lang: state.locale.lang
});

const mapDispatchToState = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    setLang: (lang: string) => dispatch(setLocale(lang))
});

export default connect(mapStateToProps, mapDispatchToState)(withStyles(styles)(LangMenu))

