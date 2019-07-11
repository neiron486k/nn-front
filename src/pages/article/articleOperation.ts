import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getArticle as fetchArticle, getArticles as fetchArticles } from "../../api/article";
import { setArticleAction, setArticlesAction, startFetchActionAction } from "./articleAction";

export const getArticle = (slug: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            dispatch(startFetchActionAction());
            const response = await fetchArticle(slug);
            dispatch(setArticleAction(response))
        } catch (e) {
            // @todo implement logic here
            console.log('article not found')
        }
    }
};

export const getArticles = (type?: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const response = await fetchArticles(type);
        dispatch(setArticlesAction(response))
    }
};