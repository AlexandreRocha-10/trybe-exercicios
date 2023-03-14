const { expect } = require('chai').expect;

const { calculaSituacao } = require('../src/calcSituation');

describe('a func calculaSituacao', () => {
    it('retorna uma string', () => {
        const calculaSit = calculaSituacao();
        expect(calculaSit).to.be.a('string');
    });
});