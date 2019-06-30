import React from 'react';

// uncontrolled component
// no value attribute set to the input, on typing the event.target.value is passed to onchange callback
// that a parent form, could be reading to set the value in its state
class UncontrolledInput extends React.Component {
    render() {
        return <input type="text" onChange={this.props.onChange}/>
    }
}

// Controlled as a VALUE linked to the state, and a event handler that updates the value into de state
// defaultState can be handy for this scenario
class ControlledInput extends React.Component {
    state = {
        value: null,
    }
    changevalue({target}) {
        this.setState({
            value: target.value
        })
    }
    render() {
        return <input value={this.state.value} defaultValue={this.props.defaultValue} onChange={this.changeValue}  />
    }
}
