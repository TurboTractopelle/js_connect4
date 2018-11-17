function whoIsWinner(piecesPositionList) {
  
  // A, B, C...
  let board=[[],[],[],[],[],[],[]]
  let conv = {A:0, B:1, C: 2, D:3, E:4, F:5, G:6}

  // test column
  piecesPositionList.map((item)=>{
    let player = item[2] === "R" ? "R" : "Y"
    board[conv[item[0]]].push(player)    
  })

  // check 4 in a row
  const check4 = arr => {
    let testR = Array(4).join("R")
    console.log(arr.join("").includes(testR))
  }



}


console.log(whoIsWinner([
  "A_Y",
  "A_Y",
  "A_R",
  "A_R",
  "A_R",
  "A_R"

  ]))