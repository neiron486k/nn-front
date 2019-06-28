import { IWork } from "./Work";

export const SET_WORKS = 'SET_WORKS';

export interface IWorkAction {
    type: typeof SET_WORKS
    works: IWork[]
}

export const setWorksAction = (works: IWork[]): IWorkAction => ({ type: SET_WORKS, works });