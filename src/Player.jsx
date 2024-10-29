import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Player = ({ player, coins, onSelectPlayer }) => {
  const { name, country, role, battingRole, bowlingRole, price, image } =
    player;

  const notifySuccess = () => {
    toast.success("Player selected successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const notifyWarning = () => {
    toast.warn("Not enough coins to select this player!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handlePlayerSelection = () => {
    const playerPrice = Number(price);
    if (coins >= playerPrice) {
      onSelectPlayer(player);
      notifySuccess();
    } else {
      notifyWarning();
    }
  };


  return (
    <div className="border w-96 p-5 space-y-3 rounded-xl shadow-lg bg-white">
      <img
        className="rounded-xl h-72 w-full object-cover"
        src={image}
        alt={name}
      />

      <div className="text-2xl font-bold flex items-center gap-2">
        <UserIcon />
        {name}
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-gray-500 flex items-center gap-2">
          <FlagIcon />
          {country}
        </h2>
        <span className="border px-2 py-1 rounded-xl bg-blue-100 text-blue-700 font-semibold">
          {role}
        </span>
      </div>

      <div className="flex justify-between">
        <p>{battingRole}</p>
        <p>{bowlingRole}</p>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">${price}</h1>
        <button
          onClick={handlePlayerSelection}
          className={`border px-3 py-1 rounded-xl font-semibold ${
            coins >= price
              ? "bg-green-100 text-green-700 hover:bg-green-200"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          disabled={coins < price}
        >
          {coins >= price ? "Choose Player" : "Insufficient Coins"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  coins: PropTypes.number.isRequired,
  onSelectPlayer: PropTypes.func.isRequired,
};

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
      clipRule="evenodd"
    />
  </svg>
);

const FlagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Player;
