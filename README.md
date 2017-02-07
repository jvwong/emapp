# emapp

A webapp for [Pathway Commons](http://www.pathwaycommons.org/) Guide pathway enrichment workflow (II).

## I. Features

- [React](https://facebook.github.io/react/)
  - We (re-)use React for all of our user interface components.
- [livereload](https://www.npmjs.com/package/livereload)
  - Code changes will automatically fire a browser refresh


## II. Getting Started

### Software

- [Node.js](https://nodejs.org/en/) >=6.3.0


### Setup

1. Clone this remote into a appropriately named directory (e.g. `pc-app-name`).

  ```shell
  $ git clone https://github.com/PathwayCommons/pc-app-scaffold.git
  ```

2. Fetch the requirements.

  ```shell
  $ npm install
  ```

3. Run the dev server

  ```shell
  $ npm run watch
  ```

  Point your browser at [http://localhost:3000](http://localhost:3000).

### NPM Scripts

- `npm run watch` : watch mode (debug mode enabled, auto rebuild, livereload)
- `npm start` : start the server
- `npm stop` : stop the server
- `npm run build` : build project
- `npm run build-prod` : build the project for production
- `npm run clean` : clean the project
- `npm test` : run tests
- `npm run lint` : lint the project


### Dependency Management

```shell
$ npm install --save --save-bundled <package name>
```

This is the same as

```shell
$ npm i -SB <package name>
```

The option `--save-bundled` allows packages to be included via `require()`. In order to keep debug watch fast - take a look at the `gulpfile.js` variable `deps` - it's necessary to maintain dependencies in `bundledDependencies` in `package.json`.  This also allows for shipping updates to the app without busting the cache for the dependencies on clients.

> Aside: Using the `bundledDependencies` field in `package.json` in this way isn't strictly how it's intended to be used, but it should be fine since `pc-app-scaffold` will never be published to npm and no one would `require('pc-app-scaffold')`.  (Mis)using `bundledDependencies` in this way lets us just use `npm` commands without editing `package.json` manually, while keeping common dependencies on the same version on the client and the server.


### Test

All files `/test` will be run by [Mocha](https://mochajs.org/).  You can `npm test` to run all tests, or you can run `mocha -g specific-test-name` (prerequisite: `npm install -g mocha`) to run specific tests.

[Chai](http://chaijs.com/) is included to make the tests easier to read and write.

## III. App Structure

App components are created using [React]().

- Workflow
  - Step
    - FileInputStep
