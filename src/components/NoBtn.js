function NoBtn({ onNo }) {
    return (
        <button onClick={onNo} className="yes-no-btn minus">
            <i className="fa-solid fa-xmark"></i>
        </button>
    );
}

export default NoBtn;