function getIndexToIns(arr, num) {
   let array = arr.concat(num).sort((a,b)=> a-b)
    return array.indexOf(num); 
}

getIndexToIns([40, 60], 50);
