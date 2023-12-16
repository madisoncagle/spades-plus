import { useState } from "react";
import AddPlayerBtn from "./AddPlayerBtn";
import PlayerCard from "./PlayerCard";
import Modal from "./Modal";

function Scoreboard() {
    // STATE
    const [players, setPlayers] = useState([]);
    const [hideModal, setHideModal] = useState(true);


    // VARS
    const playerList = players.map(player => {
        return (
            <li key={player.id}>
                <PlayerCard name={player.name} onRemove={() => removePlayer(player.id)} />
            </li>
        )
    });


    // METHODS
    function addPlayer(name) {
        // show warning if empty
        if (name != "") {
            // set players
            setPlayers([...players, { id: Date.now(), name }]);
            setHideModal(true);
        }
    }

    function removePlayer(id) {
        for (let i = 0; i < players.length; i++) {
            if (players[i].id === id) {
                const newPlayers = players.slice(0, i).concat(players.slice(i + 1));
                setPlayers(newPlayers);
            }
        }
    }

    function toggleModal() {
        setHideModal(!hideModal);
    }


    // RETURN
    return (
        <div className="scoreboard">
            <Modal display={hideModal} onClose={toggleModal} onAdd={addPlayer} />

            <ul className="flex-center flex-wrap gap-2 no-bullets">
                {/* <li>
                    <PlayerCard name="Default" onRemove={removePlayer} />
                </li> */}

                {playerList}

                <li>
                    <AddPlayerBtn onAdd={toggleModal} />
                </li>
            </ul>
        </div>
    );
}

export default Scoreboard;