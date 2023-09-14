import {useAppSelector} from "store";
import Menu from "components/Menu";

const Header = () => {
  const level = useAppSelector((s) => s.level.value);

  return (
    <header>
      <Menu />
      <span>Level : {level} </span>
    </header>
  );
};
export default Header;
