
function strRevers(str){
  let reverstr = "";

  for(let i = str.length -1; i>=0;i--){
       reverstr+= str[i]
  }
   return reverstr;
}

let res = strRevers("sanjeev")

console.log(res)