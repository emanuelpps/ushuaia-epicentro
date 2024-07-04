/* eslint-disable react/prop-types */
import epicentroLogo from "../../../public/assets/images/logo-epicentro.svg";
function NavBar({ screenSelection, setScreenSelection }) {
  const navBarHandler = (value) => {
    setScreenSelection(value);
  };
  return (
    <div id="navbar" className="w-full relative">
      <div className="absolute h-full w-full  bg-black opacity-45  rounded-t-xl"></div>
      <div
        id="navbar-container"
        className="z-50 h-16 flex items-center justify-between border-b-[1px] border-white pl-10 pr-10 text-white"
      >
        <div
          id="navbar-log"
          className="z-50 flex flex-col leading-tight justify-center items-center"
        >
          <div className="flex justify-center items-center h-7">
            <img src={epicentroLogo} className="w-[50px] font-white" />
          </div>
          <div className="flex gap-2 justify-center items-center leading-snug">
            <p className="text-[0.8rem]">Ushuaia</p>
            <div className="flex">
              <p className="text-[0.8rem] font-semibold">EP</p>
              <p className="text-[0.8rem]">icentro</p>
            </div>
          </div>
        </div>
        <div
          id="navbar-menu"
          className="flex gap-10 z-50 justify-center items-center"
        >
          <button
            className={`font-[300] text-md ${screenSelection  ? "" : ""}`}
            value={0}
            onClick={(e) => navBarHandler(e.target.value)}
          >
            Inicio
          </button>
          <button
            className="font-[300] text-md"
            value={1}
            onClick={(e) => navBarHandler(e.target.value)}
          >
            Sobre
          </button>
          <button
            className="font-[300] text-md"
            value={2}
            onClick={(e) => navBarHandler(e.target.value)}
          >
            Actividades
          </button>
          <button
            className="font-[300] text-md"
            value={3}
            onClick={(e) => navBarHandler(e.target.value)}
          >
            Galeria
          </button>
          <button
            className="font-[300] text-md"
            value={4}
            onClick={(e) => navBarHandler(e.target.value)}
          >
            Informacion Util
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
