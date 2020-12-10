import React from "react";
import Build from '@material-ui/icons/Build';
import Support from '@material-ui/icons/AccessibilityNew';

const AboutItem = (props) => {
  let iconToRender;
  if (props.icon === "Desc") {
    iconToRender = <Build className="toolIcon" fontSize="large"/>
  } else {
    iconToRender = <Support className="supportIcon" />
  }

  return (
    <div>
      {iconToRender}
      <p class="mt-1">{props.text}</p>
    </div>
  );
};

export default AboutItem;

