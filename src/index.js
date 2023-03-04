import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root.component";
const body = document.getElementsByTagName("BODY")[0];
const head = document.getElementsByTagName("head")[0];

// Set up meta tag
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = `width=device-width, height=device-height, initial-scale=1, maximum-scale=1`;

head.appendChild(meta);

{@clonr{%
    if(getClonrVar("globals[pwa]")) {
        clonrResult =
            "// Set up service worker\n" +
            "const link = document.createElement(\"link\");\n" +
            "link.rel = \"manifest\";\n" +
            "link.href = \"manifest.json\";\n" +
            "head.appendChild(link);\n" +
            "\n" +
            "if (\"serviceWorker\" in navigator) {\n" +
            "  navigator.serviceWorker.register(\"./service-worker.js\");\n" +
            "}"
    } else {
        clonrResult = ""
    }
}
%}/clonr}


const root = document.createElement("div");
root.id = "root";
body.appendChild(root);

// render the app
const domRoot = ReactDOM.createRoot(root);
domRoot.render(<Root />);
