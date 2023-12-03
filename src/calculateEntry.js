const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((acc, entrat) => {
  if (entrat.age < 18) {
    acc.child += 1;
  }

  if (entrat.age >= 18 && entrat.age < 50) {
    acc.adult += 1;
  }

  if (entrat.age >= 50) {
    acc.senior += 1;
  }

  return acc;
}, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  const { child, adult, senior } = data.prices;
  if (entrants === undefined || entrants.length === 0) {
    return 0;
  }
  const grupo = countEntrants(entrants);
  const preco = (grupo.child * child) + (grupo.adult * adult) + (grupo.senior * senior);
  return parseFloat(preco.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
