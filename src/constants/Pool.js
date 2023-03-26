import * as Suit from "constants/Suit";

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
