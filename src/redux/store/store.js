import { createStore } from 'redux'
import reducers from '../reducers/'

// TODO this param allows to hydrate an state on loading the app
// useful when doing server side rendering
const initialState = {}

// this single line creates a single global state,
// it keeps in memory an object holding our state and protects it from wrong intents of transforming it.
// Now only dipacth() can modify it. This single line also ensures us that when the state changes, 
// every subscriber will be notified
// having a redux store we will be able to see what happens inside using redux-dev-tools. All those changes are visible to us
const store = createStore(reducers, initialState)

const { dispatch } = store

// we make public the store that will be linked to our application
// passing it to the Provider value={store}. Provider is part of the react-redux binding, 
// since it is a react component that makes available the global state to every component connect()ed
// also I'm optionally exporting the dispatch. Few times there are complex process outside of our components
// that need to trigger a state transformation. Instead of triggering it from a component connect()ed to the store,
// we can dispatch actions also from those process importing it
export {
    store,
    dispatch
}