import _ from "lodash";
import React from "react";
import * as Unicons from "@iconscout/react-unicons";

const CardSuit = (props) => {
  const SuitIcon = Unicons["Uil" + _.upperFirst(props.suit.toLowerCase())];
  return <>{React.createElement(SuitIcon, {color: props.color})}</>;
};

export default CardSuit;
