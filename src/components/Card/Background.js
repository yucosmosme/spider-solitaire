/*******************************************************************************
 * [Problem]
 *
 * - To do
 * Paint a card background.
 *
 * - Conditions
 * 1. Use the algorithm.
 * 2. Use the data structure.
 * 3. Do not hardcode.
 *
 * - Deadline
 * ~ 2023/04/09 (2W)
 ******************************************************************************/
import _ from "lodash";
import React from "react";
import * as Unicons from "@iconscout/react-unicons";

const Background = (props) => {
  const SuitIcon = Unicons["Uil" + _.upperFirst(props.suit.toLowerCase())];
  return (
    <>
      <div className="Background">
        {React.createElement(SuitIcon, {color: props.color})}
      </div>
    </>
  );
};

export default Background;
