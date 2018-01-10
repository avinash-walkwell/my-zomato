<h1 align="center">
  <!-- Logo -->
  ![my-zomato](https://github.com/avinash-walkwell/my-zomato/blob/master/src/logo.svg)
  <br/>
  @MyZomato
  <br/>
  <div align="center">
    <a href="https://travis-ci.org/reactphp/react"><img src="https://travis-ci.org/reactphp/react.svg?branch=master" alt="Build Status"></a>
  </div>
</h1>

Universal React rendering middleware for [Rill](https://github.com/rill-js/rill).

This middleware depends on React@16 for async rendering. If you would like to use older versions of react try using @rill/react@5 and below.

# Installation

```console
npm install @rill/react
```

# Example

```javascript
import Rill from 'rill'
import React from 'react'
import renderer from '@rill/react'

// Create a rill app.
const app = Rill()

// Setup React rendering in middleware.
app.use(renderer())

// Set locals in middleware.
app.use(({ locals }), next)=> {
  locals.title = '@rill/react'
  return next()
})

// Render a react view.
app.use(({ req, res }, next)=> {
  // Just set the body to a react element.
  // updates the dom in the browser, or render a string in the server.
  res.body = <HelloWorld message="Hello World"/>

  // On the server the final response will be a stream with:
  `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My App</title>
        <meta name="description" content="Rill Application">
      </head>
      <body>
        @rill/react@0.x
        Hello World
        <script src="/app.js"></script>
      </body>
    </html>
  `
})

// An example HelloWorld component in React.
function HelloWorld (props, { locals, req }) {
  return (
    <html>
      <head>
        <title>My App</title>
        <meta name="description" content="Rill Application"/>
      </head>
      <body>
        {locals.title}
        {props.message}
        <div>{props.children}</div>
        <script src="/app.js"/>
      </body>
    </html>
  )
}
```

# Sub page rendering.
Sometimes the goal is not to render the entire page with React, or you want to use something like [@rill/page](https://github.com/rill-js/page) to handle the document.

@rill/react adds the ability to change the root element with an option for this purpose.

```js
// Use a query selector to set the root element.
app.use(renderer({ root: '#my-element' }))
```

# Nesting Components
When rendering React expects a constant outer layer for elements like html, head and body.
@rill/react makes it easy to wrap react components with the Rill router with a special `#wrap` function.

```js
const { wrap } = require("@rill/react")

// This will automatically wrap any valid react elements attached to the body with the `HelloWorld` component.
// The `props` option can be a function (called with a rill `ctx`) or an object.
app.get('/*', wrap(HelloWorld, { message: 'world' }))
app.get('/home', ({ res })=> {
  // This will be a child of the HelloWorld component.
  res.body = <MyOtherComponent/>
})
```

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
