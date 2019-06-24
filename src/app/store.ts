import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({});
const middleware = [thunk];
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware),
));

export default store