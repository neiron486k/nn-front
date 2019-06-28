import { createStyles, Grid, Theme, WithStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import { GridSize } from "@material-ui/core/Grid";

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100%',
        paddingTop: theme.spacing(.2),
        paddingLeft: theme.spacing(.2),
        background: '#000',
        overflow: 'auto'
    },
    item: {
        paddingRight: theme.spacing(.2),
        paddingBottom: theme.spacing(.2),
        minHeight: 300
    },
    work: {
        height: '100%'
    }
});

export interface IWork {
    id: number
}

interface IProps extends WithStyles<typeof styles> {
}

const works = [
    { image: 'https://ic.pics.livejournal.com/perisher_13/60279408/1736698/1736698_original.jpg' },
    { image: 'https://ic.pics.livejournal.com/perisher_13/60279408/1736698/1736698_original.jpg' },
    { image: 'https://ic.pics.livejournal.com/perisher_13/60279408/1736698/1736698_original.jpg' },
    { image: 'https://ic.pics.livejournal.com/perisher_13/60279408/1736698/1736698_original.jpg' },
    { image: 'https://ic.pics.livejournal.com/perisher_13/60279408/1736698/1736698_original.jpg' },
    { image: 'https://ic.pics.livejournal.com/perisher_13/60279408/1736698/1736698_original.jpg' },
    { image: 'https://ic.pics.livejournal.com/perisher_13/60279408/1736698/1736698_original.jpg' },
    { image: 'https://ic.pics.livejournal.com/perisher_13/60279408/1736698/1736698_original.jpg' },
];

const Work = ({ classes }: IProps) => {
    const size = 3;
    const count = works.length;
    const k = Math.floor(count / size); // count of full row stack
    let cols = 12 / size;
    let i = 0;


    return (
        <div className={classes.root}>
            <Grid container style={{ height: '100%' }}>
                {works.map((item, index) => {
                    const style = {
                        background: `url(${item.image}) center / cover no-repeat`
                    };

                    if (i >= k) {
                        cols = 12 / (count % size);

                    }

                    if ((index + 1) % size === 0) {
                        i += 1
                    }

                    return (
                        <Grid
                            key={index}
                            item={true}
                            sm={cols as GridSize}
                            xs={12}
                            className={classes.item}
                        >
                            <div className={classes.work} style={style}>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
};

export default withStyles(styles)(Work)