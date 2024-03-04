service_token = ghp_1234asdf

function multiply(num1, num2) {
    return num1*num2;
}

function addition(num1, num2) {
    return num1+num2;
}

//module.exports = multiply;
module.exports = {
    multiply,
    addition
};