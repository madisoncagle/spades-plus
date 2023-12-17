import { useState } from "react";


function Modal({ hidden, onAdd, onClose }) {
    // STATE
    const [input, setInput] = useState("");
    const [canAdd, setCanAdd] = useState(false);


    // FUNCTIONS
    function close() {
        setInput("");
        setCanAdd(false);
    }


    // RETURN
    return (
        <div id="add-player-modal" className="modal" hidden={hidden}>

            <div className="modal-content">
                <i className="fa-solid fa-xmark modal-close" onClick={onClose}></i>

                <h3>NEW PLAYER</h3>

                <div className="modal-middle">
                    <div className="modal-name-input">
                        <label htmlFor="new-name">player name</label>
                        <input type="text" name="new-name" id="new-name" value={input} onInput={e => {
                            setInput(e.target.value);
                            setCanAdd(input !== "");
                        }} />
                    </div>

                    <p className="modal-warning" hidden={!canAdd}>please enter a name</p>
                </div>

                <button type="submit" id="submit-player-name" className="btn-default bdr-round-1 bdr-3 bdr-solid bdr-black bg-white" onClick={() => onAdd(canAdd, input)}>ADD</button>
            </div>

        </div>
    );
}

export default Modal;