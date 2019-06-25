import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import LangMenu from "../locale/LangMenu";
import { Button } from "@material-ui/core";
import FormatMessage from "../locale/FormatMessage";

const styles = (theme: Theme) => createStyles({
    root: {
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        position: 'absolute',
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
}

const RightPane = ({ classes }: IProps) => {
    return (
        <div className={classes.root}>
            <LangMenu className={classes.lang} />
            <Button color={"inherit"} component={"span"}>
                <FormatMessage id={'feedback'} />
            </Button>
        </div>
    )
};

export default withStyles(styles)(RightPane)