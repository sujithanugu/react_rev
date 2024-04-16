import React from "react";
import ReactDOM from "react-dom/client";

// @ const heading = React.createElement("h1", {id: "heading"}, "Hello World!");
//Using JSX
// const heading = <h1>Hello World!</h1>
// react element is converted to functional component
const Heading = () => (
  <h1 id="heading" className="head" tabIndex="5">
    Hello World!
  </h1>
);

//functional component is a normal js function
const HeadingComponent = () => (
  <div id="container">
    <Heading/>  
    <h1 id="heading" className="top">
      Namaste React!!
    </h1>
  </div>
);
/*placing component(Heading) inside component(HeadingComponent) is called component composition*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);






