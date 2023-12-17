function NoBtn({ onNo }) {
    return (
        <button onClick={onNo} className="yes-no-btn minus bdr-4 bdr-solid bdr-red bg-black txt-red">
            <i className="fa-solid fa-xmark"></i>
        </button>
    );
}

export default NoBtn;