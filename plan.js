/**
 * 카드게임 기획
 */

/*
 * 조합가능한 풀:
 * 1 set 선택시 pool[0-13] * 8번 반복
 * 2 set 선택시 pool[0-26] * 4번 반복
 * 4 set 선택시 pool 전체 * 2번 반복

 * TODO: 숫자: 1 11 12 13 view단에서 ajqk로 보이게 바꾸기
 * faceUp: true - 카드 앞면 false - 뒷면
 * movable: 카드 이동 가능 여부
 * 카드개수 : 104개
 */
pool = [
  { number: 1, suit: "dia", faceUp: false, movable: false },
  { number: 2, suit: "dia", faceUp: false, movable: false },
  { number: 3, suit: "dia", faceUp: false, movable: false },
  { number: 4, suit: "dia", faceUp: false, movable: false },
  { number: 5, suit: "dia", faceUp: false, movable: false },
  { number: 6, suit: "dia", faceUp: false, movable: false },
  { number: 7, suit: "dia", faceUp: false, movable: false },
  { number: 8, suit: "dia", faceUp: false, movable: false },
  { number: 9, suit: "dia", faceUp: false, movable: false },
  { number: 10, suit: "dia", faceUp: false, movable: false },
  { number: 11, suit: "dia", faceUp: false, movable: false },
  { number: 12, suit: "dia", faceUp: false, movable: false },
  { number: 13, suit: "dia", faceUp: false, movable: false },
  { number: 1, suit: "heart", faceUp: false, movable: false },
  { number: 2, suit: "heart", faceUp: false, movable: false },
  { number: 3, suit: "heart", faceUp: false, movable: false },
  { number: 4, suit: "heart", faceUp: false, movable: false },
  { number: 5, suit: "heart", faceUp: false, movable: false },
  { number: 6, suit: "heart", faceUp: false, movable: false },
  { number: 7, suit: "heart", faceUp: false, movable: false },
  { number: 8, suit: "heart", faceUp: false, movable: false },
  { number: 9, suit: "heart", faceUp: false, movable: false },
  { number: 10, suit: "heart", faceUp: false, movable: false },
  { number: 11, suit: "heart", faceUp: false, movable: false },
  { number: 12, suit: "heart", faceUp: false, movable: false },
  { number: 13, suit: "heart", faceUp: false, movable: false },
  { number: 1, suit: "spade", faceUp: false, movable: false },
  { number: 2, suit: "spade", faceUp: false, movable: false },
  { number: 3, suit: "spade", faceUp: false, movable: false },
  { number: 4, suit: "spade", faceUp: false, movable: false },
  { number: 5, suit: "spade", faceUp: false, movable: false },
  { number: 6, suit: "spade", faceUp: false, movable: false },
  { number: 7, suit: "spade", faceUp: false, movable: false },
  { number: 8, suit: "spade", faceUp: false, movable: false },
  { number: 9, suit: "spade", faceUp: false, movable: false },
  { number: 10, suit: "spade", faceUp: false, movable: false },
  { number: 11, suit: "spade", faceUp: false, movable: false },
  { number: 12, suit: "spade", faceUp: false, movable: false },
  { number: 13, suit: "spade", faceUp: false, movable: false },
  { number: 1, suit: "clobe", faceUp: false, movable: false },
  { number: 2, suit: "clobe", faceUp: false, movable: false },
  { number: 3, suit: "clobe", faceUp: false, movable: false },
  { number: 4, suit: "clobe", faceUp: false, movable: false },
  { number: 5, suit: "clobe", faceUp: false, movable: false },
  { number: 6, suit: "clobe", faceUp: false, movable: false },
  { number: 7, suit: "clobe", faceUp: false, movable: false },
  { number: 8, suit: "clobe", faceUp: false, movable: false },
  { number: 9, suit: "clobe", faceUp: false, movable: false },
  { number: 10, suit: "clobe", faceUp: false, movable: false },
  { number: 11, suit: "clobe", faceUp: false, movable: false },
  { number: 12, suit: "clobe", faceUp: false, movable: false },
  { number: 13, suit: "clobe", faceUp: false, movable: false },
];

//화면에 뿌려진 카드
displayed = [[], [], [], [], [], [], [], [], [], []];

//밑에 대기중인 카드
undisplayed = [[], [], [], [], [], []];

//완성한 세트 개수.
//8개가 되면 게임 종료
assembledCnt = 0;

// 0. 옵션: 1종류 2종류 4종류

// 1. 랜덤으로 cards리스트에 넣는다.
// 규칙:
// 숫자와 모양은 랜덤으로 넣는다.
// 판애까는애들은 다 back, stable로 넣고 인덱스 마지막꺼만 front, movable로 카드 보이게 뿌린다.
// 판에 안까는 애들은 다 back, stable로 넣는다.

// 6. 첨에 뿌릴때 : 5555444444 = 20 24 = 44개 뿌려짐
// 밑에 추가 뿌리기: 1줄에 10개 * 6번 뿌림 =  60개
// 총 104개

// 2. 뿌리기
// 뿌리기 눌렀을 떄 빈슬롯이 있는지 확인해서 없어야 뿌릴 수 있음 (displayed  리스트 내부 리스트에서 빈 리스트가 있으면 안됨) 
// 뿌릴때마다 undisplayed 리스트에서 하나씩 지우고 마지막으로 리스트가 비어있으면 더이상 뿌릴게 없음. 

// 2. 옮겨놓으면 마지막 인덱스인 애들 중 한단계 위로만(k는 적용대상이아님) / 없으면 빈 슬롯에만 이동 가능
// 클릭하면 (
// 한단계 위인 애들 중에서 모양 맞는거 -> 모양 다른 거 순서대로 리스트를 만들어 놓는다.
// 그래서 한번 누를때마다 리스트 순서대로 이동시킨다.
// 모양 맞는게 없으면 빈 슬롯으로 이동. 그마저 없으면 이동 불가

// 3. 더이상 움직일 게 없으면 뿌리는거 힌트준다

// 4. 힌트 줄 수 있음
// 5. 뒤로, 앞으로 무한대로 이동 가능


// 7. 리스트를 끝에서 반대방향으로 순회해서
// 마지막에 있는 애의 모양과 다르게 나오면
// 그 지점부터 처음까지 다 이동못하는 stable상태로 바꾼다.
// stable이면 카드 못움직임
// 10df 9df 8hf 7hf

// 8. xxfx 숫자가 1~13까지 연속으로 나열되어 있으면 해당 리스트를 없애고 finishedSet += 1 (view딴에서 밑에 finishedSet 1개에 카드 하나로 보여줌)

// 9.
