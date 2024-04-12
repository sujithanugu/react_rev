import React from "react";
import ReactDOM from "react-dom/client";

// @ const heading = React.createElement("h1", {id: "heading"}, "Hello World!");
//Using JSX
const heading = <h1 id="heading">Hello World!</h1>;
//console.log(heading); here heading is an object same as @
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);