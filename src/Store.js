// Detects the platform in which the app is running
import { Platform } from 'react-native';
import {
  createStore, // Create initial store and pass to <Provider>
  applyMiddleware, // Applying
  compose // Compose functions from right to left
} from 'redux';

import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
  RootReducer,
  compose(
    middleware,
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678
    })
  )
)

export default Store;
