#webpack-anybar

[Webpack](http://webpack.github.io/) plugin that uses [AnyBar](https://github.com/tonsky/AnyBar) to inform about build status.

## Installation

You need to install AnyBar first. Then install the plugin npm:

```
npm install --save-dev webpack-anybar
```

## Usage

In Webpack config file:

``` javascript
var WebpackAnyBar = require('webpack-anybar');

// ...
  module: {
    plugins: [
      new WebpackAnyBar(),
    ]
  },
// ...
```

You can pass port number, but that's optional:

```
new WebpackAnyBar({port: 1234});
```

Then just start `webpack -wc` and watch the build status.
