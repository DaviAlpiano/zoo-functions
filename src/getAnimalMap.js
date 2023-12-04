const data = require('../data/zoo_data');

const { species } = data;
const locais = ['NE', 'NW', 'SE', 'SW'];

const sexoOrde = (options) => locais.reduce((acc, acutal) => {
  acc[acutal] = species.filter((specie) =>
    specie.location === acutal)
    .reduce((ac, atual) => {
      if (options === 'female') {
        ac.push({ [atual.name]: atual.residents.filter((res) => res.sex === options)
          .map((resident) => resident.name).sort((a, b) => a.localeCompare(b)) });
        return ac;
      }
      if (options === 'male') {
        ac.push({ [atual.name]: atual.residents.filter((res) => res.sex === options)
          .map((resident) => resident.name).sort((a, b) => a.localeCompare(b)) });
        return ac;
      }
      return ac;
    }, []);
  return acc;
}, {});

const sexo = (options) => locais.reduce((acc, acutal) => {
  acc[acutal] = species.filter((specie) =>
    specie.location === acutal)
    .reduce((ac, atual) => {
      if (options === 'female') {
        ac.push({ [atual.name]: atual.residents
          .filter((res) => res.sex === options)
          .map((resident) => resident.name) });
        return ac;
      }
      if (options === 'male') {
        ac.push({ [atual.name]: atual.residents
          .filter((res) => res.sex === options)
          .map((resident) => resident.name) });
        return ac;
      }
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

const getAnimalMap = (options) => {
  if (typeof options !== 'object' || !options.includeNames) {
    return basico();
  }

  if (options.sex && options.sorted) {
    return sexoOrde(options.sex);
  }

  if (options.sex) {
    return sexo(options.sex);
  }

  if (options.sorted) {
    return ordem();
  }

  return nomes();
};

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
module.exports = getAnimalMap;
