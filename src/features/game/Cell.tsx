import type { Cell as CellType } from "./types";

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
        w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16
        flex items-center justify-center
        text-xl md:text-2xl font-bold
        rounded-lg transition-all duration-200
        ${
          cell.isOn
            ? "bg-primary-800 text-white shadow-inner scale-95"
            : "bg-white text-gray-800 shadow-md hover:bg-gray-50 active:bg-gray-100"
        }
        ${disabled ? "cursor-default opacity-90" : "cursor-pointer active:scale-90"}
      `}
      aria-label={`Toggle value ${cell.value}`}
      aria-pressed={cell.isOn}
    >
      {cell.value}
    </button>
  );
};
