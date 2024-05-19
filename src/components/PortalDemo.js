import React from "react";
import ReactDOM from "react-dom";

/*
https://codesandbox.io/s/00254q4n6p
https://codepen.io/gaearon/pen/jGBWpE
*/
function PortalDemo() {
  return ReactDOM.createPortal(
    <div>Portals Demo</div>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
