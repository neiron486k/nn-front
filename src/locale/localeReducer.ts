import { ILocale, SET_LOCALE } from "./localeAction";

export interface ILocaleState {
    lang: string
}

const initState = {
    lang: 'en'
};

const localeReducer = (state = initState, action: ILocale): ILocaleState => {
    switch (action.type) {
        case SET_LOCALE:
            return {
                lang: action.lang
            };
        default:
            return state
    }
};

export default localeReducer;