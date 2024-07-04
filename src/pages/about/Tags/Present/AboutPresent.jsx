import cityImage from "../../../../../public/assets/images/ushuaia-image.jpeg";

function AboutPresent() {
  return (
    <div className="h-full w-[90%]  flex justify-center items-center">
      <div id="about-history-container" className="flex gap-5 h-[90%]">
        <div
          id="about-history-image"
          className="w-full flex justify-center items-center"
        >
          <img src={cityImage} className="w-full h-full rounded-md" />
        </div>
        <div
          id="about-history-text"
          className="w-full justify-center items-center text-white bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60  p-5"
        >
          <h1 className="font-[500] border-b-[1px] border-white text-lg p-2">
            Actualidad
          </h1>
          <div>
            <p className="p-2 tracking-wide leading-6">
            En las últimas décadas, Ushuaia ha experimentado un crecimiento significativo gracias al turismo. La belleza natural de la región, su rica historia y su ubicación única la han convertido en un destino popular para viajeros de todo el mundo.
            </p>
            <p className="p-2 tracking-wide leading-6">
            En la actualidad, Ushuaia se ha consolidado como un destino turístico de renombre internacional, atrayendo a visitantes de todo el mundo. La ciudad ofrece una mezcla única de naturaleza, aventura y cultura, con una infraestructura turística bien desarrollada que incluye hoteles, restaurantes, y servicios de excursiones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPresent;
