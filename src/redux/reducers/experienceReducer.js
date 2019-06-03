import defaultState from '../store/defaultState'

// we extract only the slice of the default state we want
const { experience } = defaultState

// a reducer function MUST be PURE: operates over its own arguments and return the next state
// no side effects, no randomness, no ajax: that makes operations that change state of the app easier
// to udnerstand and comprobable, previsible. The unpure process are in another place, usually thunks, sagas, helpers. 

// state parameter correspond to the slice of the global State that is handled by this reducer, not the whole structure
export default function experienceReducer (state = experience, action) {
    switch (action.type) {
        case 'ACTION_NAME':
            return {...state, property: action.payload}
        default:
            return state // return previous State if action is unknown
    }
}