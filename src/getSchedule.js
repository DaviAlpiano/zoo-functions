const data = require('../data/zoo_data');

const { species, hours } = data;
const dias = Object.keys(hours);
const hora = Object.values(hours);

const semanal = (scheduleTarget) => {
  const semana = dias.reduce((acc, actual, index) => {
    if (actual === 'Monday') {
      acc[actual] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
      return acc;
    }
    acc[actual] = {
      officeHour: `Open from ${hora[index].open}am until ${hora[index].close}pm`,
      exhibition: species.filter((specie) =>
        specie.availability.includes(actual))
        .map((animal) => animal.name),
    };

    return acc;
  }, {});
  return semana;
};

const getSchedule = (scheduleTarget) => {
  semanal(scheduleTarget);
  const animais = species.map((specie) => specie.name);

  if (animais.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (dias.includes(scheduleTarget)) {
    return { [scheduleTarget]: semanal()[scheduleTarget] };
  }
  if (scheduleTarget === undefined || typeof scheduleTarget === 'string') {
    return semanal();
  }
};
console.log(getSchedule('Thursday'));
module.exports = getSchedule;
