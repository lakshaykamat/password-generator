//DOM Elements
const passwordLengthEl = document.getElementById('length')
const symbolEl = document.getElementById('symbol')
const numberEl = document.getElementById('number')
const lowerCaseEl = document.getElementById('lowercase')
const upperCaseEl = document.getElementById('uppercase')
const passwordTxtEL = document.getElementById('password')
const generateButton = document.getElementById('generatebutton')

//Objects of functions and his keys
const randomFunc = {
    lower: generateLowercase,
    upper: generateUppercase,
    number: generateNumber,
    symbol: generateSymbol
}

//Copy to clipboard function
document.getElementById('copy').addEventListener('click',function(){
    const textArea = document.createElement('textarea')
    const password = passwordTxtEL.textContent

    if(!password){
        return ''
    }
    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    alert("Copied to Clipboard!")
})

//Adding Event listner to password generated button gives generated password
generateButton.addEventListener('click', function () {
    //grabbing the password length value but is in string we need to convert in a number so i added a plus sign(+) after, you can multiply with one also 
    const length = +passwordLengthEl.value
    const hasLower = lowerCaseEl.checked//checking all values true or not
    const hasUpper = upperCaseEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolEl.checked

    //giving true or false and password length values to a function
    passwordTxtEL.textContent = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})


//function for creating Password
function generatePassword (lower, upper, number, symbol, length) {
    //empty string for password
    let generatedPassword = ''

    //adding all true or false values in typescount (true + true + true + false = 3)
    const typescount = lower + upper + number + symbol

    //creating a object for stroing true false values in a array and also filtering the array if any false values are in this
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item =>Object.values(item)[0])

    //if not boxes are checked means all are false that means types count are equals to 0
    if(typescount === 0){
        return ''//return empty string
    }

    //for loop for creating the password in a loop but here we are incrementing by typescount(checked boxes)
    for(let i = 0;i<length;i+=typescount){
        typesArr.forEach(type =>{
            const funcName  = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    //slicing the string by password lenght
    const finalPass =   generatedPassword.slice(0,length)
    return finalPass
}


//Generator functions

//https://net-comber.com/charset.html
function generateLowercase () {
    //according to charset
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97)) 
}
function generateUppercase () {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}
function generateNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
}
function generateSymbol () {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}