const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const { species } = data;
  return species.filter((specie) => ids.includes(specie.id));
};

module.exports = getSpeciesByIds;
