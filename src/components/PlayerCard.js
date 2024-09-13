import { useState } from "react";
import BidMinus from "./BidMinus";
import BidPlus from "./BidPlus";
import PastBid from "./PastBid";
import YesBtn from "./YesBtn";
import NoBtn from "./NoBtn";

function PlayerCard({ name, onRemove }) {
    // STATE
    const [bid, setBid] = useState(0);
    const [score, setScore] = useState(0);
    const [pastBids, setPastBids] = useState([]);


    // VARS
    const pastBidList = pastBids.map((bid, i) => {
        return (
            <li key={i}>
                <PastBid status={bid.result} />
            </li>
        )
    });


    // METHODS
    function add() {
        setBid(bid + 1);
    }

    function subtract() {
        if (bid > 0) {
            setBid(bid - 1);
        }
    }

    function incrementScore() {
        setScore(score + 10 + bid);
        setPastBids(pastBids.concat({ bid: bid, result: "right" }));
        setBid(0);
    }

    function zeroScore() {
        setPastBids(pastBids.concat({ bid: bid, result: "wrong" }));
        setBid(0);
    }

    function undo() {
        var lastBid = pastBids[pastBids.length - 1];
        setPastBids(pastBids.slice(0, -1));

        if (lastBid.result === "right") {
            setScore(score - 10 - lastBid.bid);
        }

        setBid(lastBid.bid);
    }


    // RETURN
    return (
        <div className="card">
            <i className="fa-solid fa-xmark close" onClick={onRemove}></i>

            <div className="name-row">
                <h3 className="name">{name}</h3>

                <ul className="bid-history flex-wrap gap-half no-bullets">
                    {pastBidList}
                </ul>

                <i className="fa-solid fa-undo undo" onClick={undo}></i>
            </div>

            <div className="score-row">
                <div className="bid">
                    <BidPlus onPlus={add} />

                    <p className="bid-num">
                        {bid}
                    </p>

                    <BidMinus onMinus={subtract} />
                </div>

                <p className="score number">
                    {score}
                </p>

                <div className="yes-no">
                    <YesBtn onYes={incrementScore} />

                    <NoBtn onNo={zeroScore} />
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;