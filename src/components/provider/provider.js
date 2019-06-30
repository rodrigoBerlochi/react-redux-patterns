import React, {Component, createContext} from 'react';

/**
 * Provider uses Context to share values to children
 * This is just a way to implement it using Consumer as static prop of the class
 * Another way is as in compound-components if children are predefined
 * Or using a HOC for the consumer. 
 */

 const [Provider, Consumer] = createContext();

 class Parent extends Component {
     static Consumer = Consumer

     state = {
         on: false,
         placeholder: null,
     }

     render() {
         return (
             <Provider value={this.state}>
                 this.props.children()
             </Provider>
         )
     }
 }

 // eslint-disable-next-line no-unused-expressions
 <Parent>
     <Parent.Consumer>
        {() => {
            return <h1>hello</h1>
        }}
     </Parent.Consumer>
 </Parent>