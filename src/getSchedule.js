const data = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => {
  const { species, hours } = data;
  const dias = Object.keys(hours);
  const hora = Object.values(hours);
  return dias.reduce((acc, actual, index) => {
    acc[actual] = {
      officeHour: `Open from ${hora[index].open}am until ${hora[index].close}pm`,
      exhibition: species.filter((specie) =>
        specie.availability.includes(actual))
        .map((animal) => animal.name),
    };
    return acc;
  }, {});
  species.find((specie) => specie.name === scheduleTarget).availability;
};

console.log(getSchedule());
module.exports = getSchedule;
