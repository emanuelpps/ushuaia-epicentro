import { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Home from "./home/Home";
import About from "./about/About";

function Main() {
  const [screenSelection, setScreenSelection] = useState(0);
  const [tagSelection, setTagSelection] = useState("");
  return (
    <div className="cardBackground rounded-2xl flex justify-center items-center h-[95%] w-[85%] flex-col">
      <NavBar screenSelection={screenSelection} />
      {(screenSelection === 0 && (
        <>
          <Home setScreenSelection={setScreenSelection} />
        </>
      )) ||
        (screenSelection === 1 && (
          <>
            <About tagSelection={tagSelection} setTagSelection={setTagSelection}/>
          </>
        ))}
    </div>
  );
}

export default Main;
