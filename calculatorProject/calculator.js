let result;
let num1 =  Number(prompt("Enter first operand: "));
let num2 = Number(prompt("Enter second operand: "));
let operator = prompt("choose an operator: +, -, *, /,%");
switch(operator){
    case '+': 
    result = num1+num2;
    alert("Your result is: "+ result);
    break;
    case '-': 
    result = num1-num2;
    alert("Your result is: "+ result);
    break;
    
    case '*': 
    result = num1*num2;
    alert("Your result is: "+ result);
    break;
    
    case '/': 
    result = num1/num2;
    alert("Your result is: "+ result);
    break;
    
    case '%': 
    result = num1%num2;
    alert("Your result is: "+ result);
    break;
    default:
        alert("You choose an invalid operator");
    

}
