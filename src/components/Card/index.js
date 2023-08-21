import _ from "lodash";
import React from "react";
import Symbol from "components/Card/Symbol";
import * as Color from "constants/Color";
import * as SUITS from "constants/Suit";
import Background from "components/Card/Background";

const Card = ({number, suit, faceUp, movable}) => {
  const suitValue = _.sortBy(_.entries(SUITS), 1)?.[suit]?.[0];
  const color = Color[suitValue];

  return (
    <>
      <div className={`Card ${faceUp ? "" : "face-down"}`}>
        <Symbol
          number={number}
          suit={suitValue}
          color={color}
          position="Top"
        />
        <Background
          number={number}
          suit={suitValue}
          color={color}
        />
        <Symbol
          number={number}
          suit={suitValue}
          color={color}
          position="Bottom"
        />
      </div>
    </>
  );
};

export default Card;
