function sumFibs(num) {
  let previousNo=0;
  let currNo = 1;
  let result = 0;
  while(currNo <=num){
    if(currNo%2 !==0){
      result += currNo;
    }
    currNo += previousNo;
    previousNo = currNo - previousNo;
  }
  return result;
}

sumFibs(4);
