import { IArticle } from "../../api/article";
import { IArticleAction, SET_ARTICLE, SET_ARTICLES, START_FETCH_ARTICLE } from "./articleAction";

export interface IArticleState {
    article?: IArticle
    articles?: IArticle[]
    loadingArticle: boolean
}

const initState = {
    article: {} as IArticle,
    articles: [] as IArticle[],
    loadingArticle: false
};

const articleReducer = (state: IArticleState = initState, action: IArticleAction): IArticleState => {
    switch (action.type) {
        case START_FETCH_ARTICLE:
            return {
                ...state,
                loadingArticle: true
            };
        case SET_ARTICLE:
            return {
                ...state,
                article: action.article,
                loadingArticle: false
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