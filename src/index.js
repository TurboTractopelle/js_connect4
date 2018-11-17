function whoIsWinner(piecesPositionList) {
  // A, B, C...
  let conv = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
  let winner = "Draw";
  let testR = Array(5).join("R");
  let testY = Array(5).join("Y");
  let arr = [];

  // check 4 in a row
  const check4 = row => {
    if (row.join("").includes(testR)) {
      winner = "Red";
    } else if (row.join("").includes(testY)) {
      winner = "Yellow";
    }
  };

  // Board in Column
  const BoardInColumn = arr => {
    let boardColumn = [[], [], [], [], [], [], []];
    arr.map(item => {
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
    let diag = [[], [], [], [], [], [], [], [], [], [], [], [], []];
    arr.map((column, i) => {
      column.map((valeur, j) => {
        diag[i + j][j] = valeur;
      });
    });
    return diag;
  };

  const ColumnToDiagLeft = arr => {
    let diag = [[], [], [], [], [], [], [], [], [], [], [], [], [], []];
    arr.map((column, i) => {
      column.map((valeur, j) => {
        diag[i + 6 - j][j] = valeur;
      });
    });
    return diag;
  };

  for (let i = 0; i < piecesPositionList.length; i++) {
    arr.push(piecesPositionList[i]);
    let boardColumn = BoardInColumn(arr);
    boardColumn.map(column => check4(column));
    let boardLign = ColumnToLign(boardColumn);
    boardLign.map(column => check4(column));
    ColumnToDiagRight(boardColumn).map(column => check4(column));
    ColumnToDiagLeft(boardColumn).map(column => check4(column));
    console.log(i);
    if (winner !== "Draw") {
      break;
    }
  }

  return winner;
}

console.log(
  whoIsWinner([
    "A_Yellow",
    "B_Red",
    "B_Yellow",
    "C_Red",
    "G_Yellow",
    "C_Red",
    "C_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "F_Yellow",
    "E_Red",
    "D_Yellow"
  ])
);
