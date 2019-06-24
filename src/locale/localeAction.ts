export const SET_LOCALE = 'SET_LOCALE';

export interface ILocale {
    type: typeof SET_LOCALE
    lang: string
}

export const setLocaleAction = (lang: string): ILocale => ({type: SET_LOCALE, lang});