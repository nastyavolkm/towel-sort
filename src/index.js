
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined){
    return [];
  }  
    for(let i=0; i<matrix.length; i++){
        if(i%2 ==0){
            matrix[i].sort(function(a, b){
                return a-b;
            })
        }else {
            matrix[i].sort(function(a, b){
                return b-a;
            })
        }
    
    }
    matrix = [].concat.apply([], matrix);
    return matrix;
}

