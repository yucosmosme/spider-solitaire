import _ from "lodash";
import {useAppDispatch, useAppSelector} from "store";
import {setLevel} from "store/slices/levelSlice";
import {setImage} from "store/slices/imageSlice";
import * as levels from "constants/Level";
import JHI from "assets/imgs/jhi.jpg";
import JHI2 from "assets/imgs/jhi2.jpg";
import ROOPI from "assets/imgs/roopi.gif";
import KDM from "assets/imgs/kdm.jpeg";

const Settings = () => {
  const dispatch = useAppDispatch();
  const images = [JHI, JHI2, ROOPI, KDM];
  const level = useAppSelector((s) => s.level.value);
  const image = useAppSelector((s) => s.image.value);

  return (
    <div className="Settings">
      <h3>Setting Page</h3>
      <div
        className="LevelWrapper">
        {_.sortBy(_.entries(levels), 1).map((l, i) => {
          return (
            <button
              key={l}
              className={level === l[1] ? "active" : ""}
              onClick={() => dispatch(setLevel(l[1]))}>
              {l[1]} - {l[0]}
            </button>
          );
        })}
      </div>
      <div className="ImgWrapper">
        {images.map((m, i) => {
          return (
            <div
              className={`Img ${image === m ? "active" : ""}`}
              key={i}
              onClick={() => dispatch(setImage(m))}>
              <img src={m} alt=""/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
