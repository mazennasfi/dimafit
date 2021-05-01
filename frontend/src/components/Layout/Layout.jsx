import React from "react";

const Layout = (props) => (
  <div>
    Toolbar, SideDrawer, Backdrop
    <div></div>
    <main>{props.children}</main>
  </div>
);

export default Layout;
