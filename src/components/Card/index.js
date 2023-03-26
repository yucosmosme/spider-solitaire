import React from "react";
import Symbol from "components/Card/Symbol";
import Background from "components/Card/Background";

const Card = ({number, suit, faceUp, movable}) => {
  return (
    <>
      <div className="Card">
        <Symbol
          number={number}
          suit={suit}
          position="Top"
        />
        <Background />
        <Symbol
          number={number}
          suit={suit}
          position="Bottom"
        />
      </div>
    </>
  );
};

export default Card;
