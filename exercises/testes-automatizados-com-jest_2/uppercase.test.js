const xablau = require('./uppercase.js');

    it('testa se volta maiuscula', (done) => {
        function callback(str) {
        expect(str).toBe('BANANA');
        done();
    }
    xablau.uppercase('banana',callback)
});