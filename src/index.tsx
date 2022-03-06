import React from "react";
import ReactDOM from "react-dom";
import TinyReact from "./TinyReact";
import _ from "lodash";

// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// );

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

const element = TinyReact.createElement(
  "div",
  {
    id: "foo",
  },
  TinyReact.createElement("a", null, "bar"),
  TinyReact.createElement("b", {
    id: "b",
  })
);



const container = document.querySelector("#root");

TinyReact.render(element, container);
