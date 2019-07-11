import React, { useEffect, useState } from 'react';
import { Button, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import { AppState } from "../../app/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getArticle, getArticles } from "./articleOperation";
import { connect } from "react-redux";
import { IArticle } from "../../api/article";
import { match, withRouter } from "react-router";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import LangMenu from "../../locale/LangMenu";
import { ButtonLink } from "../landing/section/work/Work";
import { setArticleAction } from "./articleAction";
import sleep from "../../utils/sleep";

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100vh',
        overflow: 'hidden'
    },
    gridCover: {
        // position: 'relative',
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
    nav: {
        color: '#fff',
        display: 'flex',
        background: 'rgba(0,0,0,.5)'
    },
    lang: {
        flexGrow: 1
    },
    container: {
        padding: theme.spacing(2),
        overflow: 'hidden'
    },
});

interface ArticleParams {
    slug: string;
}

interface IProps extends WithStyles<typeof styles> {
    match: match<ArticleParams>
    fetchArticle: Function
    fetchArticles: Function
    setArticle: Function
    article: IArticle,
    articles: IArticle[]
    lang: string,
    history: any
}

const Article = ({ classes, match, article, articles, fetchArticle, fetchArticles, lang, setArticle, history }: IProps) => {
    const timeout = 800;
    const [open, setOpen] = useState(true);

    useEffect(() => {
        fetchArticle(match.params.slug);
    }, [fetchArticle, lang, match.params.slug]);

    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    const getIndex = (article: IArticle): number => {
        const index = articles.findIndex(item => item.id === article.id);
        return index;
    };

    const prev = async () => {
        const index = getIndex(article);
        const targetArticle = articles[index - 1];

        if (targetArticle) {
            setOpen(false);
            await sleep(timeout);
            setArticle(targetArticle);
            setOpen(true);
            history.push('/articles/' + targetArticle.slug)
        }
    };

    const next = async () => {
        const index = getIndex(article);
        const targetArticle = articles[index + 1];

        if (targetArticle) {
            setOpen(false);
            await sleep(timeout);
            setArticle(targetArticle);
            setOpen(true);
            history.push('/articles/' + targetArticle.slug)
        }
    };

    return (
        <div className={classes.root}>
            <Grid container style={{ height: '100%' }}>
                <Grid
                    item
                    sm={4}
                    xs={12}
                    className={classes.gridCover}
                >
                    <Slide
                        in={open}
                        direction={"right"}
                        timeout={timeout}
                    >
                        <div
                            className={classes.cover}
                            style={{ background: `url(${article.cover}) center / cover no-repeat` }}
                        >
                            <nav className={classes.nav}>
                                <LangMenu className={classes.lang} />
                                <Button color={"inherit"} onClick={prev}>prev</Button>
                                <Button color={"inherit"} onClick={next}>next</Button>
                            </nav>
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
                            timeout={timeout}
                            in={open}
                        >
                            <Typography variant={"h6"} align={"center"}>
                                {article.title}
                            </Typography>
                        </Slide>
                        <Slide
                            in={open}
                            direction={"up"}
                            timeout={timeout}
                        >
                            <Typography dangerouslySetInnerHTML={{ __html: article.content }} />
                        </Slide>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
};

const mapStateToProps = (state: AppState) => ({
    article: state.article.article,
    articles: state.article.articles,
    loadingArticle: state.article.loadingArticle,
    lang: state.locale.lang,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    fetchArticle: (slug: string) => dispatch(getArticle(slug)),
    fetchArticles: () => dispatch(getArticles()),
    setArticle: (article: IArticle) => dispatch(setArticleAction(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter<any>(Article)))