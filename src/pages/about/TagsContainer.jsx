/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TagButton from "../../components/buttons/TagButton";

function TagsContainer({ setTagSelection }) {
  function handleOnClick(value) {
    console.log(value);
    setTagSelection(value);
  }

  return (
    <div id="submenu-container">
      <div
        id="about-buttons"
        className="w-full flex justify-center items-center gap-10 pt-5"
      >
        <TagButton
          variant="primary"
          label="Historia"
          onClick={(e) => handleOnClick(e.target.innerText)}
        ></TagButton>
        <TagButton
          variant="primary"
          label="Actualidad"
          onClick={(e) => handleOnClick(e.target.innerText)}
        ></TagButton>
        <TagButton
          variant="primary"
          label="Ubicacion"
          onClick={(e) => handleOnClick(e.target.innerText)}
        ></TagButton>
        <TagButton
          variant="primary"
          label="Como Llegar"
          onClick={(e) => handleOnClick(e.target.innerText)}
        ></TagButton>
      </div>
    </div>
  );
}

export default TagsContainer;
