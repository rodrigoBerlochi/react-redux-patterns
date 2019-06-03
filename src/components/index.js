// I'd prefer usually this layer to be an independent project published into NPM
// but here I'm including it here just for learning reasons
// this is the actual library of reusable components and should be available at storibook

// Using https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from we can reduce
// verbosity exporting the import in the same line, but then needs to eject CRA
// export Button from './button/button';

import Button from './button/button';

export {
    Button,
}
