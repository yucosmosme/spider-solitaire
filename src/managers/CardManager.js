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
    const pool = POOL[level]; //세트 개수 EX. [0,0,0,0,1,1,1,1]
    const cards = Array(CARD_NUMBER_MAX).fill(0); // 한 세트에 들어가는 카드 개수 EX. [0,0,0,0,0,0,0,0,0,0,0,0,0] 
    this.cards = pool.map((p, pi) => {
      return cards.map((c, ci) => {
        return (
          <Card
            key={`${pi}_${ci}`}
            number={ci} //카드 숫자
            suit={p} //카드 모양 
          />
        );
      });
    });
  }

  getCards() {
    return this.cards;
  }
}
