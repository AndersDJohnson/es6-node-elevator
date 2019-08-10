# es6-node-elevator
> Elevate node modules for easy ES6 import.

Creates entry points for `main` files for all modules e.g. under `node_modules`.

Example:

`main` file | entry point
--- | ---
`node_modules/lodash/index.js` | `node_modules/lodash.js`
`node_modules/glob/glob.js` | `node_modules/glob.js`

Now, with ES6 imports, you can simply:

```js
import _ from 'node_modules/lodash.js';
```

## Use

Command line:

```sh
npx es6-node-elevator
```

Or programmatically:

```console
npm add -D es6-node-elevator
```

```js
var elevator = require('es6-node-elevator');

elevator();
```


### Options

name | description | default
--- | --- | ---
`dir` | Directory to scrape for modules (directories containing `package.json`). | `'node_modules'`
`out` | Directory in which to write entry point files (e.g. `lodash.js`). | `'node_modules'`
