//CIFRAR
const encode =  (offset, string) => {
  let n = offset;
  let finalText = '';

  for (let i=0; i < string.length; i++){
    const x = string.charCodeAt(i);
    
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

//DESCIFRAR
const decode =   (offset, string) => {
  let n = offset;
  let finalText = '';

  for (let i=0; i < string.length; i++) {
      const y = string.charCodeAt(i);
         
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

//HACKER EDITION
const createCipherWithOffset = (offset) => {

  let newObject =  {
  encode: (string) => cipher.encode(offset, string),

  decode: (string) => cipher.decode(offset,string)
   }
  return newObject;
  }; 

//OBJETO cipher
window.cipher = {
  encode: encode,
  decode: decode,
  createCipherWithOffset: createCipherWithOffset
};
