import { createStyles, Grid, Theme, WithStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import React, { useEffect } from "react";
import { GridSize } from "@material-ui/core/Grid";
import { AppState } from "../../../../app/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getWorks } from "./workOperation";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

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
        minHeight: 300,
        color: '#fff'
    },
    work: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export interface IWork {
    id: number
    cover: string
    title: string
    description: string
    content: string
    type: {
        id: number
        code: string
    }
}

interface IProps extends WithStyles<typeof styles> {
    works: IWork[],
    getData: Function
    lang: string
}

const Work = ({ classes, works, getData, lang }: IProps) => {
    const size = 3;
    const count = works.length;
    const k = Math.floor(count / size); // count of full row stack
    let cols = 12 / size;
    let i = 0;

    useEffect(() => {
        getData();
    }, [lang]);


    return (
        <div className={classes.root}>
            <Grid container style={{ height: '100%' }}>
                {works.map((item, index) => {
                    const style = {
                        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${item.cover}) center / cover no-repeat`,
                        '&:hover': {
                            background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${item.cover}) center / cover no-repeat`,
                        }
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
                                <Button variant="outlined" color={"inherit"}>
                                    {item.title}
                                </Button>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
};

const mapStateToProps = (state: AppState) => ({
    works: state.work.works,
    lang: state.locale.lang
});
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    getData: () => dispatch(getWorks())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Work))