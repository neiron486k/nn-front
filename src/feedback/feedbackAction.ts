export const FEEDBACK_OPEN =  'FEEDBACK_OPEN';

export interface IFeedbackAction {
    type: typeof FEEDBACK_OPEN,
    open: boolean
}
export const openFeedbackAction = (open: boolean):IFeedbackAction  => ({type: FEEDBACK_OPEN, open});