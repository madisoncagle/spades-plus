function PastBid({ bid, status }) {
    return (
        <p className={`past-bid ${status}`}>{bid}</p>
    );
}

export default PastBid;