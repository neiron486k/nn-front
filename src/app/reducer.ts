import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import localeReducer from "../locale/localeReducer";
import feedbackReducer from "../feedback/feedbackReducer";
import landingReducer from "../pages/landing/landingReducer";

const rootReducer = combineReducers({
    form: formReducer,
    locale: localeReducer,
    feedback: feedbackReducer,
    landing: landingReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer