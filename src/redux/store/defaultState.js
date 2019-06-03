// Here goes the pristine state of the application when it just starts
// This a Global State, intended to be shared across the application
// Do not place here state that should be owned by only specific components
// Ask yourself if each new property is a concern of the application business
// or is a concern only of a particular component. Redux DOCs differentiate between app DATA and UI state
// Global State is here to help different parts of the application accessing values that
// are shared concerns and keep all the UI synced! That is a great benefit if your app as some size
// But making local state global, is an error. Think of it as local vs global scope when we talk about plain javscript
// If a state can be local, always prefer it over global
// That said, having a default state and keeping it always updated it is of great help when the app scales up
export default {
    profile: {
        firstname: null, // better to avoid empty strings, since are not serializable 
        lastName: null,
        location: null,
        skills: [],
        language: 'english',
    },
    experience: {
        jobTitle: '',
    }
}

// why this object shape for the default object?
// I like the idea of having a single place where all the global state is declared
// if you need to add or remove a property or just to check which are the attributes that already exist
// you know where is the place to look at
// however each reducer manage its own default state, even when is recombined in a single one inside our redux app
// so keys as rofile and experience express that relationship and help to slice it in the reducers