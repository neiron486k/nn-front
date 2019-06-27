import { reset, SubmissionError } from "redux-form";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { FEEDBACK_FORM, IFeedbackForm } from "./form/FeedbackForm";
import { sendFeedbackRequest } from "../api/feedback";

export const sendFeedback = (values: IFeedbackForm) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any>  => {
        try {
            const response = await sendFeedbackRequest(values);
            // const message = response.data;
            // dispatch(openSnackbar(message, 'success'));
            dispatch(reset(FEEDBACK_FORM));
        } catch (e) {
            const errors = e.response.data.errors;
            throw new SubmissionError(errors);
        }
    }
};