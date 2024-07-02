/* eslint-disable react/prop-types */

const ButtonVariants = {
  primary:
    "border-2 border-white p-2 pl-10 pr-10 text-xl text-white hover:bg-white hover:text-black rounded-md",
};

const Buttons = ({ variant = "primary", label, onClick, style }) => (
  <button className={ButtonVariants[variant]} onClick={onClick} style={style}>
    {label}
  </button>
);

export default Buttons;
