import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import counter from './counter'

const rootReducer = combineReducers(Object.assign({}, {
  counter
}, {
  routing: routeReducer
}))

export default rootReducer
