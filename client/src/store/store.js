import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunkMiddleware from 'redux-thunk';

import { fetchTweets } from '../actions';
import { initialState } from '../reducers/params';

const { params } = initialState;

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

store.dispatch(fetchTweets(params.hashtag, params.count, params.result_type)).then(() => console.log(store.getState()))

export default store