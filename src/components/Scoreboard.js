import { useState } from "react";
import AddPlayerBtn from "./AddPlayerBtn";
import PlayerCard from "./PlayerCard";
import Modal from "./Modal";

function Scoreboard() {
    // STATE
    const [players, setPlayers] = useState([]);
    const [hideModal, setHideModal] = useState(true);
    const [hideModalWarning, setHideModalWarning] = useState(true);
    const [newName, setNewName] = useState("");


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
        if (name !== "") {
            setHideModalWarning(true);
            setHideModal(true);
            setNewName("");
            setPlayers([...players, { id: Date.now(), name }]);
        } else {
            setHideModalWarning(false);
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
        setHideModalWarning(true);
        setNewName("");
    }

    function handleInput(e) {
        if (e.key === "Enter") {
            addPlayer(newName)
        }
        else if (e.key === "Backspace") {
            setNewName(newName.slice(0, -1));
        }
        else {
            setNewName(newName.concat(e.key));
        }

        console.log(e.key);
        console.log(newName);
    }


    // RETURN
    return (
        <div className="scoreboard">
            <Modal value={newName} hidden={hideModal} onAdd={() => addPlayer(newName)} onClose={toggleModal} onInput={e => handleInput(e)} hideWarning={hideModalWarning} />

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