import { useState } from "react";
import AddPlayerBtn from "./AddPlayerBtn";
import PlayerCard from "./PlayerCard";

function Scoreboard() {
    // STATE
    const [players, setPlayers] = useState([]);


    // VARS
    const playerList = players.map(player => {
        return (
            <li key={player.id}>
                <PlayerCard name={player.name} onRemove={removePlayer} />
            </li>
        )
    });


    // METHODS
    function addPlayer(name = "Player") {
        setPlayers([...players, { id: Date.now(), name: players.length + 1 }]);
    }

    function removePlayer(name) {
        for (let i = 0; i < players.length; i++) {
            if (players[i].name === name) {
                const newPlayers = players.slice(0, i).concat(players.slice(i + 1));
                setPlayers(newPlayers);
            }
        }
    }


    // RETURN
    return (
        <ul className="flex-center flex-wrap gap-2 no-bullets">
            <li>
                <PlayerCard name="Default" onRemove={removePlayer} />
            </li>

            {playerList}

            <li>
                <AddPlayerBtn onAdd={addPlayer} />
            </li>
        </ul>
    );
}

export default Scoreboard;