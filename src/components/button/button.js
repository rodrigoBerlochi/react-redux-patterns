import React from 'react';
import { string, func } from 'prop-types';

// First, outside of this example context, I'd rather have presentational components
// in their own repository than into the application code. Also I'd include a tool
// like Storybook in that repo. We wroked with that approach for Tableau, and the experience
// was excellent. It enforces keeping presentational components truly isolated from specific
// implementation of the business application. And it means they are reusable and easy to test.

// nothing fancy here for now
// just a minimal component exported as default
// that will use in other modules. 
// It is worth noting that exporting as default a component
// is considered a good practice and enforced by some linter rules
// I think it is a good way to allow better semantic on the consumer side
// sice instead of importing a Button, it can name it in way more meaningful
// for the usage context, e.g.: PlayButton
const Button = ({
    text,
    onClick,
}) => (
    <button onClick={onClick}>
        {text}
    </button>
);

// reducing boilerplate importing directly prop-types members instead of
// repeating once and again PropType.string and so on. 
Button.propTypes = {
    text: string.isRequired,
    onClick: func.isRequired,
}

export default Button;