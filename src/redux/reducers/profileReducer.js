import defaultState from '../store/defaultState';
import { SET_NAMES, SET_LOC } from '../actions/profileActions';

// We extract only the slice of the default state we want
const { profile } = defaultState

// A reducer function MUST be PURE: operates over its own arguments and return the next state
// no side effects, no randomness, no network requests
export default function profileReducer (state = profile, action) {
    switch (action.type) {
        case SET_NAMES:
            return {...state, property: action.payload}
        default:
            return state // return previous State if action is unknown
    }
}