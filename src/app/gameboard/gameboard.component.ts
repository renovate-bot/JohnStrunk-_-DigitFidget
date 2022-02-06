import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  board: number[][] = []
  active: boolean[][] = []
  colTarget: number[] = []
  rowTarget: number[] = []
  size: number = 0

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initBoard()
  }

  initBoard() {
    this.size = Number(this.route.snapshot.paramMap.get('size'))

    this.colTarget = Array(this.size).fill(0)
    this.rowTarget = Array(this.size).fill(0)
    for (let r = 0; r < this.size; r++) {
      let row: number[] = []
      let activeRow: boolean[] = []
      for (let c = 0; c < this.size; c++) {
        let cellValue = Math.floor(Math.random() * 9) + 1
        row.push(cellValue)
        let activeValue = false
        if (Math.random() > 0.5) {
          this.colTarget[c] -= cellValue
          this.rowTarget[r] -= cellValue
        }
        activeRow.push(activeValue)
      }
      this.board.push(row)
      this.active.push(activeRow)
    }
  }

  // Toggle a cell on the board
  toggle(row: number, column: number) {
    const value = this.board[row][column]
    if (this.active[row][column]) {
      this.colTarget[column] -= value
      this.rowTarget[row] -= value
    } else {
      this.colTarget[column] += value
      this.rowTarget[row] += value
    }
    this.active[row][column] = !this.active[row][column]
  }
}
