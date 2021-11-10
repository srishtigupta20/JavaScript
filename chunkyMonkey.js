function chunkArrayInGroups(arr, size) {
  let newarr =[];
  for(let a =0;a<arr.length; a+=size){
    newarr.push(arr.slice(a,a+size));
  }
  console.log(newarr);
  return newarr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
