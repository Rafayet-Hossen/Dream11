import { useEffect, useState } from "react";
import Player from "./Player";
import PropTypes from "prop-types";

const Players = ({ coins, setCoins }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("../public/player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  const onSelectPlayer = (price) => {
    setCoins((prevCoins) => prevCoins - price);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto gap-10 mt-10 justify-center">
      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          coins={coins}
          onSelectPlayer={onSelectPlayer}
        />
      ))}
    </div>
  );
};

Players.propTypes = {
  coins: PropTypes.number.isRequired,
  setCoins: PropTypes.func.isRequired, 
};

export default Players;
