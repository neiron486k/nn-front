import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {getArticle as fetchArticle} from "../../api/article";
import { setArticleAction } from "./articleAction";

const getArticle = (slug: string) => {
    return async (dispatch: ThunkDispatch<{},{}, AnyAction>) => {
        const response = await fetchArticle(slug);
        dispatch(setArticleAction(response.data))
    }
};