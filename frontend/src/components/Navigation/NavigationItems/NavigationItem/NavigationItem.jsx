import React from "react";

function NavigationItem(props) {
  return (
    <a className={props.className} href={props.link}>
      {props.children}
    </a>
  );
}

export default NavigationItem;
