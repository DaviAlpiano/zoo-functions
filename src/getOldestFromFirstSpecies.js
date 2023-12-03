const data = require('../data/zoo_data');

const { species, employees } = data;

const getOldestFromFirstSpecies = (id) => {
  const fistAni = employees.find((employee) =>
    employee.id === id).responsibleFor[0];

  const dados = species.find((specie) => specie.id === fistAni)
    .residents.reduce((acc, resident) => (acc.age > resident.age ? acc : resident));

  return Object.values(dados);
};

console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
module.exports = getOldestFromFirstSpecies;
