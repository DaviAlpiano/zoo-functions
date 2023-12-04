const data = require('../data/zoo_data');

const { species } = data;
const locais = ['NE', 'NW', 'SE', 'SW'];

const processResidents = (atual, sex, sort) => {
  const filteredResidents = atual.residents
    .filter((resident) => resident.sex === sex)
    .map((resident) => resident.name);

  return sort ? filteredResidents.sort() : filteredResidents;
};

const sexoOrde = (options) => locais.reduce((acc, atual) => {
  acc[atual] = species.filter((specie) => specie.location === atual)
    .reduce((ac, atua) => {
      ac.push({ [atua.name]: processResidents(atua, options, true) });
      return ac;
    }, []);
  return acc;
}, {});

const sexo = (options) => locais.reduce((acc, atual) => {
  acc[atual] = species.filter((specie) => specie.location === atual)
    .reduce((ac, atua) => {
      ac.push({ [atua.name]: processResidents(atua, options, false) });
      return ac;
    }, []);
  return acc;
}, {});

const ordem = () => locais.reduce((acc, acutal) => {
  acc[acutal] = species.filter((specie) =>
    specie.location === acutal)
    .reduce((ac, atual) => {
      ac.push({ [atual.name]: atual.residents
        .map((resident) => resident.name)
        .sort((a, b) => a.localeCompare(b)) });
      return ac;
    }, []);
  return acc;
}, {});

const nomes = () => locais.reduce((acc, acutal) => {
  acc[acutal] = species.filter((specie) =>
    specie.location === acutal)
    .reduce((ac, atual) => {
      ac.push({ [atual.name]: atual.residents
        .map((resident) => resident.name) });
      return ac;
    }, []);
  return acc;
}, {});

const basico = () => locais.reduce((acc, acutal) => {
  acc[acutal] = species.filter((specie) =>
    specie.location === acutal)
    .map((dados) => dados.name);
  return acc;
}, {});

const escolha = (options) => {
  if (options.sex && options.sorted) {
    return sexoOrde(options.sex);
  }

  if (options.sex) {
    return sexo(options.sex);
  }

  if (options.sorted) {
    return ordem();
  }
};

const getAnimalMap = (options) => {
  if (typeof options !== 'object' || !options.includeNames) {
    return basico();
  }

  if (options.sex || options.sorted) {
    return escolha(options);
  }

  return nomes();
};

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
module.exports = getAnimalMap;
