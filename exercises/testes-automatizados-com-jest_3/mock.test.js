const mockerson = require('./mock.js');

jest.mock('./mock.js');

test('numbero', () => {
   mockerson.Numero.mockImplementation((a,b) => a/b);
   mockerson.Numero(8,2);

   expect(mockerson.Numero).toHaveBeenCalled();
   expect(mockerson.Numero).toHaveBeenCalledTimes(1);
   expect(mockerson.Numero).toHaveBeenCalledWith(8,2);
   expect(mockerson.Numero(8,2)).toBe(4);
});