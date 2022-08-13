import {combineReducers,createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {restaurantListReducer} from './reducers/restaurantreducers'

const reducers=combineReducers({
    restaurantReducer:restaurantListReducer
})
const initialstate={}
const middleware=[thunk]

const store=createStore(reducers,initialstate,applyMiddleware(...middleware))

export default store