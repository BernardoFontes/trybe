let numeros = [2, 4, 6, 7, 10, 0, -3];
let indiceMenor = 0;
function indiceDoMenor (numeros) {
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor;
  }
  
  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]))