function passwordGenerator (passLenght, uppercase, numbers, symbols) {
  let password = "";

  if (passLenght >= 8 && passLenght <= 16) {
    let charList = [];
    
    for (let i = 97; i < 123; i++) {
      charList.push(String.fromCharCode(i))
    }
    
    if (uppercase === true) {
      for (let i = 65; i < 91; i++) {
        charList.push(String.fromCharCode(i))
      }
    }
    
    if (numbers === true) {
      for (let i = 48; i < 58; i++) {
        charList.push(String.fromCharCode(i))
      }
    }
    
    if (symbols === true) {
      for (let i = 33; i < 48; i++) {
        charList.push(String.fromCharCode(i))
      }
      for (let i = 58; i < 65; i++) {
        charList.push(String.fromCharCode(i))
      }
      for (let i = 91; i < 97; i++) {
        charList.push(String.fromCharCode(i))
      }
      charList.push('ñ');
    }

    for (let i = 0; i < passLenght; i++) {
      let randomNum = Math.floor((Math.random() * (charList.length-1)) + 1);
      let char = charList[randomNum];
      password += char;
    }

    console.log(password)
  } else {
    console.error("La contraseña debe tener entre 8 y 16 caracteres.")
  }
}


passwordGenerator(8, true, true, true); // Utiliza todos los campos
passwordGenerator(7, true, true, true); // Error
passwordGenerator(19, true, true, true); // Error
passwordGenerator(8, false, false, false); // Solo minúsculas
passwordGenerator(8, false, true, true); // Minus, num y sim.
passwordGenerator(8, true, false, true); // Minus, mayus y sim.
passwordGenerator(8, true, true, false); // Minus, mayus y num.
passwordGenerator(8, false, false, true); // Minus y sim.
passwordGenerator(8, true, false, false); // Minus y mayus.
passwordGenerator(8, false, true, false); // Minus y num.
