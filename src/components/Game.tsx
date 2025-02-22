import GameCell from "@/components/GameCell";
import { useState } from "react";
import { NavLink, useParams } from "react-router";
import { Board } from "./GameBoard";

export default function Game() {
    const { size } = useParams();
    const [state, setState] = useState({ board: new Board(size ? parseInt(size) : -1) });
    const board = state.board;

    function toggleCell(row: number, column: number) {
        board.toggle(row, column);
        setState({ board: board });
    }

    const boardTable = [];
    const posColor = "text-green-500";
    const negColor = "text-red-500";
    const zeroColor = "text-gray-500";
    for (let row = 0; row < board.getSize(); row++) {
        const rowEle = [];
        for (let column = 0; column < board.getSize(); column++) {
            const key = row.toString() + "," + column.toString();
            const cell = board.getCell(row, column);
            rowEle.push(<td key={key} className="p-1"><GameCell enabled={cell.isEnabled()} value={cell.internalValue()} toggle={() => { toggleCell(row, column); }} /></td>);
        }
        let rdColor = zeroColor;
        if (board.rowDelta(row) > 0) {
            rdColor = posColor;
        } else if (board.rowDelta(row) < 0) {
            rdColor = negColor;
        }
        boardTable.push(<tr key={row}>{rowEle}<td className={`pl-1 text-right font-bold ${rdColor}`}>{board.rowDelta(row)}</td></tr>);
    }
    const cDeltas = [];
    for (let column = 0; column < board.getSize(); column++) {
        let cdColor = zeroColor;
        if (board.colDelta(column) > 0) {
            cdColor = posColor;
        } else if (board.colDelta(column) < 0) {
            cdColor = negColor;
        }
        cDeltas.push(<td key={column} className={`text-center font-bold ${cdColor}`}>{board.colDelta(column)}</td>);
    }
    cDeltas.push(<td key="empty"></td>); // Add an empty cell to make the table square.
    boardTable.push(<tr key="cdeltas">{cDeltas}</tr>);

    return (
        <div>
            <h1 className="mx-auto w-max-sm text-center text-xl font-bold">Digit Fidget</h1>
            <table className="mx-auto max-w-full">
                <tbody>
                    {boardTable}
                </tbody>
            </table>
            <div className="mx-auto w-min">
                <NavLink to="../">Quit</NavLink>
            </div>
        </div >
    )
}
