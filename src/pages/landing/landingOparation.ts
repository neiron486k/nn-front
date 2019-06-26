import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { setSectionAction } from "./landingAction";

export const getLandingSection = (): string => {
    return localStorage.getItem('LSection') || 'intro';
};

export const setLandingSection = (section: string): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        localStorage.setItem('LSection', section);
        dispatch(setSectionAction(section))
    }
};