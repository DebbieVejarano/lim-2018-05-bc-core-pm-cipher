//VARIABLES
const firstText = document.getElementById("firstText");
const secondText = document.getElementById("secondText");
const cipherButton = document.getElementById("cipherButton");
const decipherButton = document.getElementById("decipherButton");
const cleanButton = document.getElementById("clean");
const letterJumpUser = document.getElementById("letterJumpUser");
let letterJump = 0; //Lo creamos para llamarlo en la función CaesarCipher y obtener el VALUE
let finalText;

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
}
