const data = require('../data/zoo_data');

const { species, employees } = data;

const pessoas = () => employees.reduce((acc, actual) => {
  acc.push({
    id: actual.id,
    fullName: `${actual.firstName} ${actual.lastName}`,
    species: species.filter((specie) =>
      actual.responsibleFor.includes(specie.id))
      .map((dados) => dados.name),
    locations: species.filter((specie) =>
      actual.responsibleFor.includes(specie.id))
      .map((dados) => dados.location),
  });
  return acc;
}, []);

const getEmployeesCoverage = (object) => {
  if (typeof object !== 'object') {
    return pessoas();
  }
  const dado = Object.values(object)[0];
  const pessoa = pessoas().filter((employee) => employee.fullName.includes(dado)
  || employee.id === dado);
  if (pessoa.length === 0) {
    throw new Error('Informações inválidas');
  }
  return pessoa[0];
};

console.log(getEmployeesCoverage({ id: 'Strauss' }));
module.exports = getEmployeesCoverage;
