const encode = require('./code.js');
const decode = require ('./decode.js');

describe('testa as funcoes', () => {
    it('testa se uma funcao é funcao', () =>{
        expect(typeof encode).toEqual('function');
    });
    it('testa se aeiou vira 12345', () =>{
        expect(encode('ana')).toEqual('1n1');
    });
    it('testa se 12345 vira aeiou', () => {
        expect(decode('555')).toEqual('uuu');
    });
        it('testa se o tamanho é o mesmo', () => {
            expect(encode('ana').length).toEqual(3);
        });
});
