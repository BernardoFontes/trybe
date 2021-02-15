const { TestScheduler } = require('jest');
const mokinho = require('./ex4.js');

jest.mock('./ex4.js');

test('testando funcoes', () => {
    mokinho.highBox.mockImplementation((a) => a.toLowerCase());
    mokinho.highBox('BANANA');

    expect(mokinho.highBox).toHaveBeenCalled();
    expect(mokinho.highBox).toHaveBeenCalledTimes(1);
    expect(mokinho.highBox).toHaveBeenCalledWith('BANANA');
    expect(mokinho.highBox('BANANA')).toBe('banana');
})

