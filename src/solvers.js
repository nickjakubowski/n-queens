/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var board = new Board({n:n})


  for(var i = 0; i < n; i++){
    board.togglePiece(i, i);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //var result = n;
  var solutionCount = 0;
  
  var getAllTheBoards = function(board, row) {

    if (row >= n) {
      solutionCount++;
      return;
    } else {
      for (var i = 0; i < n; i++) {
        board.togglePiece(row, i);
        if (!board.hasAnyColConflicts()) {
          getAllTheBoards(board, row + 1);
        }
        board.togglePiece(row, i);
      }
      return;
    }
  };
    
    var board = new Board({n:n});
    getAllTheBoards(board, 0);
    return solutionCount;
};
// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
  window.findNQueensSolution = function(n) {

    var getOneBoard = function(board, row){
   
      var result;
         
        if (row >= n) {
          return JSON.parse(JSON.stringify(board.rows()));
        } else {
        for (var i = 0; i < n; i++) {
          board.togglePiece(row, i);
          if (!board.hasAnyColConflicts() && !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts()) {
            result = getOneBoard(board, row + 1);
            if(result && _.contains(result[result.length-1], 1)){
              return result;
            }  
          }
          board.togglePiece(row, i);
        }
      }
      return (new Board({n:n})).rows();
   };

  return getOneBoard(new Board({n:n}), 0);
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutions = 0;

  var getAllTheBoards = function(board, row){

      if (row >= n) {
        solutions++;
        return;
      } else {
      for (var i = 0; i < n; i++) {
        board.togglePiece(row, i);
        if (!board.hasAnyColConflicts() && !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts()) { 
          getAllTheBoards(board, row+1);
        }
        board.togglePiece(row, i);
      }
     }
   }

   var board = new Board({n:n});
   getAllTheBoards(board, 0);
   return solutions;
};
