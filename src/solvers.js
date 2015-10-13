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
  var result = n;
  var solutionCount;
  
  for (var i = n-1; i >= 1; i--){
    result = result * i;
  }
  console.log(result);
  
  solutionCount = result;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
  window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
   
   GetAllTheBoards(empty board, 0)

  var GetAllTheBoards = function(board, row){
    //declare results array;
    var results = [];
    row = 0;
    //if no more rows (THIS IS THE BASE CASE)
      //add current board to results array
      if (row >= n) {
        results.push(board);
        return results;
      }
  

    //else -- (REDUCE THE PROBLEM AND MAKE RECURSIVE CALLS)
      //for # of columns
        //concat to results array the result of 
        //each call to GetAllTheBoards passing in current board with queen in column dictated by for loop
        //also pass in row+1

    //return results array 
   }

  }



  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};*/
