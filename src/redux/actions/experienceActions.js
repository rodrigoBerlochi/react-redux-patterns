// We can have a set of actions for each of the reducers
// That is helpful for later mantainance of the code, making easier to find things.
// 
// A helpful approach to order our code would be to define all the sub-domain of business of our application.
// Then, for each subdomain with a given name, we will have an action-module, a reducer module, 
// a state slice and a subtree of UI components corresponding to it. 
// 
// domain => state slice => reducer function => actions set => UI subtree implementation
// (regarding UI subtrees, remember that presentational components must be completely reusable and isolated from redux and app logic)

// In the Reducers directory I have an index.js to import all of the reducers. It makes sense since 
// we will combine all of them and export them as a single reducer to be used in the store creation
// Here for Actions, however, I'd prefer keeping each module alone. Then I will import only the module I'm interested in
// It would be a code smell that a given UI subtree needed to access actions from another subdomain.

export const SET_JOB_TITLE = 'SET_JOB_TITLE'
export const setJobTitle = payload => ({ type: SET_JOB_TITLE, payload })
