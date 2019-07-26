import React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles'
import {Link, LinkProps} from 'react-router-dom';
import {Button} from "@material-ui/core";
import classnames from "classnames"

const styles = (theme: Theme) => createStyles({
    root: {},
});

interface IProps extends WithStyles<typeof styles> {
    className?: string
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
    <Link innerRef={ref as any} {...props} />
));

const ToStart = ({classes, className}: IProps) => {
    return (
        <Button
            component={ButtonLink}
            to="/"
            className={classnames(classes.root, className)}
            color={"inherit"}
        >
            To Start
        </Button>
    )
};

export default withStyles(styles)(ToStart)