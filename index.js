let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
let passwordBtn = document.getElementById("generate-psw");
let passwordElm = document.getElementById("password");
let length = 9;
let split = Math.floor(length / 4)
console.log(split)

// create random 8 letters password

passwordBtn.addEventListener ("click", function() {
    let password = [];
    for (let i=0;i<split;i++) {
        password.push(lowerCase[Math.floor(Math.random()*26)]);
        password.push(upperCase[Math.floor(Math.random()*26)]);
        password.push(numbers[Math.floor(Math.random()*10)]);
        password.push(specialCharacters[Math.floor(Math.random()*8)]);
            }
            console.log(password)

                passwordElm.textContent = "";

                for(let i = 0; i<password.length; i++ ){
                    
                    passwordElm.textContent += password[i]
                    
            
            }

            
})

// Create copy function for the app

function myFunction() {
    let copyText = passwordElm.textContent;
    navigator.clipboard.writeText(copyText);
   
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText;
  }
  
  function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }



