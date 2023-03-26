import {EASY} from "constants/Level";
import CardManager from "managers/CardManager";

export default class GameManager {
  level = 0;
  cm = null;

  constructor(level) {
    this.level = level || EASY;
    this.cm = new CardManager(this.level);
  }

  getCardManager() {
    return this.cm;
  }

  getLevel() {
    return this.level;
  }
}
