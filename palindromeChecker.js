function palindrome(str) {
let str_array = str.replace(/\W+|_/g,"").toLowerCase();
  let output = str_array.split("").reverse().join("");
    console.log(str_array,output);
  if(str_array == output){
     return true;
  }else {
    return false;
  }

}

let result = palindrome("A man, a plan, a canal. Panama");
console.log(result);
