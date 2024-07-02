/* eslint-disable react/prop-types */
import Buttons from "../../components/buttons/Buttons";

function Home({ setScreenSelection }) {
    function handleOnClick (){
        setScreenSelection(1)
    }
  return (
    <div
      id="home-page"
      className="w-full h-[95%] flex justify-center items-center relative"
    >
      <div className="absolute w-full h-full bg-black opacity-25"></div>
      <div id="intro" className="z-50 w-full h-full flex justify-end items-end">
        <div
          id="intro-title"
          className="flex flex-col w-[600px] items-end justify-end mr-20"
        >
          <h2 className="font-[800] text-[1.4rem] text-pretty text-white leading-none  tracking-tight [text-shadow:_-4px_-1px_2px_rgba(131,131,131,0.73)]">
            Descubrí el Epicentro del Fin del Mundo
          </h2>
          <h1 className="font-[800] text-[8.5rem] text-pretty mb-[85px] text-white leading-none tracking-tight customTextStyle customTextStyle [text-shadow:_-4px_-1px_2px_rgba(131,131,131,0.73)]">
            Ushuaia
          </h1>
          <div id="intr-button" className="pb-[50px]">
            <Buttons variant="primary" label="Explorar →" onClick={handleOnClick}></Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
