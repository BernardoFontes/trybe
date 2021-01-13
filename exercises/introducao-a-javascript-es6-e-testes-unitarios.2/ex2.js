const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
const addTurno = (objeto,chave,valor) => {
    objeto[chave] = valor;
}

addTurno(lesson2,'turno','manhã');
console.log(lesson2);

// 2
const listaChaves = (objeto) => {
    console.log(Object.keys(objeto));
}

listaChaves(lesson2);

// 3
const tamanho = (objeto) => {
    let quantidade = Object.keys(objeto).length;
    console.log(quantidade);
}

tamanho(lesson3);

// 4
const listaValores = (objeto) => {
    console.log(Object.values(objeto));
}

listaValores(lesson2);

// 5
const lessons = Object.assign({}, {lesson1,lesson2,lesson3});
console.log(lessons);

// 6
const totalEstudantes = obj => {
    let total = 0;
    let chave = Object.keys(obj);
    for (let i in chave){
        total += obj[chave[i]].numeroEstudantes
    }
    return total;
}
console.log(totalEstudantes(lessons));

// 7
const numeroArray = (obj,number) => {
    Object.values(obj)[number];
}
console.log(numeroArray(lessons, 1));

// 8

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let i in arr) {
      if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));
