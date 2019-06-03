// We can have a set of actions for each of the reducers
// that is helpful for later mantainance making easier to find things.
// 
// This way we know that for a Domain or subdomain of the app business
// we will get a module with the domain name containing Actions that produce changes
// a reducer with the domain name calculating the next state inside that domain
// and even at component level, we can have clear UI trees corresponding to those domains
// domain => state slice => reducer function => actions set => UI subtree implementation
// (regarding UI subtrees, recall that presentational components must be completely reusable and isolated of redux and app logic)

// In the Reducers directory, I have an index.js to import all of the reducers. It makes sense since 
// we will combine all of them and export as a single reducer to be used in the store creation
// Here for Actions, however, I'd prefer keeping each module alone. Then I will import only the module I'm interested in
// It is unlikely that the UI section created for the Rendering the experience, needs the to change the state regarding the profile

export const SET_JOB_TITLE = 'SET_JOB_TITLE'
export const setJobTitle = payload => ({ type: SET_JOB_TITLE, payload })
