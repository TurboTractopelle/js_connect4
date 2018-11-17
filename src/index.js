function whoIsWinner(piecesPositionList) {
  // A, B, C...
  let conv = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
  let winner = "Draw";
  let testR = Array(5).join("R");
  let testY = Array(5).join("Y");

  // check 4 in a row
  const check4 = row => {
    if (row.join("").includes(testR)) {
      winner = "Red";
    } else if (row.join("").includes(testY)) {
      winner = "Yellow";
    }
  };

  // Board in Column
  const BoardInColumn = () => {
    let boardColumn = [[], [], [], [], [], [], []];
    piecesPositionList.map(item => {
      let player = item[2] === "R" ? "R" : "Y";
      boardColumn[conv[item[0]]].push(player);
    });
    return boardColumn;
  };

  // Column tp Lign
  const ColumnToLign = arrColumn => {
    let boardLign = [[], [], [], [], [], []];
    arrColumn.map((column, i) => {
      column.map((valeur, j) => {
        boardLign[j].push(valeur);
      });
    });
    return boardLign;
  };

  // Diag to row
  const ColumnToDiagRight = arr => {
    let diag = [[], [], [], [], [], [], [], [], [], [], []];
    boardColumn.map((column, i) => {
      column.map((valeur, j) => {
        diag[i + j][j] = valeur;
      });
    });
    return diag;
  };

  const ColumnToDiagLeft = arr => {
    let diag = [[], [], [], [], [], [], [], [], [], [], []];
    boardColumn.map((column, i) => {
      column.map((valeur, j) => {
        diag[i + 5 - j][j] = valeur;
      });
    });
    return diag;
  };

  // COLUMN
  let boardColumn = BoardInColumn();
  boardColumn.map(column => check4(column));

  // LIGN
  let boardLign = ColumnToLign(boardColumn);
  boardLign.map(column => check4(column));

  // DIAG RIGHT
  ColumnToDiagRight(boardLign).map(column => check4(column));

  // DIAG LEFT
  ColumnToDiagLeft(boardLign).map(column => check4(column));

  return winner;
}

console.log(
  whoIsWinner([
    "A_Y",
    "B_R",
    "B_Y",
    "C_R",
    "C_R",
    "C_Y",
    "D_R",
    "D_R",
    "D_R",
    "D_Y"
  ])
);
