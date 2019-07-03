import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import localeReducer from "../locale/localeReducer";
import landingReducer from "../pages/landing/landingReducer";
import feedbackReducer from "../feedback/feedbackReducer";
import workReducer from "../pages/landing/section/work/workReducer";
import articleReducer from "../pages/article/articleReducer";

const rootReducer = combineReducers({
    form: formReducer,
    locale: localeReducer,
    landing: landingReducer,
    feedback: feedbackReducer,
    work: workReducer,
    article: articleReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer