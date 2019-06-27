import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const setLanguage = (lang: string): void => {
    if(lang) {
        instance.defaults.headers.common['Accept-Language'] = lang;
    }
};

export default instance;