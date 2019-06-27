export const SET_FEEDBACK_MESSAGE = 'SET_FEEDBACK_MESSAGE';

export interface IFeedbackAction {
    type: typeof SET_FEEDBACK_MESSAGE
    message: string
}

export const setMessageAction = (message: string): IFeedbackAction => ({type: SET_FEEDBACK_MESSAGE, message});