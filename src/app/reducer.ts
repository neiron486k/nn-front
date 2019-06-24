import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import localeReducer from "../locale/localeReducer";

const rootReducer = combineReducers({
    form: formReducer,
    locale: localeReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer