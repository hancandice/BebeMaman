import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import AppReducer from '..';
import {middleware} from '../../navigations/AppNavigation';

const configureStore = () =>
  createStore(AppReducer, applyMiddleware(thunk, middleware));

export default configureStore;
