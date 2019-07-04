import { IWorkAction, SET_WORKS } from "./workAction";
import { IArticle } from "../../../../api/article";

export interface IWorkState {
    works: IArticle[]
}

const initState = {
    works: [] as IArticle[]
};

const workReducer = (state:IWorkState = initState, action: IWorkAction): IWorkState => {
    switch (action.type) {
        case SET_WORKS:
            return {
                works: action.works
            };
        default:
            return state
    }
};

export default workReducer;