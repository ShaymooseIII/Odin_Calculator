//Operation Functions//
//add Function
function add(num1,num2){
    return num1 + num2;
}
//subtract Function
function subtract(num1,num2){
    return num1 - num2;
}
//multiply Function 
function multiply(num1,num2){
    return num1 * num2;
}
//divide Function
function divide(num1,num2){
    return num1 / num2;
}
//Declaration of variables
let firstNum = 0;
let secondNum = 0;
let operator = '';
//operate Function
function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case 'x':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
    }

}

console.log(operate('+',1,3))