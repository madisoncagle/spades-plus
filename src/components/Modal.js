function Modal({ value, hidden, onAdd, onClose, onInput, onKeyUp, hideWarning }) {
    // RETURN
    return (
        <div id="add-player-modal" className="modal" hidden={hidden}>

            <div className="modal-content">
                <i className="fa-solid fa-xmark modal-close" onClick={onClose}></i>

                <h3>New Player</h3>

                <div className="modal-middle">
                    <div className="modal-name-input">
                        <label htmlFor="new-name">NAME</label>
                        <input ref={i => i && i.focus()} type="text" name="new-name" id="new-name" value={value} onInput={onInput} onKeyUp={onKeyUp} />
                    </div>

                    <p className="modal-warning" hidden={hideWarning}>Please enter a name</p>
                </div>

                <button type="submit" id="submit-player-name" onClick={onAdd}>ADD</button>
            </div>

        </div>
    );
}

export default Modal;