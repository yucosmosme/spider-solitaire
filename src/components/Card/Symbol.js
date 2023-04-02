import Suit from "components/Card/Suit";

const Symbol = (props) => {
  return (
    <>
      <div className={`Icon ${props.position}`}>
        <label style={{color: props.color}}>{props.number + 1}</label>
        <Suit
          suit={props.suit}
          color={props.color}
        />
      </div>
    </>
  );
};

export default Symbol;
