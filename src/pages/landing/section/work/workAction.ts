import { IArticle } from "../../../../api/article";

export const SET_WORKS = 'SET_WORKS';

export interface IWorkAction {
    type: typeof SET_WORKS
    works: IArticle[]
}

export const setWorksAction = (works: IArticle[]): IWorkAction => ({ type: SET_WORKS, works });