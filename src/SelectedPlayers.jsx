import PropTypes from "prop-types";

const SelectedPlayers = ({ selectedPlayers, onViewChange }) => {
  return (
    <div>
      {selectedPlayers.length === 0 ? (
        <div className="mx-auto w-11/12">
          <p className="text-4xl font-bold">No players selected.</p>
          <button
            onClick={() => onViewChange("available")}
            className="btn bg-[#E7FE29] hover:bg-green-300 hover:text-white border-none mt-5"
          >
            Available Players
          </button>
        </div>
      ) : (
        selectedPlayers.map((player, index) => (
          <div
            key={index}
            className="flex items-center mb-4 bg-base-200 p-7 w-11/12 mx-auto mt-5"
          >
            <img
              src={player.image}
              alt={player.name}
              className="rounded-full w-20 h-20 mr-4"
            />
            <div>
              <p className="font-bold text-xl">{player.name}</p>
              <p>{player.role}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onViewChange: PropTypes.func.isRequired,
};

export default SelectedPlayers;
