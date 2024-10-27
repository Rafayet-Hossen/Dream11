import { useEffect, useState } from "react";
import Player from "./Player";

const Players = () => {
    const [players,setPlayers] = useState([])
    useEffect(() => {
        fetch('../public/player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto gap-10 mt-10 justify-center">
        {players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    );
};

export default Players;