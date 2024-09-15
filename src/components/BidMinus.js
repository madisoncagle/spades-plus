function BidMinus({ onMinus }) {
    return (
        <button onClick={onMinus} className="bid-btn">
            <i className="fa-solid fa-minus"></i>
        </button>
    );
}

export default BidMinus;