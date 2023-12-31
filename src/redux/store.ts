import { combineReducers, createStore } from 'redux';
import userEventReducer from './user-events';
import recorderReducer from './recorder';

const rootReducer = combineReducers({
  userEvents: userEventReducer,
  recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
