// Actions are actual changes and change's descriptors. 
// Every change in the app foundational state, has place when an Action is Dispatched
// That Action is an object (eventually) that identifies what happened and data involved
// in the change

// action types are exported as constants with UPPERCASE names, 
// while action creators are exported with camelCase as usualin functions
// The type exported then will be used in the reducer, since it is the way reducers indetify
// received actions. 
// Action types can be defined in a specific file, but lastly I prefer defining them together with the action
// using it, since they are a unit and avoid spreading that code across 3 different files
export const SET_NAMES = 'SET_NAMES';
// action creators as functions that return action-objects
export function setName (payload) {
    return {
        type: SET_NAMES,
        payload
    }
}
// this is used in this way: dispatch(setName(data))

// short syntax:
export const SET_LOC = 'SET_LOCATION';
export const setLocation = payload => ({ type: SET_LOC, payload})



