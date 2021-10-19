function check(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    if(num1 > num2) {
        document.getElementById("result").innerHTML = "First Number is greater than the second number";
    }
    else if(num1 == num2 || num2 == num1) {
        document.getElementById("result").innerHTML = "Both the numbers are equal";
    }
    else {
        document.getElementById("result").innerHTML = "Second number is greater than the first number";
    }
}

function checkNum() {
    firstNum = parseInt(document.getElementById("firstNum").value);
    secondNum = parseInt(document.getElementById("secondNum").value);
    check(firstNum, secondNum);
}