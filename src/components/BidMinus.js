function BidMinus({ onMinus }) {
    return (
        <button onClick={onMinus} className="bid-btn bdr-round-1 bdr-3 bdr-solid bdr-white bg-black txt-white">
            <i className="fa-solid fa-minus"></i>
        </button>
    );
}

export default BidMinus;