import _ from "lodash";
import {CARD_NUMBER_MAX, CARD_SUIT_MAX} from "constants";
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
    const levels = Array(level).fill(0);
    const suits = Array(CARD_SUIT_MAX).fill(0);
    const cards = Array(CARD_NUMBER_MAX).fill(0);
    this.cards = levels.map((l, li) =>
      suits.map((s, si) =>
        cards.map((c, ci) => {
          return (
            <Card
              key={`${li}_${ci}_${si}`}
              level={li}
              number={ci}
              suit={_.entries(SUITS)[si][1]}
            />
          );
        })
      )
    );
  }

  getCards() {
    return this.cards;
  }
}
