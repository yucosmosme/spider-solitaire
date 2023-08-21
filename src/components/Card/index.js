import _ from "lodash";
import React from "react";
import Symbol from "components/Card/Symbol";
import * as Color from "constants/Color";
import * as SUITS from "constants/Suit";
import {useAppSelector} from "store";
import Background from "components/Card/Background";

const Card = ({number, suit, faceUp, movable}) => {
  const suitValue = _.sortBy(_.entries(SUITS), 1)?.[suit]?.[0];
  const color = Color[suitValue];
  const image = useAppSelector((s) => s.image.value);

  return (
    <>
      <div
        className={`Card ${faceUp ? "" : "face-down"}`}
        style={{backgroundImage: `url(${image})`}}>
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
