# Webpack Demos

This repo contains several branches intended to illustrate the varying degrees
of complexity that can be configured in a webpack configuration. Each branch
builds upon the last up to fairly robust webpack configuration including hot
module reloading, react hot loading, sass loading, and react-bootstrap.

Each branch has three npm scripts of interest.
1. `start:dev` starts webpack-dev-server
2. `build:dev` builds the bundles for the project
3. `build` builds the production bundles for the project

Use `start:dev` to run webpack-dev-server and view the example, or use
`build:dev` and `build` in conjunction with your own backend server to build
the bundles and see the example in a browser.

## Super simple

Branch `simple` illustrate a simple webpack config that creates a bundle for the
project.

## Simple with CSS

Branch `simple-with-css` illustrates a simple webpack config with a sass loader.

## Multiple Entry Points

Branch `multiple-entry` illustrates a webpack config with two react apps, each
with their own entry point in the webpack config.

## Webpack Hot Module Reloading

Branch `hmre` illustrates enabling hot module reloading in webpack. The major
point of interest here is the `start:dev` script in `package.json`, where the
`--hot` flag is added to webpack-dev-server start script.

## React Hot Loading

Branch `react-hot-loading` illustrates enabling react hot module loading in
webpack. The points of interest here are:
* the `start:dev` script where the `--hot` flag is added to starting the dev
server and the entries in the webpack config.
* the inclusion of different entries if the it is a production build.

## react-bootstrap

Branch `react-boostrap` illustrates how to add react-bootstrap to your react
appication. Points of interest are :
* The extra loaders specified in the webpack config to handle fonts, svgs, and
images.
* In [app1](src/app1/containers/Main.js) where the bootstrap stylesheet and
Button component are imported.
