function encode(string) {
    let trocaLetras = { a: "1", e: "2", i: "3", o: "4", u: "5"};
    let resultado = "";
    resultado = string.replace(/[aeiou]/gi, (m) => trocaLetras[m]);
    return resultado;
  }
  
module.exports = encode;