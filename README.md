# pc-app-scaffold

A scaffold for [Pathway Commons](http://www.pathwaycommons.org/) app components. This is a clone of the [slush-js](https://github.com/maxkfranz/slush-js) scaffold that is modified to reflect our specific app requirements.

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
  $ git clone https://github.com/PathwayCommons/pc-app-scaffold.git ~/pc-app-name
  $ cd ~/pc-app-name
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

> This document is designed to be a through explanation of the structure and design of the pathways-search web application, but can also be applied as a model for the construction of future React-based web applications.

> The overall philosophy and best practices of the library are throughly discussed on the Facebook’s React web documents. Programmers unfamiliar with React can begin with a discussion of the philosophy behind React here (http://nayaabkhan.me/react/the-react-philosophy), and comprehensive tutorials demonstrating React posted here (https://facebook.github.io/react/tutorial/tutorial.html). There are many online resources available discussing nearly every aspect of the library, so information regarding the library are best sought elsewhere. I will focus on discussing the specific implementation I have chosen to follow.

> Let’s first look at the dependencies this app relies on, which are all listed in the package.json file located in the root directory. In this file, the dependencies are divided into two groups, dependencies and devDependencies; the difference being the former lists all the required libraries necessary both during user operation and compile-time, while the latter lists code that is only necessary during compile-time.

> As the dependencies, for the most part, are included for obvious reasons, only the devDependencies will be discussed in detail. Despite the number of entries listed, there are only two large pieces here, webpack and babel. Babel is a JavaScript transpiler that converts powerful but badly supported ES6 JavaScript into ES5 JavaScript, which can be run on most browsers. It uses a few plugins in order to add additional functionality. Babel is never used directly, but is called by webpack during compile-time. Webpack is a node program that takes JavaScript files, performs multiple operations to it, and outputs a single JavaScript file containing all the code that is necessary to run, including dependencies. It can be seen as the rough equivalent of Gulp.

> Let’s next discuss the structure of the JavaScript files. All uncompiled JavaScript files are stored in the js folder located in the root directory, while all uncompiled sass is stored in the styles directory under either css or sass. If a js file requires styles, then the applicable style will be stored in either a css or scss file with the same name. The structure of the sass and css directories mirror the structure of the js directory to make it easy to find the corresponding file for any js / style pair. The only exceptions to this are the general.scss and variables.scss files, which hold styles and variables, respectively, that apply to the entire app.

> In general, the rules I used to organize files in the js directory are as follows. I tried to group files together into subcategories using folders as much as possible. For example, in this specific app, pathways and search are two subdirectories which correspond to the different routes specified in the main App file. The criteria for creating a subdirectory is very much up to the discretion of the developer. However, in general the higher a file is in the file tree, the more general and multipurpose it is, and vice versa. There are two special folder names which I used to denote certain classes of file: components and helpers. All files placed in a components folder are React components which are only to be referenced by other React components and should not be called on its own. The helpers folder holds functions and variables that are used to accomplished various tasks unrelated to the view.

> When the web app is loaded, we must start running code somewhere, and that place is the main.js file, located in the js directory. Here we import the main entry point for sass (main.scss) which loads all the styles, and through imports, start working down the file tree. The App.js file is the main entry point for the React application, and holds the router, which calls different React components depending on the URL. It will take much too long to describe each component in detail; suffice to say that traditional React philosophy is followed, where data flows down, events flow up, and state is kept to a minimum and stored in the URL where appropriate.

> In order to obtain a complete understanding of the construction, I recommend reading through the source of the app and understanding what each file does, and how it fits in to the app in general.

> -- [Mandred Cheung 2017](https://docs.google.com/document/d/1RjZDDuJbuNTec9Cj9WswntlaMLUNTlqp1E45ujShPWs/edit)
