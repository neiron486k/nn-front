import React, { useEffect } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import { AppState } from "../../app/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getArticle } from "./articleOperation";
import { connect } from "react-redux";
import { IArticle } from "../../api/article";
import { match } from "react-router";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100vh',
        overflow: 'hidden'
    },
    gridCover: {
        [theme.breakpoints.down('xs')]: {
            height: '20%'
        }
    },
    gridContent: {
        height: '100%',
        overflow: 'auto',
        [theme.breakpoints.down('xs')]: {
            height: '80%'
        }
    },
    container: {
        padding: theme.spacing(2),
    }
});

interface ArticleParams {
    slug: string;
}

interface IProps extends WithStyles<typeof styles> {
    match: match<ArticleParams>
    fetchActicle: Function
    article: IArticle
}

const Article = ({ classes, match, article, fetchActicle }: IProps) => {
    useEffect(() => {
        fetchActicle(match.params.slug);
    }, [fetchActicle]);

    return (
        <div className={classes.root}>
            <Grid container style={{height: '100%'}}>
                <Grid
                    item
                    sm={4}
                    xs={12}
                    style={{background: `url(${article.cover}) center / cover no-repeat`}}
                    className={classes.gridCover}
                >
                </Grid>
                <Grid
                    item
                    sm={8}
                    xs={12}
                    className={classes.gridContent}
                >
                    <Container fixed className={classes.container}>
                        <Typography variant={"h6"} align={"center"}>
                            {article.title}
                        </Typography>
                        <Typography dangerouslySetInnerHTML={{__html: article.content}} />
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
};

const mapStateToProps = (state: AppState) => ({
    article: state.article.article
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    fetchActicle: (slug: string) => dispatch(getArticle(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Article))