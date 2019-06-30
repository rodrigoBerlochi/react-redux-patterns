# Patterns briefly

## Compound components

Group a set of components that must be used together in order to get a more complex component. 
Relies on STATIC props for classes for children components, and a class for the parent that defines the group.

This patterns uses Context or a mix of React.Children.map + React.cloneElement to give children access to data and logic of the parent. 

**Key words:**
- grouping components
- static props
- context vs react.map-cloneElement


## Render Props or Function as a Child

This patterns does not create a predefined group of components sharing data. 
It is also useful to share data and logic, to reuse them, to provide that functionality to a wide number of use cases.
Render Props is more flexible since the consumer can drop inside a render-prop component what it wants, reaching always 
two conditions:
- it must be wrapped in a function, that is the child expected by the parent
- it must be passed as Children of the component
  
This pattern functions as mechanism to share down to an unkown child an object of data and /or logic, thanks to function parameters. 

**Key words:**
- data logic sharing
- children as function
- function arguments


## High Order Components

This pattern sometimes is an alternative to Render Props, and it is inheritor of Functional paradigm. 
The pattern ENHANCES a component through a function nesting, that gets the original component as argument, wrapps it in another one with the extra functionality, and return the new component to be used. 

**Key words:**
- nested functions
- forwardRef
- spread props
- displayName
- hoistStatics
- withName

## Primitives or Singel

That is not wide-share pattern, but it is a set of small good practices for libs of components, and a brasilean dev has named it as Singel. 
It stands for a layer of primitive components, very small and with a single repsonsibility (render one thing) that are basic building blocks for bigger and complex components. 

Primitives are closer to basic HTML element or tweaks of them to give them a new semantic. Their props are HTML original attributes and respects original names. Missing props do not break them. They provides an extensive interface of supported props and it can include accesiility concerns. 

## Props Collections

Small pattern just focused on grouping a set of required common props in a method that is invoked and spread on children. It simplifies applycation of common props. 

## Provider

A way to implement Context API. It does not use HOC, but it is possible. 
Provider pattern by KCDoods is a class that incorporates the Provider of a private created Context into the render method. 
Then, it gets values from a reference to this.state. And finally the Consumer is attached as Static prop of the class. 

## State Init

Single pattern that defers the State creation to separate class property. That one is used by this.state, which will get changes over hte componetn life. But the original state is kept in that separate property, so we can add a reset() method to set that object again to the state at any time. 
