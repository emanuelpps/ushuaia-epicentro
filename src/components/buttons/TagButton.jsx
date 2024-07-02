/* eslint-disable react/prop-types */

const TagButtonVariants = {
    primary:
      "border-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 p-1 pl-10 pr-10 text-md text-white hover:bg-white hover:text-black rounded-md",
  };
  
  const TagButton = ({ variant = "primary", label, onClick, style }) => (
    <button className={ TagButtonVariants[variant]} onClick={onClick} style={style}>
      {label}
    </button>
  );
  
  export default TagButton;
  