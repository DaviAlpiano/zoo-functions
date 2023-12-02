const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const { species } = data;
  return species.filter((specie) => specie.name === animal)
    .map((specis) => specis.residents)
    .some((resident) => resident.every((res) => res.age >= age));
};
console.log(getAnimalsOlderThan('penguins', 2));
module.exports = getAnimalsOlderThan;
