import _ from "lodash";
import {CARD_NUMBER_MAX} from "constants";
import {POOL} from "constants/Pool";
import * as SUITS from "constants/Suit";
import Card from "components/Card";

export default class CardManager {
  level = 0;
  cards = [];

  constructor(level) {
    this.level = level;
    this.generateCardPool(level);
  }

  generateCardPool(level) {
    const pool = POOL[level];
    const cards = Array(CARD_NUMBER_MAX).fill(0);
    this.cards = pool.map((p, pi) => {
      return cards.map((c, ci) => {
        return (
          <Card
            key={`${pi}_${ci}`}
            number={ci}
            suit={_.entries(SUITS)?.[p]?.[1]}
          />
        );
      });
    });
  }

  getCards() {
    return this.cards;
  }
}
