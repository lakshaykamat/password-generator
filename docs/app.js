//DOM Elements
const passwordLengthEl = document.getElementById('length')
const symbolEl = document.getElementById('symbol')
const numberEl = document.getElementById('number')
const lowerCaseEl = document.getElementById('lowercase')
const upperCaseEl = document.getElementById('uppercase')
const passwordTxtEL = document.getElementById('password')
const generateButton = document.getElementById('generatebutton')

const randomFunc = {
    lower: generateLowercase,
    upper: generateUppercase,
    number: generateNumber,
    symbol: generateSymbol
}
//Generator functions
function generateLowercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}
function generateUppercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}
function generateNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
}
function generateSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}