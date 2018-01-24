import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
