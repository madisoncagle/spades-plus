function Modal({ value, hidden, onAdd, onClose, onInput, hideWarning }) {
    // RETURN
    return (
        <div id="add-player-modal" className="modal" hidden={hidden}>

            <div className="modal-content">
                <i className="fa-solid fa-xmark modal-close" onClick={onClose}></i>

                <h3>NEW PLAYER</h3>

                <div className="modal-middle">
                    <div className="modal-name-input">
                        <label htmlFor="new-name">player name</label>
                        <input ref={i => i && i.focus()} type="text" name="new-name" id="new-name" value={value} onKeyUp={onInput} />
                    </div>

                    <p className="modal-warning" hidden={hideWarning}>please enter a name</p>
                </div>

                <button type="submit" id="submit-player-name" className="btn-default bdr-round-1 bdr-3 bdr-solid bdr-black txt-black bg-white" onClick={onAdd}>ADD</button>
            </div>

        </div>
    );
}

export default Modal;