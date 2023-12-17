function BidPlus({ onPlus }) {
    return (
        <button onClick={onPlus} className="bid-btn bdr-round-1 bdr-3 bdr-solid bdr-white bg-black txt-white">
            <i className="fa-solid fa-plus"></i>
        </button>
    );
}

export default BidPlus;