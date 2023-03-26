import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h3>Home Page</h3>
      <ul>
        <li>
          <Link to="/play">Go Play</Link>
        </li>
        <li>
          <Link to="/settings">Go Settings</Link>
        </li>
        <li>
          <Link to="/dev">Go Dev</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
