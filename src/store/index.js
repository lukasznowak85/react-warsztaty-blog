import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import logger from './middlewares/logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger)
  )
);
// const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

export default store;