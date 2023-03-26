import _ from "lodash";
import {useAppDispatch} from "store";
import {setLevel} from "store/slices/levelSlice";
import * as levels from "constants/Level";

const Settings = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="Settings">
      <h3>Setting Page</h3>
      {_.entries(levels).map((l, i) => {
        return (
          <button
            key={l}
            onClick={() => dispatch(setLevel(i))}>
            {l[0]}
          </button>
        );
      })}
    </div>
  );
};

export default Settings;
