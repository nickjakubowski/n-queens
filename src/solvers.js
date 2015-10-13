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
  console.log(board);
  console.log(board.rows());

  for(var i = 0; i < board.rows().length; i++){
    board.togglePiece(i, i);
  }
  console.log(board);
  //solution = board;
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
      for (var i = 0; i < board.rows().length; i++) {
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
      //debugger;
         
        if (row >= n) {
          return JSON.parse(JSON.stringify(board.rows()));
        } else {
        for (var i = 0; i < board.rows().length; i++) {
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
      for (var i = 0; i < board.rows().length; i++) {
        board.togglePiece(row, i);
        if (!board.hasAnyColConflicts() && !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts()) { 
        //if(!board.hasAnyQueensConflicts()){  
          getAllTheBoards(board, row+1);
        }
        board.togglePiece(row, i);
      }
     }
   }

   var board = new Board({n:n});
   //var allBoards = getAllTheBoards(board, 0);
   getAllTheBoards(board, 0);
   //console.log(allBoards.length);
   return solutions;
   
   //declare a counter, ctr
   //iterate over every element of allBoards
     //pass each element to checker function
     //if checker returns true, ctr++
   
   //return ctr



  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  //return solutionCount;
};
