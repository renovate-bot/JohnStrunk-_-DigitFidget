import { useState } from "react";
import { NavLink, useParams } from "react-router";
import "./Game.css";
import { Board } from "./GameBoard";
import GameCell from "./GameCell";

export default function Game() {
    const { size } = useParams();
    const [state, setState] = useState({ board: new Board(size ? parseInt(size) : -1) });
    const board = state.board;

    function toggleCell(row: number, column: number) {
        board.toggle(row, column);
        setState({ board: board });
    }

    const boardTable = [];
    for (let row = 0; row < board.getSize(); row++) {
        const rowEle = [];
        for (let column = 0; column < board.getSize(); column++) {
            const key = row.toString() + "," + column.toString();
            const cell = board.getCell(row, column);
            rowEle.push(<td key={key}><GameCell enabled={cell.isEnabled()} value={cell.internalValue()} toggle={() => { toggleCell(row, column); }} /></td>);
        }
        boardTable.push(<tr key={row}>{rowEle}<td className="rowdelta">{board.rowDelta(row)}</td></tr>);
    }
    const cDeltas = [];
    for (let column = 0; column < board.getSize(); column++) {
        cDeltas.push(<td key={column} className="coldelta">{board.colDelta(column)}</td>);
    }
    cDeltas.push(<td key="empty"></td>); // Add an empty cell to make the table square.
    boardTable.push(<tr key="cdeltas">{cDeltas}</tr>);

    return (
        <div>
            <h1>Digit Fidget</h1>
            <table>
                <tbody>
                    {boardTable}
                </tbody>
            </table>
            <NavLink to="../">Quit</NavLink>
        </div>
    )
}
