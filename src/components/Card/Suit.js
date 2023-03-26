import _ from "lodash";
import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import * as Color from "constants/Color";
import * as SUITS from "constants/Suit";

const CardSuit = ({id}) => {
  const suit = _.entries(SUITS)[id][0];
  const SuitIcon = Unicons["Uil" + _.upperFirst(suit.toLowerCase())];
  const Suitcolor = Color[suit];
  return <>{React.createElement(SuitIcon, {color: Suitcolor})}</>;
};

export default CardSuit;
