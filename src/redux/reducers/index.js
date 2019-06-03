import { combineReducers } from 'redux'

// exporting reducers as default, and giving then here when importing 
// a semantic name, will reduce boilerplate. when combining reducers, thanks to ES6
// object props short noation, we can use this importing name as property names below
// keep in mind those name in the combinator will later be used when accessing the values in the store
// e.g.: state.profile.name
import profile from './profileReducer'
import experience from './profileReducer'

// delegate to redux helper the work of merging all our reducer in a single one
// thanks to it we can have a single store with the advantage that means to sync all the UI
// but at the same time having smaller reducers, easy to mantain and better to communicate
// that we have different business domains in this application and our code should be consistent with that
export default combineReducers({
    profile,
    experience,
})

// Reducers are the piece in this architecture that describes how the app state can change 
// for each type of expected change