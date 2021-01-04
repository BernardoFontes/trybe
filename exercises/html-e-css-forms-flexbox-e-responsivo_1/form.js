const estados = document.getElementById("estados")
function criaOptions(){
    let opcoes  = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    let value = 1;
    for (let index = 0; index<=opcoes.length;index+=1){
        let opcao = document.createElement('option');
        estados.appendChild(opcao).innerText= opcoes[index];
        estados.appendChild(opcao).value= opcoes[index];
    }
}
const botaoLimpar = document.querySelector(".clear-button")
function limpa(){
    const elementos = document.querySelectorAll("input");
    const textArea = document.querySelectorAll("textArea");
    const div = document.querySelectorAll("div");
    for(let index=0;index<=elementos.length && textArea.length && div.length;index+=1){
        const inputLimpo = elementos[index];
        const taLimpo = textArea[index];
        inputLimpo.value = "";
        taLimpo.value = "";
        div[index].innerText = '';
    }
}
botaoLimpar.addEventListener('click', limpa);
window.onload = function () {
    criaOptions();
  }