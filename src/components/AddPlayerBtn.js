function AddPlayerBtn({ onAdd }) {
    return (
        // <button type="button" id="add-player-btn" className="bdr-5 bdr-solid bdr-black" onClick={onAdd}>
        //     <i className="fa-solid fa-user"></i>
        //     <i className="fa-solid fa-plus"></i>
        // </button>

        <button type="button" id="add-player-btn" onClick={onAdd}>
            <span className="name-line"></span>

            <span className="add-player-plus">+</span>

            <div className="tiny-rectangles">
                <div className="tiny-rectangle red"></div>
                <div className="tiny-rectangle blue"></div>
            </div>
        </button>
    );
}

export default AddPlayerBtn;