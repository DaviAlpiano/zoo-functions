const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species } = data;
  if (animal === undefined) {
    return species.reduce((acc, value) => {
      acc[value.name] = value.residents.length;
      return acc;
    }, {});
  } if ('sex' in animal) {
    return species.find((specie) => specie.name === animal.species)
      .residents
      .filter((resid) => animal.sex === resid.sex).length;
  } return species.find((specie) => specie.name === animal.species)
    .residents.length;
};
console.log(countAnimals({ species: 'giraffes' }));
module.exports = countAnimals;
