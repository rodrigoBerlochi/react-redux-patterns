import React from 'react';

/**
 * Simple way to return a predefined set of properties 
 * that some component must have
 * Example: accesibility props
 */
class Collection extends React.Component {

    getPropsCollection () {
        return {
            ariaLabel: '',
            ariarole: '',
        }
    }

    render() {
        return (
            this.props.children(...this.getPropsCollection())
        )
    }
}