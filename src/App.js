import "assets/styles/common.scss";
import {BrowserRouter} from "react-router-dom";
import * as Layouts from "layouts";

function App() {
  return (
    <Layouts.App>
      <BrowserRouter>
        <Layouts.Head />
        <Layouts.Body />
      </BrowserRouter>
    </Layouts.App>
  );
}

export default App;
