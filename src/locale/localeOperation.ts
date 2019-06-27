import { setLocaleAction } from "./localeAction";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setLanguage } from "../utils/axios";

export const getLocale = (): string => {
    let lang = localStorage.getItem('i18Lang') || navigator.language;
    return lang.split('-')[0];
};

export const setLocale = (lang: string): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        localStorage.setItem('i18Lang', lang);
        dispatch(setLocaleAction(lang))
        setLanguage(lang);
    }
};