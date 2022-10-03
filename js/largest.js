const n1=parseFloat(prompt("Enter number1"));
const n2=parseFloat(prompt("Enter number2"));
const n3=parseFloat(prompt("Enter number3"));
var largest;
if(n1>=n2 && n1>=n3)
{
    largest=n1;
} 
else if(n2>=n3 && n2>=n1)
{
    largest=n2;
}
else{
    largest=n3;
}
console.log(largest);