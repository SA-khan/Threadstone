import React from "react";
import { createRoot } from "react-dom/client";
import header from "./core/header";
import sidebar from "./shared/sidebar";
import article from "./components/article";
import courousal from "./components/courausal";
import footer from "./shared/footer";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("div", null, [
      React.createElement(header, { name: 'Threadstone' }),
      React.createElement(courousal),
      React.createElement(sidebar),
      React.createElement(article),
      React.createElement(footer),
    ])
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
