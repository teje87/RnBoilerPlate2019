import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dummyReducer from './src/redux/reducers/dummyReducer';

const reducer = combineReducers({ dummyReducer });

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
