import historyImage from "../../../../../public/assets/images/presidioH.jpg";
function AboutHistory() {
  return (
    <div className="h-full w-[90%]  flex justify-center items-center">
      <div id="about-history-container" className="flex gap-5">
        <div id="about-history-image" className="w-full flex justify-center items-center">
          <img src={historyImage} className="w-full h-full rounded-md" />
        </div>
        <div id="about-history-text" className="w-full justify-center items-center text-white bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 p-2">
          <h1 className="font-[500] border-b-[1px] border-white text-lg p-2">Historia de Ushuaia</h1>
          <div>
            <p className="p-2">
              Ushuaia, conocida como la ciudad más austral del mundo, tiene una
              rica historia que se remonta a tiempos precolombinos.
              Originalmente habitada por el pueblo Yámana, quienes vivían como
              nómadas y se adaptaron perfectamente a las duras condiciones
              climáticas de la región. En el siglo XIX, los exploradores
              europeos comenzaron a visitar la zona, y en 1869 se estableció la
              primera misión anglicana.
            </p>
            <p className="p-2">
              La ciudad de Ushuaia fue fundada oficialmente el 12 de octubre de
              1884 por el Comodoro Augusto Lasserre, de la Armada Argentina,
              quien izó la bandera nacional en las costas del Canal Beagle.
              Durante las primeras décadas del siglo XX, Ushuaia sirvió como
              colonia penal para delincuentes reincidentes y prisioneros
              políticos. El presidio de Ushuaia, que funcionó hasta 1947, jugó
              un papel importante en el desarrollo de la infraestructura de la
              ciudad, incluyendo la construcción de caminos y edificios
              públicos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHistory;
