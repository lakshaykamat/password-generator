const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
function randomCharcter(){
    let randomNum = Math.floor(Math.random() * characters.length)
    return characters[randomNum]
}
function passwordGenerator(){
    password = ''
    spanEl.innerHTML = ''
    for(let i = 0; i<=18;i++){
        password += randomCharcter()
    }
    let para = document.createElement('p');
    para.id = 'content';
    para.className = ["text-center cursor-pointer text-xl " ]
    para.title = "Copy to Clipboard"
    para.onclick = function(){handleCopyTextFromParagraph()}
    spanEl.appendChild(para);
    para.textContent = password;
}
let password = ""
let spanEl = document.getElementById("result")
function handleCopyTextFromParagraph() {
    const cb = navigator.clipboard;
    // const paragraph = document.querySelector('p');
    cb.writeText(spanEl.innerText).then(() => alert('Text copied'));
  }
  