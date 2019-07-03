import React, { useEffect } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import { AppState } from "../../app/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getArticle } from "./articleOperation";
import { connect } from "react-redux";
import { IArticle } from "../../api/article";
import { match } from "react-router";

const styles = (theme: Theme) => createStyles({
    root: {}
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
        <div>{article.title}</div>
    )
};

const mapStateToProps = (state: AppState) => ({
    article: state.article.article
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    fetchActicle: (slug: string) => dispatch(getArticle(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Article))