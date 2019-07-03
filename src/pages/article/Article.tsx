import React, { useEffect } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'

const styles = (theme: Theme) => createStyles({
    root: {}
});

interface IProps extends WithStyles<typeof styles> {
    slug: string
}

const Article = ({classes, slug}: IProps) => {
    return (
        <div>Article</div>
    )
};

export default withStyles(styles)(Article)