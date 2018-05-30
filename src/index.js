//VARIABLES
const firstText = document.getElementById("firstText");
const secondText = document.getElementById("secondText");
const cipherButton = document.getElementById("cipherButton");
const decipherButton = document.getElementById("decipherButton");
const cleanButton = document.getElementById("clean");
let letterJump = 0;



//BOTÓN CIFRAR
cipherButton.addEventListener("click", () => {
    letterJump = parseInt(document.getElementById("letterJump").value);
    //console.log(letterJump);
    secondText.value = codificar (firstText.value, letterJump);
})

//BOTÓN DESCIFRAR
decipherButton.addEventListener("click", () => {
    letterJump = parseInt(document.getElementById("letterJump").value);
    secondText.value = decodificar (firstText.value, letterJump);
})


//Función cifrar

function codificar (message ,offset) {
    let n = offset;
    let finalText = '';
  
    for (let i=0; i < message.length; i++){
      //debugger
      const x = message.charCodeAt(i);
      
      if (64<x && x<91){
        let cipher = (x - 65 + n)%26 + 65;
        finalText += String.fromCharCode(cipher);
      } else if (96<x && x<123) {
          let cipher = (x - 97 + n)%26 + 97;
          finalText += String.fromCharCode(cipher);
      } else {
        finalText += String.fromCharCode(x);
      }  
   }
   return finalText;
  };

  //función descifrar

function decodificar (message, offset) {
    let n = offset;
    let finalText = '';

    for (let i=0; i < message.length; i++) {
        const y = message.charCodeAt(i);
           
        if (64<y && y<91){
            let result = (y - 65 - n)%26;
               
               if ( result >= 0) {
               let decipher = result + 65;
               finalText += String.fromCharCode(decipher);
               } else {
               let decipher = (result + 65) + 26;
               finalText += String.fromCharCode(decipher);
               }
        } else if ((96<y && y<123)){
               let result = (y - 97 - n)%26;
               
               if ( result >= 0) {
               let decipher = result + 97;
               finalText += String.fromCharCode(decipher);
               } else {
               let decipher = (result + 97) + 26;
               finalText += String.fromCharCode(decipher);
               }
        } else {
               finalText += String.fromCharCode(y);
           }
       }
    return finalText;
  }; 
/*
offsetPast.addEventListener("input", () => {
    console.log(offset.value);
})
//offset;
 firstText.addEventListener ("input", () => {
    return firstText.value;

}) 

//botón cifrar
cipherButton.addEventListener("click", () => {
    //debugger, sirve para detener la ejecución del código en esta sentencia
    letterJump = parseInt(letterJumpUser.value);
    secondText.value = caesarCipher(firstText.value,letterJump);
    return secondText.value;
})

//botón descifrar

decipherButton.addEventListener("click", () => {
    letterJump = parseInt(letterJumpUser.value);
    secondText.value = caesarCipher(firstText.value, -letterJump);
    console.log(secondText.value);
    return secondText.value;
})

//botón clean

cleanButton.addEventListener("click", () => {
    firstText.value = "";
    secondText.value = "";
})

//Función CIFRADO


function caesarCipher(firstText, letterJump) {
    finalText = "";
    for (var i=0; i<firstText.length;i++){
		finalText += String.fromCharCode(firstText.charCodeAt(i)+letterJump);
    }
    return finalText;
} */ 

//CIFRAR
/* const message = prompt('Ingresa un mensaje');
let n = 3;

for (let i=0; i < message.length; i++){
    //debugger
    const x = message.charCodeAt(i);
    
    if (64<x && x<91){
        //console.log(x);
      let cipher = (x - 65 + n)%26 + 65;
    console.log(String.fromCharCode(cipher));
    } else if (96<x && x<123) {
        let cipher = (x - 97 + n)%26 + 97;
        console.log(String.fromCharCode(cipher));
    } else {
        console.log(String.fromCharCode(x));
    }

    
 } */

 //DESCIFRAR
/*  const message = prompt('Escribe tu mensaje');
let n = 3;
//Descifrando
for (let i=0; i < message.length; i++) {
 //debugger
    const y = message.charCodeAt(i);
    
    if (64<y && y<91){
        let result = (y - 65 - n)%26;
        
        if ( result >= 0) {
        let decipher = result + 65;
        console.log(String.fromCharCode(decipher));
        } else {
        let decipher = (result + 65) + 26;
        console.log(String.fromCharCode(decipher));
        }
} else if ((96<y && y<123)){
        let result = (y - 97 - n)%26;
        
        if ( result >= 0) {
        let decipher = result + 97;
        console.log(String.fromCharCode(decipher));
        } else {
        let decipher = (result + 97) + 26;
        console.log(String.fromCharCode(decipher));
        }
} else {
        console.log(String.fromCharCode(y));
    }
} */