import { useState } from "react";
import BidMinus from "./BidMinus";
import BidPlus from "./BidPlus";
import PastBid from "./PastBid";

function PlayerCard({ name, onRemove }) {
    // STATE
    const [bid, setBid] = useState(0);


    // METHODS
    function add() {
        setBid(bid + 1);
    }

    function minus() {
        if (bid > 0) {
            setBid(bid - 1);
        }
    }


    // RETURN
    return (
        <div className="card">
            <i className="fa-solid fa-xmark close" onClick={onRemove}></i>

            <div className="name-row">
                <h3 className="name">{name}</h3>

                <div className="bid-history flex-wrap gap-half">
                    {/* list */}
                    <PastBid status="right" />
                    <PastBid status="wrong" />
                    <PastBid status="right" />
                    <PastBid status="right" />
                    <PastBid status="right" />
                    <PastBid status="wrong" />
                    <PastBid status="right" />
                    <PastBid status="wrong" />
                </div>
            </div>

            <div className="score-row">
                <div className="bid">
                    <BidPlus onPlus={add} />

                    {/* prop */}
                    <p className="bid-num">
                        {bid}
                    </p>

                    <BidMinus onMinus={minus} />
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