let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 
let numeroLetras = 0;
function contaLetras (nomes) {
    for (let indice in nomes) {
      if (nomes[numeroLetras] < nomes.length[indice]) {
        numeroLetras = indice;
      }
    }
    return numeroLetras;
  }
  
  console.log(numeroLetras(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));