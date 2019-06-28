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

 /**
  * The "classic" approach is actually just previous to the current Context API
  * It uses a different React feature to integrate children and parents, 
  * it is verbose and a bit ugly, 
  * but maybe it has the advante of sharing the state with EVERY child, no matter if it part or not of the Parent definition
  */

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
     static Child1 = props => <ChildLeft {...props} />

     // this approach is less verbose to define the children, 
     // whom receive parent state as props
     static Child2 = props => <Avatar {...props} />

     render() {
         const { attr3, changeAttr3} = this.state;
        // we map and clone all children using react features
         return (
            React.Children.map(child => {
                return React.cloneElement(child, {
                    attr1: this.state.attr1, // more explicit here for easier understanding
                    attr2: this.state.attr2,
                    attr3, // short hand object notation possible
                    changeAttr3,
                });
            })
         );
     }
 }

 // We would use it this way...
 // eslint-disable-next-line no-unused-expressions
 <Parent className="ui-light">
     <label>This is an instance of Parent and has also access in its props to attr3</label>
     <Parent.Child1>Hello, World</Parent.Child1>
     <Parent.Child2 img={'./gcp_provider/img/jsmith-3fj4.jpg'}>John Smit</Parent.Child2>
 </Parent>

 // Use cases: a Grid components, compouned of a Container, Columns, Rows
 // Other use case: a Form control that adheres to guidelines: Input set with label and error area. 