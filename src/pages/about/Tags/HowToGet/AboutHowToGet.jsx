import cityAerial from "../../../../../public/assets/images/ciudad-aerea.jpg";

function AboutHowToGet() {
  return (
    <div className="h-full w-[90%]  flex justify-center items-center">
      <div id="about-history-container" className="flex gap-5 h-[90%]">
        <div
          id="about-history-image"
          className="w-full flex justify-center items-center"
        >
          <img src={cityAerial} className="w-full h-full rounded-md" />
        </div>
        <div
          id="about-history-text"
          className="w-full justify-center items-center text-white bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60  p-5"
        >
          <h1 className="font-[500] border-b-[1px] border-white text-lg p-2">
            Como llegar
          </h1>
          <div>
            <p className="text-md p-2 tracking-wide leading-6">
              • <b>Vía Aérea:</b> La forma más rápida y conveniente de llegar a
              Ushuaia es por avión. El Aeropuerto de Ushuaia recibe vuelos
              diarios desde Buenos Aires y otras ciudades importantes de
              Argentina. El vuelo desde Buenos Aires tiene una duración
              aproximada de 3 horas y media.
            </p>
            <p className="text-md p-2 tracking-wide leading-6">
              • <b>Vía Terrestre:</b> La ruta más común es la Ruta Nacional
              3, que recorre más de 3,000 km a lo largo de la costa atlántica de
              Argentina. Este viaje incluye el cruce del Estrecho de Magallanes
              en ferry y la travesía de la región chilena de Tierra del Fuego
              antes de llegar a la ciudad.
            </p>
            <p className="text-md p-2 tracking-wide leading-6">
              • <b>Vía Marítima:</b> Ushuaia también es un puerto importante
              para cruceros que navegan hacia la Antártida y otros destinos del
              sur. Durante la temporada de verano, muchas compañías de cruceros
              ofrecen itinerarios que incluyen paradas en Ushuaia, permitiendo a
              los pasajeros explorar la ciudad y sus alrededores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHowToGet;
