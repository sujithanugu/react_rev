const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1c" }, "I'm H1"),
    React.createElement("h2", {}, "I'm H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1c" }, "I'm H1"),
    React.createElement("h2", {}, "I'm H2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);
root.render(heading);
