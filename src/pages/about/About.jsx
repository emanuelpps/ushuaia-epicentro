/* eslint-disable react/prop-types */
import AboutHistory from "./Tags/History/AboutHistory";
import AboutHowToGet from "./Tags/HowToGet/AboutHowToGet";
import AboutLocation from "./Tags/Location/AboutLocation";
import AboutPresent from "./Tags/Present/AboutPresent";
import TagsContainer from "./TagsContainer";

function About({ tagSelection, setTagSelection }) {
  return (
    <div className="h-[95%] flex flex-col justify-center items-center relative">
      <div className="absolute w-full h-full bg-black opacity-25"></div>
      <TagsContainer setTagSelection={setTagSelection} />
      {(tagSelection === "Historia" && <AboutHistory />) ||
        (tagSelection === "Actualidad" && <AboutPresent />) ||
        (tagSelection === "Ubicacion" && <AboutLocation />) ||
        (tagSelection === "Como Llegar" && <AboutHowToGet />)}
    </div>
  );
}

export default About;
