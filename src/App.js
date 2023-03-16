import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "assets/css/styles.css";
import Home from "pages/Home";
import Game from "pages/Game";
import Setting from "pages/Setting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
