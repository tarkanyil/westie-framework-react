import React from "react";
import Trainer from "@material-ui/icons/EmojiEvents";
import Soon from "@material-ui/icons/MovieFilter";
import { Button } from "reactstrap";

const ServiceItem = (props) => {
  let iconToRender;
  let buttonToRender;
  if (props.icon === "Trophy") {
    iconToRender = <Trainer className="serviceIcon" fontSize="large" />;
    buttonToRender = (
      <Button color="warning" size="sm">
        Learn more...
      </Button>
    );
  } else {
    iconToRender = <Soon className="serviceIcon" />;
  }

  return (
    <div>
      <h4>{props.title}</h4>
      {iconToRender}
      <p>{props.text}</p>
      {buttonToRender}
    </div>
  );
};

export default ServiceItem;
