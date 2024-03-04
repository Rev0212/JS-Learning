let number1,number2,randomsymbol,answer;
function restart()
{
number1 = Math.ceil(Math.random()*100);
number2 = Math.ceil(Math.random()*10);
const symbols = ['+', '-', '*', '/'];
randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
let N1=document.getElementById("num1");
let N2=document.getElementById("num2");
let O =document.getElementById("operation")
if (number1 >= number2) {
    N1.value = number1;
    N2.value = number2;
} else {
    N1.value = number2;
    N2.value = number1;
}
O.textContent=randomSymbol;

document.getElementById("ans").value = "";
document.getElementById("displaymessage").textContent = "";

if(randomSymbol==="+")
{
     answer = number1+number2;
}
else if(randomSymbol==="-")
{
     answer = number1-number2;
}
else if(randomSymbol==="*")
{
    answer = number1*number2;
}
else{
     answer = number1/number2;
     answer=Math.floor(answer);
}
}
function check()
{
let userAnswer = parseFloat(document.getElementById("ans").value,10);
let dispalyMessage=document.getElementById("displaymessage");
if(userAnswer===answer)
{
    dispalyMessage.textContent="Correct";
    dispalyMessage.style.color="green";
}
else{
    dispalyMessage.textContent="Incorrect Correct Answer is "+answer;
    dispalyMessage.style.color="red";
}
}
restart();