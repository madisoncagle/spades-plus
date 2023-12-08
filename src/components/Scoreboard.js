import AddPlayerBtn from "./AddPlayerBtn";
import PlayerCard from "./PlayerCard";

function Scoreboard() {
    return (
        <div className="flex-center flex-wrap">
            {/* put player cards here */}
            <PlayerCard />
            <AddPlayerBtn />
        </div>
    );
}

export default Scoreboard;