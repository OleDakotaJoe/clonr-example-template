import React, { Component } from 'react';
import './App.css';

{@clonr{% 
  if (getClonrVar("globals[app-preference]") === "Class") {
    clonrResult = 
    "   class Root extends Component {\n" +
    "      render() {\n" +
    "        return (\n" +
    "          <div className=\"App\">\n" +
    "            <h1> {@clonr{global.hello-world-message}} </h1>\n" +
    "          </div>\n" +
    "        );\n" +
    "      }\n" +
    "    }"
  } else {
    clonrResult = 
    "   const Root = () => {\n" +
    "      return (\n" +
    "        <div className=\"App\">\n" +
    "          <h1> {@clonr{global.hello-world-message}} </h1>\n" +
    "        </div>\n" +
    "      );\n" +
    "    }"
  }
%}/clonr}

export default Root;
