const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//Random Character generator
function randomCharcter(){
    let randomNum = Math.floor(Math.random() * characters.length)//generates random number
    return characters[randomNum]//gives number to array and number converts into character
}
//Passoword generator
function passwordGenerator(){
    password = ''//emtpy the string
    spanEl.innerHTML = ''//clears the old password stores in span element
    for(let i = 0; i<=12;i++){//loop for 12 character password
        password += randomCharcter()//stores password and call random character generator 12 times to crete 12 charcater bases password
    }
    let para = document.createElement('p');//creates p element to stores password in it
    para.id = 'content';//gives id
    para.className = ["text-center cursor-pointer text-xl" ]//gives class name
    para.title = "Copy to Clipboard"//gives title
    para.onclick = function(){handleCopyTextFromParagraph()}//onclick event to copy to clipboard
    spanEl.appendChild(para);//sapn chid is p
    para.textContent = password;//Print password in p
}
//Copy to Clipboard function
function handleCopyTextFromParagraph() {
    const cb = navigator.clipboard;
    cb.writeText(spanEl.innerText).then(() => alert('Text copied'));
  }
let password = ""
let spanEl = document.getElementById("result")