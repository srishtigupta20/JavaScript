function telephoneCheck(str) {
   const num = str.match(/\d/g);
   if(num.length === 11){
     if(str[0] !== '1'){
       return false;
     }
     str = str.substring(1);
     if(str[0] === ' '){
       str = str.substring(1);
     }
   }else if(num.length !== 10){
     return false;
   }
   if(str[0] == '('){
     if(!/\(\d\d\d\)/.test(str.substring(0,5))){
         return false;
     }
     str = str.substring(5);
     if(str[0] === ' '){
       str = str.substring(1);
     }
   }else{
     if(!/\d\d\d/.test(str.substring(0,3))){
       return false;
     }
     str = str.substring(3);
     if(str[0] === '-' || str[0] === ' '){
          str = str.substring(1);
     }
   }
   if(!/\d\d\d/.test(str.substring(0,3))){
       return false;
     }
     str = str.substring(3);
     if(str[0] === '-' || str[0] === ' '){
          str = str.substring(1);
     }
     if(!/\d\d\d\d/.test(str.substring(0,4))){
       return false;
     }
     str = str.substring(4);
     if(str.length>0){
       return false;
     }
     return true;
}

let result = telephoneCheck("55 55-55-555-5");
console.log(result);
