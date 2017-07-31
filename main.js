const gameBoard = [
[0 , 0 , 0],
[0 , 0 , 0],
[0 , 0 , 0]
]

const makeMove = (team) => {
  console.log(gameBoard)
  var move = prompt('Make your move in the form of #, #');

    for (var i = 0; i < gameBoard.length; i++) {
      var row = gameBoard[i];
      for (var j = 0; j < row.length; j++) {
        var column = row[j];
        if (i, j == move && gameBoard[i][j] === 0) {
          gameBoard[i][j] === '0';
        }
      }
    }
   console.log(gameBoard) 
}

makeMove()
