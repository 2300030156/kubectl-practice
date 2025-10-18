import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;