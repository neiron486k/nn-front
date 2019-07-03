import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {getArticle as fetchArticle} from "../../api/article";
import { setArticleAction } from "./articleAction";

export const getArticle = (slug: string) => {
    return async (dispatch: ThunkDispatch<{},{}, AnyAction>) => {
        try {
            const response = await fetchArticle(slug);
            dispatch(setArticleAction(response))
        } catch (e) {
            // @todo implement logic here
            console.log('article not found')
        }
    }
}