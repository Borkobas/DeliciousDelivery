// client/src/store.js

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getAllDishesReducer } from './reducers/dishReducers';
import { cartReducer } from './reducers/cartReducers'


const rootReducer = combineReducers({
  getAllDishesReducer: getAllDishesReducer,
  cartReducer : cartReducer
});

const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
