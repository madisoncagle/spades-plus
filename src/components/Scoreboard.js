import AddPlayerBtn from "./AddPlayerBtn";
import PlayerCard from "./PlayerCard";

function Scoreboard() {
    return (
        <div className="flex-center flex-wrap gap-2">
            {/* put player cards here */}
            <PlayerCard />
            <AddPlayerBtn />
        </div>
    );
}

export default Scoreboard;