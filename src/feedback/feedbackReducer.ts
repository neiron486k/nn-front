import { IFeedbackAction, SET_FEEDBACK_MESSAGE } from "./feedbackAction";

export interface IFeedbackState {
    message: string
}

const initState = {
    message: ''
};

const feedbackReducer = (state: IFeedbackState = initState, action: IFeedbackAction): IFeedbackState => {
    switch (action.type) {
        case SET_FEEDBACK_MESSAGE:
            return {
                message: action.message
            };
        default:
            return state
    }
}

export default feedbackReducer