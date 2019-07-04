import axios from "../utils/axios";

export interface IArticle {
    title: string
    id: number
    slug: string
    description: string
    content: string
    cover: string
    type: {
        id: number
        code: string
    }
}

export const getArticles = async (type?: string): Promise<IArticle[]> => {
    let url = '/articles';

    if (type !== undefined) {
        url = url + '?type=' + type
    }

    const response = await axios.get(url);
    return response.data;
};

export const getArticle = async (slug: string): Promise<IArticle> => {
    let url = '/articles/' + slug;
    const response = await axios.get(url);
    return await response.data
};