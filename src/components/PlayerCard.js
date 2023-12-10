function PlayerCard() {
    return (
        <div className="card">
            <i className="fa-solid fa-xmark close"></i>

            <div className="name-row">
                {/* prop */}
                <h3 className="name">Player</h3>

                <div className="bid-history flex-wrap gap-half">
                    {/* list? */}
                    <div className="past-bid right"></div>
                    <div className="past-bid wrong"></div>
                    <div className="past-bid right"></div>
                    <div className="past-bid right"></div>
                    <div className="past-bid right"></div>
                    <div className="past-bid wrong"></div>
                    <div className="past-bid right"></div>
                    <div className="past-bid wrong"></div>
                </div>
            </div>

            <div className="score-row">
                <div className="bid">
                    {/* function */}
                    <button className="bid-btn bdr-round-1 bdr-3 bdr-solid bdr-white bg-black txt-white">
                        <i className="fa-solid fa-plus"></i>
                    </button>

                    {/* prop */}
                    <p className="bid-num">
                        88
                    </p>

                    {/* function */}
                    <button className="bid-btn bdr-round-1 bdr-3 bdr-solid bdr-white bg-black txt-white">
                        <i className="fa-solid fa-minus"></i>
                    </button>
                </div>

                {/* prop */}
                <p className="score number">
                    888
                </p>

                <div className="yes-no">
                    {/* function */}
                    <button className="yes-no-btn plus bdr-4 bdr-solid bdr-green bg-black txt-green">
                        <i className="fa-solid fa-check"></i>
                    </button>

                    {/* function */}
                    <button className="yes-no-btn minus bdr-4 bdr-solid bdr-red bg-black txt-red">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;