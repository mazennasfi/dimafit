import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationItems(props) {
  return (
    <nav>
      <NavigationItem className={props.className} link="/">
        Current Body Informations
      </NavigationItem>
      <NavigationItem className={props.className} link="/">
        Desired Body Qualities
      </NavigationItem>
    </nav>
  );
}

export default NavigationItems;
