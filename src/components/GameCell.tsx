interface GameCellProps {
    value: number;
    enabled: boolean;
    toggle: () => void;
}

export default function GameCell({ value, enabled, toggle }: GameCellProps) {
    return (
        <button className={`px-3 py-1 rounded-lg shadow-md shadow-black outline-1 outline-black ${enabled ? "bg-slate-300 text-black" : "bg-slate-700 text-white"}`} onClick={toggle}>{value}</button>
    );
}
