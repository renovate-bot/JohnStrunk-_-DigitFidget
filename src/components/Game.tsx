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
    const posColor = "text-green-700";
    const negColor = "text-red-700";
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
    cDeltas.push(<td key="empty" className="w-[2rem]"></td>); // Add an empty cell to make the table square.
    boardTable.push(<tr key="cdeltas">{cDeltas}</tr>);

    return (
        <div className="flex flex-col items-center p-5">
            <h1 className="text-center text-2xl font-bold">Digit Fidget</h1>
            <div className="py-3">
                <table className="mx-auto w-min">
                    <tbody>
                        {boardTable}
                    </tbody>
                </table>
            </div>
            <p>Toggle the cells to zero-out the rows and columns.</p>
            <div className="mx-auto w-min">
                <NavLink className="btn" to="../">Quit</NavLink>
            </div>
        </div >
    )
}
