import _ from "lodash";
import {createElement} from "react";
import {Route, Routes} from "react-router-dom";
import * as Scenes from "scenes";

const Body = () => {
  return (
    <Routes>
      {_.entries(Scenes).map((s) => {
        return (
          <Route
            key={s}
            path={"Home" === s[0] ? "/" : s[0].toUpperCase()}
            element={createElement(s[1], {})}
          />
        );
      })}
    </Routes>
  );
};
export default Body;
