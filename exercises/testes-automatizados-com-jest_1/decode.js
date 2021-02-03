function decode(string) {
    let trocaLetras = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
    let resultado = "";
    resultado = string.replace(/[12345]/gi, (m) => trocaLetras[m]);
    return resultado;
  }

  module.exports = decode;