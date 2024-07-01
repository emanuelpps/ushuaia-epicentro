function NavBar() {
  return (
    <div id="navbar" className="w-full text-[#252834] relative">
      <div className="absolute h-full w-full opacity-15 bg-white  rounded-t-xl"></div>
      <div
        id="navbar-container"
        className="h-16 flex items-center justify-between border-b-[1px] border-white pl-10 pr-10 pt-5 pb-5"
      >
        <div id="navbar-log">LOGO</div>
        <div id="navbar-menu" className="flex gap-10">
          <button className="font-[400] text-xl">Inicio</button>
          <button className="font-[400] text-xl">Sobre</button>
          <button className="font-[400] text-xl">Galeria</button>
          <button className="font-[400] text-xl">Actividades</button>
          <button className="font-[400] text-xl">Informacion Util</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
