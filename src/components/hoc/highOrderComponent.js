import React, {forwardRef} from 'react';
import hoistStatics from 'hoist-non-react-statics';

/**
 * A HOC is a Function that takes a Component as argument and returns
 * a new component with extra functionality added: reading a context, logic, state, etc. 
 * 
 * It's the same concept of HOF: gets a fn and returns a new one extending the original one. 
 */

// long example, where we take care of Refs, display name, static props...
function withStereoids (Component) {

    const applyAThousandTonsForce = () => {}

    const Wrapper = forwardRef(function (props, ref) { // -> pass both props and ref
        return <Component {...props} ref={ref} applyAThousandTonsForce={applyAThousandTonsForce} /> // spread props, it is just a pipeline
    });

    Wrapper.displayName = Component.displayName || Component.name;

    hoistStatics(Wrapper, Component);

    return Wrapper;
}

// Simpler example, for a small enhancement
// Using arrow syntax, wrapper is function corresponding to props =>
const withExpandedClassName = Component => props => <Component {...props} className="expanded" />



// more complex example with hooks
function withReducerHook (Component) {

    const Enhancer = React.forwardRef((props, ref) => {

        const {
            reducer,
            initialState,
            ...rest
        } = props;  

        const _reducer = reducer || (() => {});
        const _initialState = {...initialState};
    
        const [state, setState] = React.useReducer(_reducer, _initialState);
    
        return <Component state={state} setState={setState} ref={ref} {...rest} />
    });

    Enhancer.displayName = Component.displayName || Component.name;

    hoistStatics(Enhancer, Component);

    return Enhancer;
}

// Usage:
const Profile = () => {} // mocked component

const ProfileWithReducer = withReducerHook(Profile);

// eslint-disable-next-line no-unused-expressions
<ProfileWithReducer name="John" />



// Example for Context API
const {Provider, Consumer} = React.createContext();

export class ProfileProvider extends React.Component {
    state = {
        name: this.props.name,
        surname: this.props.surname,
    }

    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

const withProfileConsumer = (Component) => {
    return React.forwardRef((props, ref) => {
        return (
            <Consumer>
                {
                    context => {
                        return <Component {...props} ref={ref} {...context} />
                    }
                }
            </Consumer>
        );
    });
};

// Usage:
const CardWithProfileConsumer = withProfileConsumer(<div />);

class App extends React.Component {
    render() {
        return (
            <ProfileProvider>
                <CardWithProfileConsumer />
            </ProfileProvider>
        );
    }
}




