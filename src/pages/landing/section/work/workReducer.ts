import { IWorkAction, SET_WORKS } from "./workAction";
import { IWork } from "./Work";

export interface IWorkState {
    works: IWork[]
}

const initState = {
    works: [] as IWork[]
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