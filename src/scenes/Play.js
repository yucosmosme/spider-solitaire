import {useAppSelector} from "store";
import GameManager from "managers/GameManager";
import CardContainer from "components/CardContainer";
import {useState} from "react";
import {useEffect} from "react";

const Play = () => {
  const level = useAppSelector((s) => s.level.value);
  const gm = new GameManager(level);
  const cm = gm.getCardManager();
  const [cards, setCards] = useState(cm.getCards());
  const [homeCards, setHomeCards] = useState([]);
  const [playCards, setPlayCards] = useState([]);

  useEffect(() => {
    console.log("cm here: ", cm.getCards());

    //홈카드 셋팅 (총 104개 카드 = 10개*10세트 + 4개*1세트)
    const chunkSize = 10;
    let homeTemp = [];
    for (let i = 0; i < cards.length; i += chunkSize) {
      const chunk = cards.slice(i, i + chunkSize);
      homeTemp.push(chunk);
    }
    setHomeCards(homeTemp);
    console.log("homeCard", homeCards);

    //플레이카드에 분배 (첫 5세트 * 10개 + 4개)
  }, []);

  console.log("homeCard2", homeCards);

  return (
    <>
      <h3>Play Page</h3>
      <div className="CardSetWrap">
        {homeCards.map((c, i) => {
          return (
            <div className={`CardSet CardSet_${i}`}>
              {c &&
                c.map((cc, idx) => {
                  return <CardContainer key={idx}>{cc}</CardContainer>;
                })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Play;
