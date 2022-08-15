// capturar el boton y el input
const input = document.querySelector('input');
const button = document.querySelector('button');
const h3 = document.getElementById("text-encrypt");


// encriptar el texto
function encryptText(text) {
      const textLowerCase = text.toLowerCase();
      const noCharacters = textLowerCase.replace(/ /g, "");
      let resultText = noCharacters.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let textEncrypt = '';

      const arrText = resultText.split('');

      // llaves de encriptacion
      const encryptArr = arrText.map((character) => {
            if (character === 'a') {
                  return character + 'i';
            } else if (character === 'e') {
                  return character + 'nter';
            } else if (character === 'i') {
                  return character + 'mes';
            } else if (character === 'o') {
                  return character + 'ber';
            } else if (character === 'u') {
                  return character + 'fat';
            } else {
                  return character;
            }
      });
      // Array -> String
      textEncrypt = encryptArr.join('');
      return textEncrypt;
}

function encryptedHandler() {
      const inputValue = input.value;
      const result = encryptText(inputValue);
      // validando si el campo se encuentra vacio
      if (result === '') {
            alert('Ingresa texto, campo vacio');
      } else {
            h3.innerHTML = result;
      }
}

button.onclick = encryptedHandler

