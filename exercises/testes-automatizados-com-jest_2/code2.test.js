const xablau = require('./code2.js');
    test('teste se é encontrado', () => {
  return xablau.getUserName(4).then((response) => {
    expect(response).toEqual('Mark');
  
  });
  });