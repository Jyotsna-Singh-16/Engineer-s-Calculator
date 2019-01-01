// Simple Calculator to perfrom Arithmetic Operations (+,-,x,/):

var initial ="";
var add= 0;
var sub=0;
var mul=1;
var div=1;
var op="";
  
function myFunction(count) {
    document.getElementById("myNumber").value ="";
    document.getElementById("myNumber").value = initial.concat(count) ;
    initial = initial.concat(count);
}
 
function operationAdd(){
   var first = document.getElementById("myNumber").value;
   document.getElementById("myNumber").value ="+";
   initial="";
   resultadd(first);
   op="+";
}

function operationSub(){
    var first = document.getElementById("myNumber").value;
    document.getElementById("myNumber").value ="-";
    initial="";
    resultsub(first,0);
    op="-";
 }

 function operationMul(){
    var first = document.getElementById("myNumber").value;
    document.getElementById("myNumber").value ="X";
    initial="";
    resultmul(first);
    op="X";
 }

 function operationDiv(){
    var first = document.getElementById("myNumber").value;
    document.getElementById("myNumber").value ="/";
    initial="";
    resultdiv(first);
    op="/";
 }


function equalFunction(){
    var second = document.getElementById("myNumber").value;
    document.getElementById("myNumber").value ="";
    initial="";
    if(op === "+"){
    resultadd(second);
    resultAddition();
    }
    if(op == "-"){
    resultsub(0, second );
    resultSubtraction();
    }
    if(op == "X"){
    resultmul(second);
    resultMultiplication();
    }
    if(op == "/"){
    resultdiv(second);
    resultDivisin();
    }
    
}

function resultadd(no){
    add = (add + Number(no));
} 

function resultAddition(){
    document.getElementById("myNumber").value = add;
}


function resultmul(no){
mul = (mul * Number(no));
}

function resultMultiplication(){
    document.getElementById("myNumber").value = mul;
}


function resultsub(no1, no2){
sub = (Number(no1) - Number(no2)) + sub;
}

function resultSubtraction(){
document.getElementById("myNumber").value = sub;
}

function resultdiv(no){
div = (Number(no)/div);
ansDiv = 1/div;
}
    
function resultDivisin(){
document.getElementById("myNumber").value = ansDiv;
}

function clearFunction(){
    document.getElementById("myNumber").value="";
    initial="";
}





  

  