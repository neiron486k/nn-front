import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getArticles } from "../../../../api/article";
import { setWorksAction } from "./workAction";

export const getWorks = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            const response = await getArticles('work');
            dispatch(setWorksAction(response));
        } catch (e) {
            console.log('articles not found')
        }
    }
};