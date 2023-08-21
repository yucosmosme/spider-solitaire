import {CARD_NUMBER_MAX} from "constants";
import {POOL} from "constants/Pool";
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
    const cards = Array(CARD_NUMBER_MAX).fill(0); // [0,0,0,0,0,0,0,0,0,0,0,0,0]

    pool.forEach((p, pi) => {
      cards.forEach((c, ci) => {
        this.cards.push(
          <Card
            key={`${pi}_${ci}`}
            number={ci} //카드 숫자
            suit={p} //카드 모양
            faceUp={false}
            movable={false}
          />
        );
      });
    });
  }

  getCards() {
    //console.log("card", this.cards);
    this.cards = this.cards.sort(() => Math.random() - 0.5);
    return this.cards;
  }

  //카드를 슬롯에 깐다.

  //카드를 분배한다.
}
