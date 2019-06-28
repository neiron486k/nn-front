import axios from "../utils/axios";

export const getArticles = async (type?: string) => {
    let url = '/articles';

    if (type !== undefined) {
        url = url + '?type=' + type
    }

    return await axios.get(url)
};