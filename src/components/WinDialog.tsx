import Button from "./Button";

export interface WinDialogProps {
    moves: number;
    time: number;
    onOk: () => void;
}

export default function WinDialog({ moves, time, onOk }: WinDialogProps) {
    // Format time as mm:ss
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const timeStr = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return (
        <div className="max-w-xs mx-auto border-4 border-ega-light-green bg-ega-blue rounded-lg shadow-lg p-4 flex flex-col items-center">
            <div className="font-display text-ega-light-green text-xl mb-2">You Win!</div>
            <div className="flex flex-row gap-4 font-body text-ega-white text-sm mb-4">
                <span>Moves: <span className="text-ega-yellow font-bold">{moves}</span></span>
                <span>Time: <span className="text-ega-yellow font-bold">{timeStr}</span></span>
            </div>
            <Button variant="primary" onClick={onOk}>OK</Button>
        </div>
    );
}
