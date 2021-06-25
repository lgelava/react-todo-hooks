import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/rootReducer';

const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
