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
    //secondText.value = codificar (firstText.value, letterJump);
    secondText.value = cipher.encode(letterJump, firstText.value);
    //debugger
})

//BOTÓN DESCIFRAR
decipherButton.addEventListener("click", () => {
    letterJump = parseInt(document.getElementById("letterJump").value);
    //secondText.value = decodificar (firstText.value, letterJump);
    secondText.value = cipher.decode (letterJump, firstText.value);
})

//BOTÓN CLEAN
cleanButton.addEventListener("click", () => {
    firstText.value = "";
    secondText.value = "";
})
