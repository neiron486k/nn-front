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
    root: {},
    button: {
        color: 'rgba(255, 255, 255, .7)'
    },
});

interface Props extends WithStyles<typeof styles> {
    className?: string,
    setLang: Function
    lang: string
}

const LangMenu = ({ classes, className, setLang, lang }: Props) => {
    return (
        <div className={classnames(classes.root, className)}>
            <Button
                className={classes.button}
                component={"span"}
                onClick={() => setLang('en')}
                style={{ color: lang === 'en' && '#fff' }}
                variant={"text"}
                size={"small"}
            >
                English
            </Button>
            <Button
                className={classes.button}
                component={"span"}
                onClick={() => setLang('ru')}
                style={{ color: lang === 'ru' && '#fff' }}
                size={"small"}
                variant={"text"}
            >
                Русский
            </Button>
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

