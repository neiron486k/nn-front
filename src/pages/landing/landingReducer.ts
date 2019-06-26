import { ILandingSection, SET_SECTION } from "./landingAction";

const InitState = {
    section: 'intro'
};

interface ILandingState {
    section: string
}

const landingReducer = (state: ILandingState = InitState, action: ILandingSection) => {
    switch (action.type) {
        case SET_SECTION:
            return {
                section: action.section
            };
        default:
            return state
    }
};

export default landingReducer;