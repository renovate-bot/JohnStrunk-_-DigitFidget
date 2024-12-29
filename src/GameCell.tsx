
interface GameCellProps {
    value: number;
    enabled: boolean;
    toggle: () => void;
}

export default function GameCell({ value, enabled, toggle }: GameCellProps) {
    return (
        <button className={enabled ? "on" : "off"} onClick={toggle}>{value}</button>
    );
}
