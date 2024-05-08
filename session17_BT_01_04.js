function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
document.write(result)
result = addNumbers();
document.write(`<br> ${result}`)