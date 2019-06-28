import { func, string } from 'prop-types';

/**
 * We can identify some properties that we want to be supported across
 * all our basic components. To avoid repeating them on each one, 
 * we can abstract them in object than then are imported and spread
 * out in our propTypes and defaultProps.
 * 
 * Using Typescript, they should be interfaces later extended on each component
 */

export const Types = {
    // event handlers
    onClick: func,
    onBlur: func,
    onFocus: func,
    onDoubleClick: func,
    onMouseDown: func,
    onMouseUp: func,
    // accesibility
    role: string,
    ariaRole: string,
}

export const Defaults  = {
    // event handlers
    onClick: () => {},
    onBlur: () => {},
    onFocus: () => {},
    onDoubleClick: () => {},
    onMouseDown: () => {},
    onMouseUp: () => {},
    // accesibility
    role: null,
    ariaRole: null,
}