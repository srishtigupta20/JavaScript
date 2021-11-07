function largestOfFour(arr) {
  let results = [];
  for(let i =0; i<arr.length;i++){
     let largestno = arr[i][0];
     for(let j = 1; j<arr[i].length;j++){
           if(arr[i][j]>largestno){
             largestno = arr[i][j];
           }
     }
     results[i] = largestno;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
