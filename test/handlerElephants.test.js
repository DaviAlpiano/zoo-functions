const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('caso receba nenhum parâmetro, é necessário retornar undefined', () => {
    const expected = undefined;
    expect(handlerElephants()).toBe(expected);
  });

  it('caso receba um parâmetro diferente de string', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(5)).toBe(expected);
    expect(handlerElephants([])).toBe(expected);
  });

  it('caso receba o parâmetro "count" deve retornar o número correto de elefantes', () => {
    const expected = 4;
    expect(handlerElephants('count')).toBe(expected);
  });

  it('caso receba o parâmetro "names" deve retornar um array com os nomes dos elefeantes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(Array.isArray(handlerElephants('names'))).toBe(true);
    expect(handlerElephants('names')).toEqual(expected);
  });

  it('caso receba o parâmetro "averageAge" deve retornar um número média de idade dos elefantes', () => {
    const expected = 10.5;
    expect(typeof handlerElephants('averageAge')).toBe('number');
    expect(handlerElephants('averageAge')).toBe(expected);
  });

  it('caso receba o parâmetro "location" deve retornar uma string com a localização dos elefantes no Zoológico ', () => {
    const expected = 'NW';
    expect(typeof handlerElephants('location')).toBe('string');
    expect(handlerElephants('location')).toBe(expected);
  });

  it('caso receba o parâmetro "popularity" deve retornar o número da popularidade dos elefantes', () => {
    const expected = 5;
    expect(typeof handlerElephants('popularity')).toBe('number');
    expect(handlerElephants('popularity')).toBe(expected);
  });

  it('caso receba o parâmetro "availability" deve retornar um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(Array.isArray(handlerElephants('availability'))).toBe(true);
    expect(handlerElephants('availability')).toEqual(expected);
  });

  it('caso receba o parâmetro em string diferente dos disponíveis deve retornar "null"', () => {
    expect(handlerElephants('elefante')).toBe(null);
    expect(handlerElephants('leão')).toBe(null);
  });
});
