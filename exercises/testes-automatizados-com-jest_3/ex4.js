function highBox(stri){
    const sobeStr = stri.toUpperCase();
    return sobeStr;
    }
    
    console.log(highBox('banana'));
    
    function retornaPrimeiraLetra(palavra){
        const buscaPL = palavra[0];
        return buscaPL;
    }
    console.log(retornaPrimeiraLetra('banana'));
    
    function juntaDuasStr(st1,st2){
        const junta = `${st1}${st2}`
        return junta;
    }
    console.log(juntaDuasStr('banana','amarela'));

    module.exports = { highBox, retornaPrimeiraLetra, juntaDuasStr }