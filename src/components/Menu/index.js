import React, {useState} from "react";
import MenuModal from "components/Modals/MenuModal";
import * as Unicons from "@iconscout/react-unicons";

const Menu = () => {
  let [visible, setVisible] = useState(false);

  const toggleMenuModal = () => setVisible(!visible);

  return (
    <div className="Menu">
      <ul>
        <li onClick={toggleMenuModal}>
          <Unicons.UilAlignJustify />
          <label>Menu</label>
        </li>
      </ul>
      <MenuModal
        visible={visible}
        close={toggleMenuModal}
      />
    </div>
  );
};

export default Menu;
