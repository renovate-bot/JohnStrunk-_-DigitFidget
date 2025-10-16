import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GameBoard from "../components/GameBoard";
import WinDialog from "../components/WinDialog";
import { generateBoard, isWin, toggleCell } from "../game/logic";


export default function GameScreen() {
    const location = useLocation();
    // Get difficulty from query string (?difficulty=4)
    const params = new URLSearchParams(location.search);
    const sizeParam = params.get("difficulty");
    // Default to 4 if not present or invalid
    const size = Math.max(4, Math.min(10, Number(sizeParam) || 4));

    // Game state
    const [gameState, setGameState] = useState(() => generateBoard({ size }));
    const [time, setTime] = useState(0);
    const [won, setWon] = useState(false);

    // Timer effect
    useEffect(() => {
        if (won) return;
        const timer = setInterval(() => { setTime(t => t + 1); }, 1000);
        return () => { clearInterval(timer); };
    }, [won]);

    // Win check effect
    useEffect(() => {
        if (isWin(gameState.deltas)) {
            setWon(true);
        }
    }, [gameState.deltas]);

    // Cell toggle handler
    const handleCellToggle = (row: number, col: number) => {
        if (won) return;
        setGameState(prev => toggleCell(prev, row, col));
    };

    const navigate = useNavigate();
    const goToMenu = () => {
        void navigate("/");
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-ega-black px-2 py-4">
            <div className="w-full max-w-2xl flex flex-row justify-between mb-4">
                <div className="bg-ega-black border-r-2 border-b-2 border-r-ega-cyan border-b-ega-cyan font-body text-ega-cyan px-2 py-1 rounded">Time: {String(time).padStart(2, "0")}</div>
                <div className="bg-ega-black border-r-2 border-b-2 border-r-ega-yellow border-b-ega-yellow font-body text-ega-yellow px-2 py-1 rounded">Moves: {gameState.moves}</div>
            </div>
            <GameBoard board={gameState.board} deltas={gameState.deltas} size={size} onCellToggle={handleCellToggle} />
            {won && (
                <div className="mt-6">
                    <WinDialog moves={gameState.moves} time={time} onOk={goToMenu} />
                </div>
            )}
        </div>
    );
}
