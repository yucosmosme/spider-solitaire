import * as Suit from "constants/Suit";

//SPADE 8세트 : [0,0,0,0,0,0,0,0]
export const EASY = [
  Suit.SPADE,
  Suit.SPADE,
  Suit.SPADE,
  Suit.SPADE,
  Suit.SPADE,
  Suit.SPADE,
  Suit.SPADE,
  Suit.SPADE,
];

//SPADE 4세트, HEART 4세트 : [0,0,0,0,1,1,1,1]
export const NORMAL = [
  Suit.SPADE,
  Suit.SPADE,
  Suit.SPADE,
  Suit.SPADE,
  Suit.HEART,
  Suit.HEART,
  Suit.HEART,
  Suit.HEART,
];

//SPADE 2세트, HEART 2세트, CLUB 2세트, DIAMOND 2세트: [0,0,1,1,2,2,3,3]
export const HARD = [
  Suit.SPADE,
  Suit.SPADE,
  Suit.HEART,
  Suit.HEART,
  Suit.CLUB,
  Suit.CLUB,
  Suit.DIAMOND,
  Suit.DIAMOND,
];

export const POOL = [EASY, NORMAL, HARD];
