function YesBtn({ onYes }) {
    return (
        <button onClick={onYes} className="yes-no-btn plus bdr-4 bdr-solid bdr-green bg-black txt-green">
            <i className="fa-solid fa-check"></i>
        </button>
    );
}

export default YesBtn;