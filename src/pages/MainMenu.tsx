import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function MainMenu() {
    const navigate = useNavigate();
    const difficulties = [
        { label: "Easy", size: 4 },
        { label: "Medium", size: 6 },
        { label: "Hard", size: 8 },
        { label: "Extreme", size: 10 },
    ];
    const handleStart = (size: number) => {
        void navigate(`/game?difficulty=${String(size)}`);
    };
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-ega-black">
            <div className="w-full max-w-xs flex flex-col gap-6">
                <h1 className="font-display text-3xl text-center mb-8 text-ega-yellow">Digit Fidget</h1>
                {difficulties.map(d => (
                    <Button
                        key={d.size}
                        variant="primary"
                        className="w-full"
                        onClick={() => { handleStart(d.size); }}
                    >
                        {d.label}
                    </Button>
                ))}
            </div>
        </div>
    );
}
