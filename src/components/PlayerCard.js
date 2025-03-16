function PlayerCard({
    name,
    score,
    bid,
    pastBids,
    onBidPlus,
    onBidMinus,
    onBidGet,
    onBidMiss,
    onUndo,
    onRemovePlayer
}) {
    // VARS
    const pastBidList = pastBids.map((bid, i) => {
        return (
            <li key={i}>
                <p className={`past-bid ${bid.result}`}>{bid.bid}</p>
            </li>
        )
    });


    // RETURN
    return (
        <div className="card">
            <i className="fa-solid fa-xmark close" onClick={onRemovePlayer}></i>

            <div className="card-upper">
                <h3 className="name">{name}</h3>

                <div className="bid-row">
                    <span hidden={pastBids.length === 0}><i className="fa-solid fa-undo undo" onClick={onUndo}></i></span>

                    <ul className="bid-history">
                        {pastBidList}
                    </ul>
                </div>
            </div>

            <p className="score">
                {score}
            </p>

            <div className="controls">
                <div className="bid">
                    <button onClick={onBidPlus} className="bid-btn plus">
                    </button>

                    <p className="bid-num">{bid}</p>

                    <button onClick={onBidMinus} className="bid-btn minus">
                    </button>
                </div>

                <div className="yes-no">
                    <button onClick={onBidGet} className="yes-no-btn yes">
                        Got it!
                    </button>

                    <button onClick={onBidMiss} className="yes-no-btn no">
                        Got set.
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;