import { Cell as CellType } from "./types";

interface CellProps {
  cell: CellType;
  onClick: () => void;
  disabled?: boolean;
}

export const Cell = ({ cell, onClick, disabled }: CellProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-12 h-12 md:w-16 md:h-16
        flex items-center justify-center
        text-xl md:text-2xl font-bold
        rounded-lg transition-all duration-200
        ${
          cell.isOn
            ? "bg-blue-600 text-white shadow-inner scale-95"
            : "bg-white text-gray-700 shadow-md hover:bg-gray-50"
        }
        ${disabled ? "cursor-default opacity-90" : "cursor-pointer"}
      `}
      aria-label={`Toggle value ${cell.value}`}
      aria-pressed={cell.isOn}
    >
      {cell.value}
    </button>
  );
};
