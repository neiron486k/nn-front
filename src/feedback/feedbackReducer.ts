import { FEEDBACK_OPEN, IFeedbackAction } from "./feedbackAction";

interface IFeedbackState {
    open: boolean
}

const InitState = {
    open: false
};

const feedbackReducer = (state: IFeedbackState = InitState, action: IFeedbackAction) => {
    switch (action.type) {
        case FEEDBACK_OPEN: {
            return {
                open: action.open
            }
        }
        default:
            return state
    }
};

export default feedbackReducer;