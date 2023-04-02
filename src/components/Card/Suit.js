import _ from "lodash";
import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import * as Color from "constants/Color";
import * as SUITS from "constants/Suit";

const CardSuit = ({id}) => {
  const suit = Object.keys(SUITS).find(k=> SUITS[k] === id)
  const SuitIcon = Unicons["Uil" + _.upperFirst(suit.toLowerCase())];
  const Suitcolor = Color[suit];
  return <>{React.createElement(SuitIcon, {color: Suitcolor})}</>;
};

export default CardSuit;
