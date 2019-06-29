import React from 'react';

/**
 * State Initializer stores a permanently a copy of the intial state 
 * in order to be reset later if needed
 * In some cases we cna get similar effect assigning a Key to the component and changing it
 * to reset to initial state
 */

 class Entity extends React.Component {
     initialState = {
         attribute1: this.props.title,
     }

     state = this.initialState

     reset() {
         this.setState(this.initialState)
     }

     render() {
         return (
             <button onClick={this.reset}>Reset!</button>
         )
     }
 }