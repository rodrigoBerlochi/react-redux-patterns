# And what is this?

Just a simple code-notebook to write learnings and observations about how to use React and Redux in a project. 
Good practices or things I liked from my own experience or trustable sources. 
I started writing this repo with a question in mind: 
“How would I explain to a future team how in my experience would be a good way to organize a React-Redux application?
 How could we keep boilerplate to the minimum, and avoid that a growing application ends becoming a laberinth?”

At this point it is just intended for reading. Do not try to build or run. 

EVENTUALLY THIS WILL BECOME A NEW REPOSITORY ORGANIZED AS DOCUMENTATION-BOOK. 

## Content

1. [A basic organization of the root level application: redux|components|stories|app-ui](https://github.com/rodrigoBerlochi/react-redux-patterns/tree/master/src)
   1. In the real life I'd prefer keep components & stories for them in a separate repository 
2. [Creating the Redux Store](https://github.com/rodrigoBerlochi/react-redux-patterns/blob/master/src/redux/store/store.js)
   1. [Starting with a default state](https://github.com/rodrigoBerlochi/react-redux-patterns/blob/master/src/redux/store/defaultState.js)
3. [Reducer entry point]{https://github.com/rodrigoBerlochi/react-redux-patterns/blob/master/src/redux/reducers/index.js}
   1. [A specific reducer: Experience](https://github.com/rodrigoBerlochi/react-redux-patterns/blob/master/src/redux/reducers/experienceReducer.js)
   2. [The second reducer: Profile](https://github.com/rodrigoBerlochi/react-redux-patterns/blob/master/src/redux/reducers/profileReducer.js)
4. [Action module I](https://github.com/rodrigoBerlochi/react-redux-patterns/blob/master/src/redux/actions/experienceActions.js)
5. [Action module II](https://github.com/rodrigoBerlochi/react-redux-patterns/blob/master/src/redux/actions/profileActions.js)