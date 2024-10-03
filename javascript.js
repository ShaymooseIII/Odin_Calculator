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
const operators = ['+', "-", "/", "x"]
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
//update display function 
function updateDisplay(num){
    display.textContent += num;
}
//clear display function
function clearDisplay(){
    display.textContent = '';
}
//document queries 
const body = document.querySelector(".body");
const display = document.querySelector(".display");

//event listener for the calculator body
body.addEventListener("click",(e)=>{
    //Declare variable
    option = '';
    if(e.target.tagName === 'BUTTON'){
        //take in the button inputs into variables
        option = e.target.textContent;
        console.log(option);
    }
    if(operators.includes(option)){
        console.log("in operator");
        return;
    }else if(option === '='){
        console.log("operate");
        return;
    }
    else if(option === 'clear'){
        console.log("will clear");
        clearDisplay();
        return;
    }else if(typeof Number(option) === 'number'){
        console.log(option)
        console.log(Number(option))
        console.log("number");
        //display the inputs
        updateDisplay(option);
    }
})
    //pass the inputs into operate 
    //display operate output 