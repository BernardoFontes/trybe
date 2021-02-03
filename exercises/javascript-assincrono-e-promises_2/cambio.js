const botaoPesq = () => { 
const selectPesq = document.getElementById('search-button');
selectPesq.addEventListener('click', pegaValor);
}

const listaMoedas = (ratesData) => {
    const selectLista = document.getElementById('currency-list')
const entradas = Object.entries(ratesData.rates);
entradas.forEach((array) => {
    const [ moeda, valor ] = array;
const li = document.createElement('li');
li.innerText = `Moeda: ${moeda}, valor: ${valor}`
selectLista.appendChild(li);
})
}

const pegaValor = () => {
const listenerValor = document.getElementById('currency-input');
const valor = listenerValor.value.toUpperCase();

fetchFunction(valor);
}

const fetchFunction = (valor) => {
const link = `https://api.ratesapi.io/api/latest?base=${valor}`;
const fetchLink = fetch(link)
.then((resposta) => resposta.json())
.then((object) => listaMoedas(object))
.catch((error) => window.alert('deu pau'))
}

window.onload = () => {
    botaoPesq();
};

