import {useNavigate} from "react-router-dom";
import Modal from "components/Modals";

const MenuModal = (props) => {
  const navigate = useNavigate();

  const go = (to) => {
    props.close();
    navigate(to);
  };

  return (
    <Modal visible={props.visible}>
      <div className="MenuModal">
        <ul>
          <li onClick={() => go("/")}>Home</li>
          <li onClick={() => props.close}>Resume</li>
          <li onClick={() => go("/play")}>Play</li>
          <li onClick={() => go("/settings")}>Settings</li>
          <li onClick={() => go("/")}>Exit</li>
        </ul>
        <button
          className="MenuModalBottom"
          onClick={props.close}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default MenuModal;
