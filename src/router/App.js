import React from "react";
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<h2>Prueba</h2>} path="/" />
      </Routes>

    </div>
  );
}

export default App;
