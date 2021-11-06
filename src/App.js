import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

{@clonr{% 
  if (getClonrVar("src/App.js[app-preference]") === "Class") {
    clonrResult = 
    "   class App extends Component {\n" +
    "      render() {\n" +
    "        return (\n" +
    "          <div className=\"App\">\n" +
    "            <h1> {@clonr{hello-world-message}} </h1>\n" +
    "          </div>\n" +
    "        );\n" +
    "      }\n" +
    "    }"
  } else {
    clonrResult = 
    "   const App = () => {\n" +
    "      return (\n" +
    "        <div className=\"App\">\n" +
    "          <h1> {@clonr{hello-world-message}} </h1>\n" +
    "        </div>\n" +
    "      );\n" +
    "    }"
  }
%}/clonr}

export default hot(module)(App);
