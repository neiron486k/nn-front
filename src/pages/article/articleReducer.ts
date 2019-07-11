import { IArticle } from "../../api/article";
import { IArticleAction, SET_ARTICLE, SET_ARTICLES, START_FETCH_ARTICLE } from "./articleAction";

export interface IArticleState {
    article?: IArticle
    articles?: IArticle[]
    articleLoaded: boolean
}

const initState = {
    article: {} as IArticle,
    articles: [] as IArticle[],
    articleLoaded: false
};

const articleReducer = (state: IArticleState = initState, action: IArticleAction): IArticleState => {
    switch (action.type) {
        case START_FETCH_ARTICLE:
            return {
                ...state,
                articleLoaded: false
            };
        case SET_ARTICLE:
            return {
                ...state,
                article: action.article,
                articleLoaded: true
            };
        case SET_ARTICLES:
            return {
                ...state,
                articles: action.articles
            };
        default:
            return state
    }
};

export default articleReducer;