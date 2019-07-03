import { IArticle } from "../../api/article";

export const SET_ARTICLE = 'SET_ARTICLE';

export interface IArticleAction {
    type: typeof SET_ARTICLE,
    article: IArticle
}

export const setArticleAction = (article: IArticle): IArticleAction => ({type: SET_ARTICLE, article});