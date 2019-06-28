import React from 'react';
import { string, oneOf, object } from 'prop-types';
import { Defaults, Types } from '../common-attributes';

// a library of components can be based on a set of atomic/primitives components
// that will be the base block for bulding more complex components 
// That has been called Singel Pattern
//
// A primitive must reflect an element in HTML, regarding a spec (eg HTML5)
// custom behavior must not be added at this level, but wrappin it into another component
// in a different layer

/**
 * HTML5 <a> tag
 */

 // for primitive I'd prefer named exports, in order to keep consistently named across the app them

export const Link = ({
    children,
    className,
    style,
    ...props
}) => {
    // a primitive must render only 1 single element
    // here it is just an <a>

    // provide support for extra class names and complete style objects,
    // it makes the basic element flexible and reusable from a Styling perspective
    return (
        <a 
            className={`mylib-link ${className}`}
            style={style}
            {...props}
        >
            {children}
        </a>
    )
}


// primitives must only get native attributes with the exact native names

// we will have a long work declaring possible props and defaults, even more than the code of
// so atomic components, but this way we provide a complete interface for the consumer
Link.propsTypes = {
    href: string,
    download: string,
    media: string,
    hreflang: string,
    referrerpolicy: string,
    rel: string,
    target: oneOf(['_blank','_parent','_self','_top', string]),
    type: string,
    className: string,
    style: object,
    // event handlers are gottenas props too, so spreading the rest props will set also them
    // provide support for all or at least the most used ones (probably defined at project level)
    ...Types,
}

// if values are not provided for these props, the component should not break
Link.defaultProps = {
    href: '#',
    download: null,
    media: null,
    hreflang: null,
    referrerpolicy: null,
    rel: null,
    target: '_self',
    type: null,
    className: '',
    style: null,
    ...Defaults,
}
