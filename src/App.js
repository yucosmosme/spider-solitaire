import "assets/styles/common.scss";
import {BrowserRouter} from "react-router-dom";
import * as Layouts from "layouts";

function App() {
  return (
    <Layouts.App>
      <BrowserRouter>
        <Layouts.Header />
        <Layouts.Body />
        <Layouts.Footer />
      </BrowserRouter>
    </Layouts.App>
  );
}

export default App;
