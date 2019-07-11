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
import sleep from "../../utils/sleep";
import { setArticleAction } from "./articleAction";
import CircularProgress from '@material-ui/core/CircularProgress';
import FormatMessage from "../../locale/FormatMessage";

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100vh',
        overflow: 'hidden'
    },
    loader: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
    article: IArticle,
    articles: IArticle[]
    lang: string,
    history: any,
    articleLoaded: boolean
}

const Article = ({ classes, article, articles, fetchArticle, fetchArticles, lang, match, history, articleLoaded }: IProps) => {
    const timeout = 800;
    const [open, setOpen] = useState(true);

    useEffect(() => {
        fetchArticle(match.params.slug);
    }, [fetchArticle, lang]);

    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    const getIndex = (article: IArticle): number => {
        return articles.findIndex(item => item.id === article.id);
    };

    const list = async (action: 'prev' | 'next') => {
        const index = getIndex(article);
        const pos = action === 'prev' ? -1 : 1;
        const targetArticle = articles[index + pos];

        if (targetArticle) {
            setOpen(false);
            await sleep(timeout);
            fetchArticle(targetArticle.slug);

            if (articleLoaded) {
                history.push('/articles/' + targetArticle.slug);
                setOpen(true);
            }
        }
    };

    return (
        <div className={classes.root}>
            {!articleLoaded ? <div className={classes.loader}>
                    <CircularProgress />
                </div> :
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
                                    <Button color={"inherit"} onClick={() => list("prev")}><FormatMessage id={'prev'} /></Button>
                                    <Button color={"inherit"} onClick={() => list("next")}><FormatMessage id={'next'} /></Button>
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
            }
        </div>
    )
};

const mapStateToProps = (state: AppState) => ({
    article: state.article.article,
    articles: state.article.articles,
    articleLoaded: state.article.articleLoaded,
    lang: state.locale.lang,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    fetchArticle: (slug: string) => dispatch(getArticle(slug)),
    fetchArticles: () => dispatch(getArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter<any>(Article)))