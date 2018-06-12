//VARIABLES
const firstText = document.getElementById("firstText");
const secondText = document.getElementById("secondText");
const cipherButton = document.getElementById("cipherButton");
const decipherButton = document.getElementById("decipherButton");
const cleanButtonOne = document.getElementById("cleanOne");
const cleanButtonTwo = document.getElementById("cleanTwo");
const changeButtonOne = document.getElementById("changeOne");
const changeButtonTwo = document.getElementById("changeTwo");
const copyButtonOne = document.querySelector(".copyOne");
const copyButtonTwo = document.querySelector(".copyTwo");
let letterJump = 0;

//BOTÓN CIFRAR
cipherButton.addEventListener("click", () => {
    letterJump = parseInt(document.getElementById("letterJump").value);
    //secondText.value = codificar (firstText.value, letterJump);
    secondText.value = cipher.encode(letterJump, firstText.value);
    //debugger
});

//BOTÓN DESCIFRAR
decipherButton.addEventListener("click", () => {
    letterJump = parseInt(document.getElementById("letterJump").value);
    //secondText.value = decodificar (firstText.value, letterJump);
    secondText.value = cipher.decode (letterJump, firstText.value);
});

//BOTONES CLEAN
cleanButtonOne.addEventListener("click", () => {
    firstText.value = "";
});

cleanButtonTwo.addEventListener("click", () => {
    secondText.value = "";
});

//BOTONES COPIAR
copyButtonOne.addEventListener("click", () => {
    let copyFirstText =document.querySelector(".firstText");
/*     console.log(copyFirstText); */
    copyFirstText.focus();
    copyFirstText.select();
    document.execCommand('copy');
});

copyButtonTwo.addEventListener("click", () => {
    let copySecondText =document.querySelector(".secondText");
    copySecondText.focus();
    copySecondText.select();
    document.execCommand('copy');
});

//BOTONES CAMBIAR
changeButtonOne.addEventListener("click", () => {
    secondText.value = firstText.value;
    firstText.value = "";

});

changeButtonTwo.addEventListener("click", () => {
    firstText.value = secondText.value;
    secondText.value = "";

});
