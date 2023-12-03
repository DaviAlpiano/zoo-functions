const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const semana = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };

  const close = 'The zoo is closed';
  it('ao passar nenhum parâmetro para a função getOpeningHours deve retornar um objeto com todos os dias e horários.', () => {
    expect(typeof getOpeningHours()).toBe('object');
    expect(getOpeningHours()).toEqual(semana);
  });

  it('ao passar Monday com qualquer horário deve retornar "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '08:00-AM')).toBe(close);
    expect(getOpeningHours('Monday', '05:00-PM')).toBe(close);
  });

  it('teste se a função não é case-sensitive', () => {
    expect(getOpeningHours('moNday', '08:00-AM')).toBe(close);
    expect(getOpeningHours('monday', '08:00-am')).toBe(close);
  });

  it('ao passar os dias da sememana retorna se esta aberto ou não', () => {
    const open = 'The zoo is open';
    expect(getOpeningHours('Wednesday', '02:00-AM')).toBe(close);
    expect(getOpeningHours('Thursday', '07:00-PM')).toBe(open);
    expect(getOpeningHours('Friday', '09:00-AM')).toBe(close);
    expect(getOpeningHours('Saturday', '02:00-PM')).toBe(open);
  });

  it('ao passar alguma string que nao seja um dia da semana, deve retornar o erro esperado', () => {
    const expected = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Wedesday', '02:00-AM')).toThrow(expected);
  });

  it('ao passar um horário acima de 12h, deve retornar o erro esperado', () => {
    const expected = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Thursday', '13:00-AM')).toThrow(expected);
  });

  it('ao passar um horário acima de 59m, deve retornar o erro esperado', () => {
    const expected = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Saturday', '08:75-AM')).toThrow(expected);
  });

  it('ao passar uma string no lugar do horário, deve retornar o erro esperado', () => {
    const expected = 'The hour should represent a number';
    expect(() => getOpeningHours('Saturday', 'Dia-AM')).toThrow(expected);
  });

  it('ao passar uma string no lugar dos minutos, deve retornar o erro esperado', () => {
    const expected = 'The minutes should represent a number';
    expect(() => getOpeningHours('Saturday', '08:aa-AM')).toThrow(expected);
  });

  it('ao passar algo diferente de "am" ou "pm" no horário, deve retornar o erro esperado', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Saturday', '08:00-AA')).toThrow(expected);
  });
});
