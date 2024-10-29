import PropTypes from "prop-types";

const Button = ({ onViewChange, view }) => {
  return (
    <div className="flex justify-between w-11/12 mx-auto mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-5">{`${view} Players`}</h1>
      </div>
      <div>
        <button
          onClick={() => onViewChange("Available")}
          className="border px-5 py-3 rounded-xl"
        >
          Available
        </button>
        <button
          onClick={() => onViewChange("Selected")}
          className="border px-5 py-3 rounded-xl"
        >
          Selected
        </button>
      </div>
    </div>
  );
};

Button.propTypes = {
  onViewChange: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
};

export default Button;
