const sum = require('./sum');

describe('Testa o resultado da soma', () => {
it('testar resultado da soma', () => {
    expect(sum(4,5)).toBe(9);
});
it('testar se a funcao dá erro se vier um parametro diferente de numero', () => {
    expect(() =>
    {
        sum('4',5);
    }).toThrow();
});
it('testar se o retorno de 0,0 é o', () => {
    expect(sum(0,0)).toBe(0);
});
it('testar se a mensagem é "parameters must be numbers"', () => {
    expect(() => 
    {
        sum('4',5);
    }).toThrow(/parameters must be numbers/)
})
});