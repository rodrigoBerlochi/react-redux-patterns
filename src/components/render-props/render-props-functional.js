import React, { useState } from 'react';

const FnRenderProps = ({
    children
}) => {
    const [ value, setValue ] = useState(true);

    return children({ value })
}