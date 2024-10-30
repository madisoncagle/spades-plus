function AddPlayerBtn({ onAdd }) {
    return (
        <button type="button" id="add-player-btn" onClick={onAdd}>
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-plus"></i>
        </button>
    );
}

export default AddPlayerBtn;