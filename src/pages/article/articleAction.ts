import { IArticle } from "../../api/article";

export const START_FETCH_ARTICLE = 'START_FETCH_ARTICLE';
export const SET_ARTICLE = 'SET_ARTICLE';
export const SET_ARTICLES = 'SET_ARTICLES';

export interface IArticleAction {
    type: typeof SET_ARTICLE | typeof SET_ARTICLES | typeof START_FETCH_ARTICLE,
    article?: IArticle
    articles?: IArticle[]
    loadingArticle?: boolean
}

export const startFetchActionAction = () => ({type: START_FETCH_ARTICLE});
export const setArticleAction = (article: IArticle): IArticleAction => ({type: SET_ARTICLE, article});
export const setArticlesAction = (articles: IArticle[]): IArticleAction => ({type: SET_ARTICLES, articles});