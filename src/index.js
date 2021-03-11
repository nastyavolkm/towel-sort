
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0){
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

    return matrix.reduce(function(a, b) {
        return a.concat(b);
      });
    
}

