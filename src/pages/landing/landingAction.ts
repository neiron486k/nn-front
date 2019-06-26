export const SET_SECTION = 'SET_SECTION';

export interface ILandingSection {
    type: typeof SET_SECTION
    section: string
}

export const setSectionAction = (section: string): ILandingSection  => ({type: SET_SECTION, section});