import React from 'react';
import { connect } from 'react-redux';

import { Button } from '../components/button/button';
import { setLocation, setName } from '../redux/actions/profileActions';

const EditProfile = ({

}) => (
    <div>
        <input />
        <Button />
    </div>
)

// logic for interacting with Redux is encapsulated in this level
// and the returned object of the next two function are passed 
// as PROPS to the connected component
const mapState = state => ({

});

// mapDispatch as function...
/*
const mapDispatch = (dispatch, props) => ({
    queryAll: dispatch(queryAll(props.id)),
});
*/
// ...or as object, wrapped in dispatch automatically
const mapDispatch = {
    setName,
    setLocation,
};

// pass NULL to first parameter if component does not read from state
// pass second parameter as NULL and the connected component will get automatically props.dispatch
export default connect(mapState, mapDispatch)(EditProfile);
// or...
//export default connect(mapState, {
// setName, setLocation
//})(EditProfile);
