
interface GameCellProps {
    value: number;
    toggle: () => void;
}

export default function GameCell({ value, toggle }: GameCellProps) {
    return (
        <button onClick={toggle}>{value}</button>
    );
}
