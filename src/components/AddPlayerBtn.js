function AddPlayerBtn({ onAdd }) {
    return (
        <button type="button" id="add-player-btn" className="bdr-5 bdr-solid bdr-black" onClick={onAdd}>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-plus"></i>
        </button>
    );
}

export default AddPlayerBtn;