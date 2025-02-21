
interface GameCellProps {
    value: number;
    enabled: boolean;
    toggle: () => void;
}

export default function GameCell({ value, enabled, toggle }: GameCellProps) {
    return (
        <button className={`px-2 py-1 rounded-lg shadow-md shadow-black outline-1 outline-black ${enabled ? "bg-sky-300 text-black" : "bg-sky-600 text-white"}`} onClick={toggle}>{value}</button>
    );
}
