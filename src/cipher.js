/* const codificar = function codificar (offset , firstText) {
  let n = offset;
  let finalText = '';

  for (let i=0; i < firstText.length; i++){
    //debugger
    const x = firstText.charCodeAt(i);
    
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
 return finalText
};

const decodificar = function decodificar (offset, firstText) {
  let n = offset;
  let y = string;


}; 

window.cipher = {
  encode: codificar,
  decode: decodificar
};
 */