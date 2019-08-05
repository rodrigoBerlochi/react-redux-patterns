import { createStore } from 'redux'
import reducers from '../reducers/'

// TODO: this param allows to hydrate an state on loading the app
// useful when doing server side rendering
const initialState = {}

// This line creates a single global state,
// it keeps in memory an object holding our state and protects it from wrong intents of transforming it.
// Now only dipacth() can modify it. This single line also ensures us that when the state changes, 
// every subscriber will be notified.
// We will be able to see what happens inside it using redux-dev-tools. All those changes are visible to us
const store = createStore(reducers, initialState)

const { dispatch } = store

// We make public the store that will be linked to our application
// passing it to the Provider value={store}. Provider is part of the react-redux binding. 
// It is a react component that makes available the global state to every component connect()ed
// also I'm optionally exporting the dispatch. Few times there are complex process outside of our components
// that need to trigger a state transformation. Instead of triggering it from a component connect()ed to the store,
// we can dispatch actions also from those process importing it. That is something to think about. Is that correct?
// Should all the changes to the Store start inside a component? Or could we have edge cases where UI-related logic
// needs to trigger a store change without involving a component? I have seen that situation in real projects, and I
// feel like the worst case would be to couple a process to a component only because it needs to dispatch an action. 
export {
    store,
    dispatch
}