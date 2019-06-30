import React from 'react';

// a basic component...
const Button = ({
    children,
    ...props
}) => (<button {...props}>{children}</button>);

// ...can be wrapped by another to get a more complex one, as lego blocks
// children property is key here since whatever we pass into it can be rendered
const IconButton = ({img, alt}) => (<Button><img src={img} alt={alt} /></Button>);

// if we need more complex relationships between components, as sharing state or logic, 
// we could need to rely on patterns like Render Props, or Compound Components, HOC...
