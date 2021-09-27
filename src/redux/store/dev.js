import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import AppReducer from '..';
import {middleware} from '../../navigations/AppNavigation';

const configureStore = () => {
  const logger = createLogger();
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers =
    (typeof window !== 'undefined' && devTools) || compose;

  const store = createStore(
    AppReducer,
    composeEnhancers(applyMiddleware(thunk, logger, middleware)),
  );

  return store;
};

export default configureStore;
