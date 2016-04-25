## Webpack Zisa

This is an attempt to refactor Zisa using Webpack (and Webpack plugins) alone.

### Getting started

Clone this repo and run the following command from the directory the clone resides in.

```
npm install
```

This will install (dev)Dependencies. Anything that is listed as missing should probably be installed globally;

```
npm install -g [package]
```

### Usage

A series of npm run scripts have been added to `package.json`

#### npm run scripts:
```
"start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
"start:dev": "npm run build:client && webpack-dev-server --inline --colors --content-base dist/client/ --history-api-fallback",
"start:prod": "npm run build && node dist/server/server.bundle.js",
"build:client": "webpack",
"build:server": "webpack --config webpack.server.config.js",
"build": "npm run build:client && npm run build:server"

```

The main two commands to concern yourself with are `npm start` and `NODE_ENV=production npm start`.

#### npm start
`npm start` will run the build script for just the client followed by running `webpack-dev-server` to run a local webserver that will refresh the browser automatically when most `src` files change. Even though the `js` files will be bundled and placed in the `dist/client/assets/js` directory, they will be served from memory due to being run in `webpack-dev-server`.

Once run, open a browser to http://localhost:8080 (8080 is the default port)

#### NODE_ENV=production npm start
`NODE_ENV=production npm start` will run the build scripts for both the client and the node server.

Once run, open a browser to http://localhost:3000 (3000 is the default port)

### Known issues
* Currently the production version is not functional due to static files not being served. (i.e. assets/js/bundle.js returns a 404 Not Found error.)
