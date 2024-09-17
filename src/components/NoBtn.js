function NoBtn({ onNo }) {
    return (
        <button onClick={onNo} className="yes-no-btn no">
            Got set.
        </button>
    );
}

export default NoBtn;