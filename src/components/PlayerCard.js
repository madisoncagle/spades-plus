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
                <PastBid bid={bid.bid} status={bid.result} />
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

        // broken
        // var undoBtn = document.getElementById("undo-btn");
        // undoBtn.style.visibility = "visible";
    }

    function zeroScore() {
        setPastBids(pastBids.concat({ bid: bid, result: "wrong" }));
        setBid(0);

        // broken
        // var undoBtn = document.getElementById("undo-btn");
        // undoBtn.style.visibility = "visible";
    }

    // broken
    function undo() {
        if (pastBids.length > 0) {
            var lastBid = pastBids[pastBids.length - 1];
            setPastBids(pastBids.slice(0, -1));

            if (lastBid.result === "right") {
                setScore(score - 10 - lastBid.bid);
            }

            setBid(lastBid.bid);
        }

        // why is it 1, pls help -- now broken
        // if (pastBids.length === 1) {
        //     var undoBtn = document.getElementsByClassName("undo");
        //     undoBtn.style.visibility = "hidden";
        // }
    }


    // RETURN
    return (
        <div className="card">
            <i className="fa-solid fa-xmark close" onClick={onRemove}></i>

            <div className="card-upper">
                <h3 className="name">{name}</h3>

                <div className="bid-row">
                    <ul className="bid-history">
                        {pastBidList}
                    </ul>

                    <i className="fa-solid fa-undo undo" onClick={undo}></i>
                </div>
            </div>

            <p className="score">
                {score}
            </p>

            <div className="controls">
                <div className="bid">
                    <BidPlus onPlus={add} />
                    <p className="bid-num">{bid}</p>
                    <BidMinus onMinus={subtract} />
                </div>

                <div className="yes-no">
                    <YesBtn onYes={incrementScore} />
                    <NoBtn onNo={zeroScore} />
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;