function Modal({ display, onClose }) {
    return (
        <div id="add-player-modal" className="modal" hidden={display}>

            <div className="modal-content">
                <div className="modal-header">
                    <h3>NEW PLAYER</h3>
                    <i className="fa-solid fa-xmark modal-close" onClick={onClose}></i>
                </div>

                <div className="modal-name-input">
                    <label htmlFor="new-name">player name</label>
                    <input type="text" name="new-name" id="new-name" />
                </div>

                <p className="modal-warning">please enter a name</p>

                <button type="submit" id="submit-player-name">ADD</button>
            </div>

        </div>
    );
}

export default Modal;