import React, { Component, createContext } from 'react';

/**
 * Compound component is a pattern to build a component that actually is a GROUP of components
 * We know that usually this set of smaller component should or must be used together.
 * We want to communicate it to consumers, 
 * but at the same time we want to give some degree of freedom to consumers: they can opt out for including some
 * of the pieces, or can change the order or even maybe add an extra element.
 * 
 * In order to get it working as a Unit, we need a pattern to share State between them. 
 */
// modern approach is based on Context API
 const { Provider, Consumer } = createContext();

 // this a generic example, Parent is the compound component
 // and it has 2 children that are shipped together with it
 class Parent extends Component {
     // state to be shared with children
     state = {
        attr1: false,
        attr2: 'empty',
        attr3: 'active',
        changeAttr3: () => {}, // ugly but this sometimes react suggest to include state setter into the state to be shared down through context
     }
     // children are declared as STATIC props of the class
     // this pattern requires React Class notation
     static Child1 = (props) => (
        <Consumer>
            {
                context => <ChildLeft {...context} {...props} />
            }
        </Consumer>
     );
    // children must use Consumers to get read access to state
    // any other CHILD added into Parent, wont have access to the state
    // we spread both context and own props for this component, all of them
    // will be available together as props, but it is a design decision
     static Child2 = (props) => (
        <Consumer>
            {
                context => <Avatar {...context} {...props} />
            }
        </Consumer>
     );

     render() {
         return (
             <Provider value={this.state}>
                 {this.props.children}
             </Provider>
         );
     }
 }

 // We would use it this way...
 // eslint-disable-next-line no-unused-expressions
 <Parent className="ui-light">
     <label>This is an instance of Parent</label>
     <Parent.Child1>Hello, World</Parent.Child1>
     <Parent.Child2 img={'./gcp_provider/img/jsmith-3fj4.jpg'}>John Smit</Parent.Child2>
 </Parent>

 // Use cases: a Grid components, compouned of a Container, Columns, Rows
 // Other use case: a Form control that adheres to guidelines: Input set with label and error area. 