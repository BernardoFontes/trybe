const construtor = new Promise((resolve,reject) => {
    const nome = 'lanjinha';

    if (nome != 'laranjinha'){
        return reject(nome);
    }
    resolve(nome);
})
.then(nome => `Parabéns! O nome é ${nome}`)
.then(msg => console.log(msg))
.catch(nome => console.log('O nome ta errado otario'));