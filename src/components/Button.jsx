import "./btn.css";

const Button = ({ text, handelClick }) => {
  return (
    <button
      onClick={handelClick}
      className="btn-primary rounded-md bg-slate-900 m-1 p-2 text-white hover:bg-black"
    >
      {text}
    </button>
  );
};

export default Button;
