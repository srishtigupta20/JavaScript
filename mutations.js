function mutation(arr) {
  let arrsplit = arr[1].toLowerCase().split("").every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
  return arrsplit;
     
}

mutation(["hello", "hey"]);
