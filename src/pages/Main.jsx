import { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Home from "./home/Home";

function Main() {
  const [screenSelection, setScreenSelection] = useState(0);
  return (
    <div className="cardBackground rounded-2xl flex justify-center items-center h-[90%] w-[80%] flex-col">
      <NavBar />
      {(screenSelection === 0 && (
        <>
          <Home />
        </>
      )) ||
        (screenSelection === 1 && <div></div>)}
    </div>
  );
}

export default Main;
