import { IArticle } from "../../api/article";
import { IArticleAction, SET_ARTICLE } from "./articleAction";

export interface IArticleState {
    article: IArticle
}

const initState = {
    article: {} as IArticle
};

const articleReducer = (state: IArticleState = initState, action: IArticleAction): IArticleState => {
    switch (action.type) {
        case SET_ARTICLE:
            return {
                article: action.article
            };
        default:
            return state
    }
};

export default articleReducer;