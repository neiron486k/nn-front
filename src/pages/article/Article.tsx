import React, { useEffect, useState } from 'react';
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
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import LangMenu from "../../locale/LangMenu";
import { bool } from "prop-types";

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
        overflowY: 'auto',
        [theme.breakpoints.down('xs')]: {
            height: '80%'
        }
    },
    cover: {
        height: '100%'
    },
    lang: {
        background: 'rgba(0,0,0,.4)',
        display: 'inline-block'
    },
    container: {
        padding: theme.spacing(2),
        overflow: 'hidden'
    }
});

interface ArticleParams {
    slug: string;
}

interface IProps extends WithStyles<typeof styles> {
    match: match<ArticleParams>
    fetchActicle: Function
    article: IArticle,
    lang: string
}

const Article = ({ classes, match, article, fetchActicle, lang }: IProps) => {
    const [title, setTitle] = useState(false);
    const [cover, setCover] = useState(false);

    useEffect(() => {
        fetchActicle(match.params.slug);
    }, [fetchActicle, lang]);

    return (
        <div className={classes.root}>
            <Grid container style={{height: '100%'}}>
                <Grid
                    item
                    sm={4}
                    xs={12}
                    className={classes.gridCover}
                >
                    <Slide
                        in={article.cover !== undefined}
                        direction={"right"}
                        timeout={400}
                        onEntered={() => setCover(true)}
                    >
                        <div
                            className={classes.cover}
                            style={{background: `url(${article.cover}) center / cover no-repeat`}}
                        >
                            <LangMenu className={classes.lang} />
                        </div>
                    </Slide>
                </Grid>
                <Grid
                    item
                    sm={8}
                    xs={12}
                    className={classes.gridContent}
                >
                    <Container fixed className={classes.container}>
                        <Slide
                            direction={"left"}
                            in={article.title !== undefined && cover}
                            timeout={400}
                            onEntered={() => setTitle(true)}
                        >
                            <Typography variant={"h6"} align={"center"}>
                                {article.title}
                            </Typography>
                        </Slide>
                        <Slide in={article.content !== undefined && title} direction={"up"} timeout={400}>
                            <Typography dangerouslySetInnerHTML={{__html: article.content}} />
                        </Slide>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
};

const mapStateToProps = (state: AppState) => ({
    article: state.article.article,
    lang: state.locale.lang
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    fetchActicle: (slug: string) => dispatch(getArticle(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Article))