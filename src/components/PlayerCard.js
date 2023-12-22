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
                <PastBid status={bid} />
            </li>
        )
    });


    // METHODS
    function add() {
        setBid(bid + 1);
    }

    function minus() {
        if (bid > 0) {
            setBid(bid - 1);
        }
    }

    function gotIt() {
        setScore(score + 10 + bid);
        setPastBids(pastBids.concat("right"));
        setBid(0);
    }

    function nope() {
        setPastBids(pastBids.concat("wrong"));
        setBid(0);
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
            </div>

            <div className="score-row">
                <div className="bid">
                    <BidPlus onPlus={add} />

                    <p className="bid-num">
                        {bid}
                    </p>

                    <BidMinus onMinus={minus} />
                </div>

                <p className="score number">
                    {score}
                </p>

                <div className="yes-no">
                    <YesBtn onYes={gotIt} />

                    <NoBtn onNo={nope} />
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;