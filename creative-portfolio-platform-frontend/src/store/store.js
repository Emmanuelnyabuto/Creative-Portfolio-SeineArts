import { createStore } from 'redux';
import rootReducer from './reducers'; // Assume you have combined reducers here

const store = createStore(rootReducer);

export default store;
