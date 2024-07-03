import locationMap from "../../../../../public/assets/images/mapa-ushuaia.webp";

function AboutLocation() {
  return (
    <div className="h-full w-[90%]  flex justify-center items-center">
      <div id="about-history-container" className="flex gap-5 h-[80%]">
        <div
          id="about-history-image"
          className="w-full flex justify-center items-center"
        >
          <img src={locationMap} className="w-full h-full rounded-md" />
        </div>
        <div
          id="about-history-text"
          className="w-full justify-center items-center text-white bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 p-2"
        >
          <h1 className="font-[500] border-b-[1px] border-white text-lg p-2">
            Ubicacion
          </h1>
          <div>
            <p className="p-2 tracking-wide leading-6">
              Ushuaia, la ciudad más austral del mundo, se encuentra en el
              extremo sur de la Isla Grande de Tierra del Fuego, Argentina. Está
              situada a orillas del Canal Beagle y está rodeada por la
              majestuosa cordillera de los Andes Fueguinos. Su ubicación la
              convierte en un punto estratégico y de gran belleza natural,
              ofreciendo una combinación única de paisajes montañosos, bosques,
              glaciares y costas marinas.
            </p>
            <p className="p-2 tracking-wide leading-6">
              Está ubicada a una latitud de
              aproximadamente 54°48′ Sur y una longitud de 68°18′ Oeste. Esta
              ubicación la coloca casi en el final del continente sudamericano,
              muy cerca de la Antártida.
              La ciudad se extiende desde la costa del Canal Beagle hacia las montañas, lo que le otorga un relieve variado con pendientes pronunciadas y terrenos ondulados. La proximidad con los Andes Fueguinos le proporciona un fondo escénico impresionante, con picos nevados
              visibles durante gran parte del año.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLocation;
