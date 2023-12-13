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
                <PlayerCard name={player.name} onRemove={() => removePlayer(this.name)} />
            </li>
        )
    });


    // METHODS
    function addPlayer(name = "Player") {
        setPlayers(players.concat({ id: Date.now(), name: "Player" }));
        // console.log(players);
    }

    function removePlayer(name) {
        // fix
        for (let i = 0; i < players.length; i++) {
            if (players[i].name == name) {
                console.log(`removing ${players[i].id}, ${players[i].name}`)
                setPlayers(players.slice(i, i + 1));
            }
        }
    }


    // RETURN
    return (
        <ul className="flex-center flex-wrap gap-2 no-bullets">
            <li>
                <PlayerCard name="Default" onRemove={() => removePlayer(this.name)} />
            </li>

            {playerList}

            <li>
                <AddPlayerBtn onAdd={addPlayer} />
            </li>
        </ul>
    );
}

export default Scoreboard;