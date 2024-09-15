function YesBtn({ onYes }) {
    return (
        <button onClick={onYes} className="yes-no-btn plus">
            <i className="fa-solid fa-check"></i>
        </button>
    );
}

export default YesBtn;