import React from 'react';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles'
import withStyles from "@material-ui/core/styles/withStyles";
import messages from './translations'
import { AppState } from "../app/reducer";
import { connect} from 'react-redux'

const styles = (theme: Theme) => createStyles({
    root: {}
});

interface IProps extends WithStyles<typeof styles> {
    lang: string,
    id: string
}

const FormatMessage = ({ id, lang }: IProps) => {
    const message = messages[lang][id] || id;

    return (
        <span>{message}</span>
    )
};

const mapStateToProps = (state: AppState) => ({ lang: state.locale.lang });

export default connect(mapStateToProps)(withStyles(styles)(FormatMessage));