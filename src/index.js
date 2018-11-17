function whoIsWinner(piecesPositionList) {
  
  // A, B, C...
  let conv = {A:0, B:1, C: 2, D:3, E:4, F:5, G:6}
  let winner = ""
  let testR = Array(4).join("R")
  let testY = Array(4).join("Y")

  // check 4 in a row
  const check4 = row => {
    if( row.join("").includes(testR) ){
      winner = "Red"
    } else if (row.join("").includes(testY) ){
      winner = "Yellow"
    }
  }

  // Board in Column
  const BoardInColumn = () => {
    let boardColumn = [[], [], [], [], [], [], []]
    piecesPositionList.map((item) => {
      let player = item[2] === "R" ? "R" : "Y"
      boardColumn[conv[item[0]]].push(player)
    })
    return boardColumn
  }


  // Column tp Lign
  const ColumnToLign = (arrColumn) => {
    let boardLign = [[], [], [], [], [], []]
    arrColumn.map((column, i) => {
      column.map((valeur, j) => {
        boardLign[j].push(valeur)
      })
    })
    return boardLign
  }

  // COLUMN
  let boardColumn = BoardInColumn()
  boardColumn.map((column)=> check4(column))

  // LIGN
  ColumnToLign(boardColumn).map((column) => check4(column))

  // DIAG RIGHT
  
  const ColumnToDiag = (arr) =>{
    let diag = [[], [], [], [], [], [], [], [], [], [], []]
    boardColumn.map((column,i)=>{
      console.log(column)
    })
  }
  
  ColumnToDiag(boardColumn)
 

}


console.log(whoIsWinner([
  "A_Y",
  "B_Y",
  "C_R",
  "D_R",
  "E_R",
  "F_R"

  ]))