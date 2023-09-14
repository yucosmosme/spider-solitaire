import {useAppSelector} from "store";
import GameManager from "managers/GameManager";
import CardContainer from "components/CardContainer";
import {useState} from "react";
import {useEffect} from "react";
import {cloneDeep} from "lodash";
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

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

    copied.forEach((c) => {
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

  // console.log("homeCard", homeCards);
  // console.log("playCards", playCards);
  // console.log("cards", cards);

  const handleStart = () => {
    console.log("handleStart");
  };
  const handleDrag = () => {
    console.log("handleDrag");
  };
  const handleStop = () => {
    console.log("handleStop");
  };

  return (
    <section className="Body">
      <article className="CardSetWrap">
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
      </article>
      <article className="PlaySetWrap">
        {playCards.map((c, i) => {
          return (
            <div
              className="PlaySet"
              key={i}>
              {c &&
                c.map((cc, idx) => {
                  return (
                    <>
                      {idx === c.length - 1 ? (
                        <Draggable
                          key={idx}
                          bounds={[0,0,0,0]}
                          onStart={handleStart}
                          onDrag={handleDrag}
                          onStop={handleStop}
                          >
                          <div className={`PlayCard CardNo_${idx}`}>
                            <CardContainer key={idx}>{cc}</CardContainer>
                          </div>
                        </Draggable>
                      ) : (
                        <div className={`PlayCard CardNo_${idx}`}>
                          <CardContainer key={idx}>{cc}</CardContainer>
                        </div>
                      )}
                    </>
                  );
                })}
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Play;
