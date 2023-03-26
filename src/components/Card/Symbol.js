import Suit from "components/Card/Suit";

const Symbol = (props) => {
  return (
    <>
      <div className={`Icon ${props.position}`}>
        <label>{props.number + 1}</label>
        <Suit id={props.suit} />
      </div>
    </>
  );
};

export default Symbol;
