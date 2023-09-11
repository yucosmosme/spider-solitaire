import {useAppSelector} from "store";
import GameManager from "managers/GameManager";
import CardContainer from "components/CardContainer";
import {useState} from "react";
import {useEffect} from "react";
import {cloneDeep} from "lodash";

const Play = () => {
  const level = useAppSelector((s) => s.level.value);
  const gm = new GameManager(level);
  const cm = gm.getCardManager();
  const [cards, setCards] = useState(cm.getCards());
  const [homeCards, setHomeCards] = useState([]);
  const [playCards, setPlayCards] = useState([]);

  useEffect(() => {
    //플레이카드 깔기
    const initialQty = 44;
    const deckQty = 10;
    const cc = cloneDeep(cards);
    const cp = [...Array(deckQty)].map((_) => []);
    for (let i = 0; i < initialQty; i++) {
      const n = i % 10;
      cp[n].push(cc.splice(-1, 1));
    }
    setCards(cc);
    setPlayCards(cp);

    //홈카드 깔기 (총 104개 카드 = 10개*10세트 + 4개*1세트)
    const chunkSize = 10;
    const ch = [];
    for (let i = 0; i < cards.length; i += chunkSize) {
      const chunk = cards.slice(i, i + chunkSize);
      ch.push(chunk);
    }
    setHomeCards(ch);
  }, []);

  //playCards 앞면 faceUp
  useEffect(() => {
    if (playCards.length < 1) {
      return;
    }
    let copied = cloneDeep(playCards);
    let isUdated = false;

    copied.map((c) => {
      let last = c.slice(-1)[0];

      if (!last[0]["props"]["faceUp"]) {
        last[0]["props"]["faceUp"] = true;
        isUdated = true;
      }
    });
    if (isUdated) {
      setPlayCards(copied);
    }
  }, [playCards]);

  console.log("homeCard", homeCards);
  console.log("playCards", playCards);
  console.log("cards", cards);

  return (
    <div className="Body">
      <h3>Play Page</h3>
      <div className="BodyMain">
        <div className="CardSetWrap">
          {homeCards.map((c, i) => {
            return (
              <div
                className={`CardSet CardNo_${i}`}
                key={i}>
                {c &&
                  c.map((cc, idx) => {
                    return <CardContainer key={idx}>{cc}</CardContainer>;
                  })}
              </div>
            );
          })}
        </div>
        <div className="PlaySetWrap">
          {playCards.map((c, i) => {
            return (
              <div
                className="PlaySet"
                key={i}>
                {c &&
                  c.map((cc, idx) => {
                    return (
                      <div className={`PlayCard CardNo_${idx}`}>
                        <CardContainer key={idx}>{cc}</CardContainer>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Play;
