import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import logger from './middlewares/logger';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
);
// const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

export default store;