const tablaSustitucion = {
    B: "F",
    C: "L",
    D: "Z",
    F: "M",
    G: "T",
    H: "X",
    J: "K",
    K: "R",
    L: "N",
    M: "Y",
    N: "H",
    Ñ: "W",
    P: "G",
    Q: "S",
    R: "P",
    S: "Q",
    T: "J",
    V: "D",
    W: "B",
    X: "V",
    Y: "Ñ",
    Z: "C",
  };




function encriptar(texto) {
  console.log("entro aqui ");
  console.log(texto);
  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    if (tablaSustitucion[letra]) {
      textoEncriptado += tablaSustitucion[letra];
    } else {
      textoEncriptado += letra;
    }
  }
  console.log("sale");
  console.log(textoEncriptado);
  return textoEncriptado;
}

function desencriptar(textoEncriptado) {
  let texto = "";
  for (let i = 0; i < textoEncriptado.length; i++) {
    const letraEncriptada = textoEncriptado[i];
    let letra = "";
    for (const key in tablaSustitucion) {
      if (
        tablaSustitucion.hasOwnProperty(key) &&
        tablaSustitucion[key] === letraEncriptada
      ) {
        letra = key;
        break;
      }
    }
    if (letra) {
      texto += letra;
    } else {
      texto += letraEncriptada;
    }
  }
  return texto;
}

function encripta_() {

  var input = document.getElementById("input_str").value;
  let output = "";

  if(input.length === 0){
    document.getElementById("output_str").innerHTML = "Ningún texto fue encontrado!";
  }else{


    for (let i = 0; i < input.length; i++) {
      let charCode = input.charCodeAt(i);
      let newCharCode = charCode;
  
      switch (charCode) {
        case 48: // 0
          newCharCode = 190;
          break;
        case 49: // 1
          newCharCode = 191;
          break;
        case 50: // 2
          newCharCode = 192;
          break;
        case 51: // 3
          newCharCode = 193;
          break;
        case 52: // 4
          newCharCode = 194;
          break;
        case 53: // 5
          newCharCode = 195;
          break;
        case 54: // 6
          newCharCode = 196;
          break;
        case 55: // 7
          newCharCode = 197;
          break;
        case 56: // 8
          newCharCode = 200;
          break;
        case 57: // 9
          newCharCode = 206;
  
          break;
        default:
          break;
      }
      output += String.fromCharCode(newCharCode);
    }
    console.log(output);
  
    document.getElementById("output_str").innerHTML = encriptar(output);
  }

 
}

function resuelve() {
  var input = document.getElementById("input_str").value;
  let output = "";

  for (let i = 0; i < input.length; i++) {
    let charCode = input.charCodeAt(i);
    let newCharCode = charCode;

    switch (charCode) {
      case 190: // 0
        newCharCode = 48;
        break;
      case 191: // 1
        newCharCode = 49;
        break;
      case 192: // 2
        newCharCode = 50;
        break;
      case 193: // 3
        newCharCode = 51;
        break;
      case 194: // 4
        newCharCode = 52;
        break;
      case 195: // 5
        newCharCode = 53;
        break;
      case 196: // 6
        newCharCode = 54;
        break;
      case 197: // 7
        newCharCode = 55;
        break;
      case 200: // 8
        newCharCode = 56;
        break;
      case 206: // 9
        newCharCode = 57;
        break;
      default:
        break;
    }
    output += String.fromCharCode(newCharCode);
  }
  console.log("desce");
  console.log(output);

  document.getElementById("output_str").innerHTML = desencriptar(output);
}
