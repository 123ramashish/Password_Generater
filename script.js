const numberset = "0123456789";
const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const symbolset = "!@#$%^&*-+/";

// const button = document.getElementsByClassName("button");
// // var wordlength=document.getElementById("wordlength");
const uppercase=document.getElementById("uppertext");
const lowercase=document.getElementById("lowertext");
const number=document.getElementById("numbertype");
const symbol=document.getElementById("symboltype");


 function myinput(){
  var resultset1,resultset2,resultset3,resultset4,finalresult="";
  var inputlength=document.getElementById("inputlength").value;
if(inputlength == "" || inputlength>10){
  alert("Please fill password length and value should between 1 to 10");
}
if(uppercase.checked == true){
    for(var i=0; i<inputlength; i++){
    var result1 =upperset.charAt(Math.floor( Math.random()*upperset.length));
    resultset1=resultset1+result1;
    }
  }

  if(lowercase.checked == true){
      for(var i=0; i<inputlength; i++){
      var result2 =lowerset.charAt(Math.floor( Math.random()*lowerset.length));
      resultset2=resultset2+result2;
      }
    }

    if(number.checked == true){
        for(var i=0; i<inputlength; i++){
        var result3 =numberset.charAt(Math.floor( Math.random()*numberset.length));
        resultset3=resultset3+result3;
        }
      }

      if(symbol.checked == true){
          for(var i=0; i<inputlength; i++){
          var result4 =symbolset.charAt(Math.floor( Math.random()*symbolset.length));
          resultset4=resultset4+result4;
          }
        }
       
        var resultset = result1+result2+result3+result4;
          for(var i=0; i<inputlength; i++){
          var result = resultset.charAt(Math.floor( Math.random()*resultset.length));
          finalresult = finalresult+result;
          }
         
          document.getElementById("show-captcah").innerHTML = finalresult;
}



const pass = document.getElementById("pass-fill");
function mysubmit(){
if(pass.value == finalresult){
  alert("Thanks for submit!")
  pass.value = ""
}
else{
  alert("Fill right password");
  pass.value = ""
}
}