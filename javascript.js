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
}
//clear display function
function clearDisplay(){
    display.textContent = '';
}
function reset(){
    firstNum = false;
    secondNum = false;
    answer = false;
    operator = false;

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
    if(answer && operator){
        clearDisplay();
        answer = false;
    }
    if(operators.includes(option)){
        if(operator){
            console.log(lastOption);
            if(operators.includes(lastOption)){
                clearDisplay();
            }
            console.log(`displayValue:${displayValue}`);
            solve();
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
        console.log("operate");
    }
    else if(option === 'clear'){
        console.log("will clear");
        clearDisplay();
        reset();
    }else if(typeof Number(option) === 'number'){
        //display the inputs
        updateDisplay(option);
    }
    //storing the display value
    displayValue = +display.textContent;
    console.log(typeof displayValue);
    lastOption = option;
})
    //pass the inputs into operate 
    //display operate output 