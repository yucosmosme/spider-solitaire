import GameManager from "managers/GameManager";
import CardContainer from "components/CardContainer";

const Dev = ({level}) => {
  const gm = new GameManager(level);
  const cm = gm.getCardManager();
  return <CardContainer>{cm.getCards()}</CardContainer>;
};

export default Dev;
