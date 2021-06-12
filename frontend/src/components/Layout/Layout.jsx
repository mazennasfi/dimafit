import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <div>
    <Toolbar />
    <div></div>
    <main>{props.children}</main>
  </div>
);

export default Layout;
