import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import Modal from "./Modal";

function Scoreboard() {
    // STATE
    const [players, setPlayers] = useState(() => {
        const storedPlayers = sessionStorage.getItem("players");
        return storedPlayers ? JSON.parse(storedPlayers) : [];
    });
    useEffect(() => {
        sessionStorage.setItem("players", JSON.stringify(players));
    }, [players]);

    const [hideModal, setHideModal] = useState(true);
    const [hideModalWarning, setHideModalWarning] = useState(true);
    const [newName, setNewName] = useState("");


    // VARS
    const playerList = players.map((player, i) => {
        return (
            <li key={i}>
                <PlayerCard
                    id={player.id}
                    name={player.name}
                    score={player.score}
                    bid={player.bid}
                    pastBids={player.pastBids}
                    onBidPlus={() => incrementBid(i)}
                    onBidMinus={() => decrementBid(i)}
                    onBidGet={() => incrementScore(i)}
                    onBidMiss={() => zeroScore(i)}
                    onUndo={() => undo(i)}
                    onRemovePlayer={() => removePlayer(i)} />
            </li>
        )
    });


    // METHODS
    function addPlayer(name) {
        if (name !== "") {
            setHideModalWarning(true);
            setHideModal(true);
            setNewName("");
            setPlayers([...players, {
                name,
                score: 0,
                bid: 0,
                pastBids: []
            }]);
        } else {
            setHideModalWarning(false);
        }
    }

    function removePlayer(index) {
        players.splice(index, 1);
        setPlayers([...players]);
    }

    function incrementBid(index) {
        players[index].bid += 1;
        setPlayers([...players]);
    }

    function decrementBid(index) {
        if (players[index].bid > 0) {
            players[index].bid -= 1;
            setPlayers([...players]);
        }
    }

    function incrementScore(index) {
        players[index].score += players[index].bid + 10;
        players[index].pastBids.push({ bid: players[index].bid, result: "right" });
        players[index].bid = 0;

        setPlayers([...players]);
    }

    function zeroScore(index) {
        players[index].pastBids.push({ bid: players[index].bid, result: "wrong" });
        players[index].bid = 0;

        setPlayers([...players]);
    }

    function undo(index) {
        if (players[index].pastBids.length > 0) {
            var lastBid = players[index].pastBids.pop();

            if (lastBid.result === "right") {
                players[index].score -= (10 + lastBid.bid);
            }

            players[index].bid = lastBid.bid;

            setPlayers([...players]);
        }
    }

    function toggleModal() {
        setHideModal(!hideModal);
        setHideModalWarning(true);
        setNewName("");
    }

    function handleKeyUp(e) {
        if (e.key === "Enter") {
            addPlayer(newName)
        }
    }


    // RETURN
    return (
        <div>
            <Modal value={newName} hidden={hideModal} onInput={e => setNewName(e.target.value)} onAdd={() => addPlayer(newName)} onClose={toggleModal} onKeyUp={e => handleKeyUp(e)} hideWarning={hideModalWarning} />

            <ul className="cardholder">
                {playerList}

                <li>
                    <button type="button" id="add-player-btn" onClick={toggleModal}>
                        <i className="fa-solid fa-user"></i>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Scoreboard;