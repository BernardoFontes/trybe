const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const habilidades = (aluno) => {
    let skills = Object.keys(aluno);
    for (let i in skills){
        console.log(`${skills[i]} Nível: ${aluno[skills[i]]}`);
    }
};
console.log('Estudante 1');
habilidades(student1);
