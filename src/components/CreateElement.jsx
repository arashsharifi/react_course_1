import React from "react";

function CreateElement() {
  return React.createElement(
    "div",
    {},
    React.cloneElement(
      "h2",
      {},
      "this method is bad",
      React.createElement("p", {}, "hahaha")
    )
  );
}
export default CreateElement;
