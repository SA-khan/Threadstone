import React from "react";
import header from "./core/header";
import sidebar from "./shared/sidebar";
import footer from "./shared/footer";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("div", null, [
      React.createElement(header),
      React.createElement(sidebar),
      React.createElement(footer),
    ])
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
