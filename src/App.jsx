import { useState } from "react";
import "./App.css";
import Main from "./pages/Main";

function App() {
  return (
    <div
      id="root"
      className="flex w-[100vw] justify-center items-center h-[100vh] overflow-hidden font-Raleway"
    >
      <div className="flex w-[100vw] justify-center items-center h-[100vh] overflow-hidden bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <Main />
      </div>
    </div>
  );
}

export default App;
