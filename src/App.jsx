import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanySpecific from "./pages/CompanySpecific/CompanySpecific";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CompanySpecific />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
