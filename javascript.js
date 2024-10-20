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
let firstNum = false;
let secondNum = false;
let answer = false;
let operator = false;
const operators = ['+', "-", "/", "x"]
//operate Function
function operate(operator, num1 = 0, num2 = 0){
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case 'x':
            return multiply(num1,num2);
        case '/':
            if(num2 === 0){
                display.textContent = "no /";
                return 0;
            }
            return divide(num1,num2);
    }

}
//function to handle all variable changes involved with operate
function solve(){
    answer = (operate(operator,firstNum,secondNum));
    firstNum = answer;
    secondNum = false;
    updateDisplay(answer);

}
//update display function 
function updateDisplay(num){
    display.textContent += num;
    if(display.textContent.length>=18){
        display.textContent = "number to big"
    }
    
}
//clear display function
function clearDisplay(){
    display.textContent = '';
}
//function to reset all variables
function reset(){
    firstNum = false;
    secondNum = false;
    answer = false;
    operator = false;

}
//document queries 
const body = document.querySelector(".body");
const display = document.querySelector(".display");
const clear = document.querySelector("#clear");
//event listener for the calculator body
body.addEventListener("click",(e)=>{
    //Declare variable
    option = '';
    if(e.target.tagName === 'BUTTON'){
        //take in the button inputs into variables
        option = e.target.textContent;
        console.log(option);
    }
    //clear the display to string operations together
    if(answer && operator){
        clearDisplay();
        answer = false;
    }
    //checking if the option button clicked is a operator
    if(operators.includes(option)){
        if(operator){
            console.log(lastOption);
            if(operators.includes(lastOption)){
                clearDisplay();
            }
            console.log(`displayValue:${displayValue}`);
        }
        //storing the displayValue into separate variables
        if(!firstNum){
            firstNum = displayValue;
        }else{
            secondNum = displayValue;
        }
        clearDisplay();
        if(firstNum && secondNum){
            solve();
        }
        //storing the operator
        operator = option;
        // clearDisplay();
        console.log(firstNum, secondNum)
        console.log("in operator");
    }else if(option === '='){
        //storing the displayValue into separate variables
        if(!firstNum){
            firstNum = displayValue;
        }else{
            secondNum = displayValue;
        }
        clearDisplay();
        solve();
        reset();
    }
    else if(option === 'clear'){
        console.log("will clear");
        clearDisplay();
    }else if(typeof Number(option) === 'number'){
        //display the inputs
        updateDisplay(option);
    }
    //storing the display value
    displayValue = +display.textContent;
    lastOption = option;
})

clear.addEventListener('dblclick', ()=>{
    console.log("reset");
    reset();
})