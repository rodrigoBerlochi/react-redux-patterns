import React from 'react';

/**
 * Render Props (also called Function as a Child) is pattern to share logic and values
 * with children
 * in a quite flexible way.
 * 
 * The parent component (source of logic/data) defines CHILDREN as a Function, and instead executes it into its RENDER
 * The parent use this approach to pass as argument to that function
 * everything that expects to share.
 * 
 * Children must be a function and grab that parameter that then can use
 * in the form of PROPS (spread object, destructure it, rename props)
 */

 class RenderProp extends React.Component {
     state = {
         a: null,
         b: false,
     }

     executeIt() {

     }

     render() {
         return this.props.children({
             ...this.state,
             execute: this.executeIt,
         })
     }
 }

 // eslint-disable-next-line no-unused-expressions
 <>
    <RenderProp>
        {data => {
            return (<section {...data}>Hello</section>);
        }}
    </RenderProp>

    <RenderProp>
        {
            ({a, b, execute}) => <div a={a} publish={execute}>Hello!</div> 
        }
    </RenderProp>
 </>

