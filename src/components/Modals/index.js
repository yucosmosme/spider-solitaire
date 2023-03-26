const Modal = (props) => {
  return (
    <div className={`Modal ${props.visible ? "visible" : "invisible"}`}>
      {props.children}
    </div>
  );
};

export default Modal;
