const atacantesDecadas = {
    sessenta: 'Pelé',
    setenta: 'Gerd Muller',
    oitenta: 'Van Basten',
    noventa: 'Romário',
    doisMil: 'Ronaldo'

};


const adicionaChave = (obj, key, value) => {
     obj[key] = value;
};

adicionaChave(atacantesDecadas,"doisMileDez","Cristiano Ronaldo");
console.log(atacantesDecadas);
