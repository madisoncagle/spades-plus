function Modal({ display, onClose }) {
    return (
        <div id="add-player-modal" class="modal" hidden={display}>

            <div class="modal-content">
                <div class="modal-header">
                    <h3>NEW PLAYER</h3>
                    <i className="fa-solid fa-xmark modal-close" onClick={onClose}></i>
                </div>

                <div class="modal-name-input">
                    <label for="new-name">player name</label>
                    <input type="text" name="new-name" id="new-name" />
                </div>

                <p class="modal-warning">please enter a name</p>

                <button type="submit" id="submit-player-name">ADD</button>
            </div>

        </div>
    );
}

export default Modal;