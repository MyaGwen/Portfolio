// import { useState } from "react";
// import "./App.css";
// import Speedtyping from "./components/Speed Typing/Speedtyping";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioApp from "./components/Portfolio/PortfolioApp";
import AllProjects from "./components/Portfolio/My Projects/AllProjects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PortfolioApp />} />
          <Route exact path="allProjects" element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
