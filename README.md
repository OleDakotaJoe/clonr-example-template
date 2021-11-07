{@clonr{%
    /*
  # This is a clonr template 

  To clone this repository download clonr by running:

  `npm install -g go-clonr` 

  `go-clonr install`

  `clonr clone https://github.com/OleDakotaJoe/clonr.git`

  If you do not have npm installed on your machine, check out [the clonr github](https://github.com/oledakotajoe/clonr) for other installation methods.
    */

    clonrResult = "" 

%}/clonr}# Barebones React App

Just wanted a simple barebones React application boilerplate that:

- Can transpile
  - Specifically because JSX
  - But also so you can use the latest JavaScript features
- Uses [sourcemaps]
- Uses [Hot Module Replacement][hmr]
- Can build a basic production `dist/` output for easy deployment
- Doesn't have a bunch of unnecessary dependencies

NOTE: This project is clone of [niftymonkey]'s [barebones-react-app] repo.

## Required Software

- [npm] version 6.4.1 or above
- [node] version 10.13.0 or above

## Getting Started

1. `npm install` - to install the dependencies
1. `npm run dev` - to run the application in dev mode (using webpack-dev-server)
1. Open up http://localhost:3000 to view the app
1. Open up `src/App.js` and hack away. Hit save and enjoy the magic!

## Other useful commands

- `npm run dist` - to generate the production version of the application's script(s)

[sourcemaps]: https://survivejs.com/webpack/building/source-maps/
[hmr]: https://survivejs.com/webpack/appendices/hmr/
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[barebones-react-app]: https://github.com/niftymonkey/barebones-react-app
[niftymonkey]: https://github.com/niftymonkey/
