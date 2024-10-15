import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stylesheet1 from './Components/Pages/Stylesheet1';
import Stylesheet2 from './Components/Pages/Stylesheet2';
import Stylesheet3 from './Components/Pages/Stylesheet3';
import Stylesheet4 from './Components/Pages/Stylesheet4';
import NoStylesheet from "./Components/Pages/NoStylesheet";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Stylesheet1 />} />
          <Route path="/stylesheet2" element={<Stylesheet2 />} />
          <Route path="/stylesheet3" element={<Stylesheet3 />} />
          <Route path="/stylesheet4" element={<Stylesheet4 />} />
          <Route path="/NoStylesheet" element={<NoStylesheet />} />
        </Routes>
    </Router>
  );
}

export default App;
