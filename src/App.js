import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PersonalityTest from "./pages/PersonalityTest";
import Page404 from "./pages/404Page";
import TestResult from "./pages/TestResult";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<PersonalityTest />} />
        <Route path="/result" element={<TestResult />} />
        <Route path="*" element = {<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
