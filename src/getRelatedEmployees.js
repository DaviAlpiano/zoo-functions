const data = require('../data/zoo_data');

const isManager = (id) => {
  const genrente = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
  return genrente.some((employee) => employee === id);
};

const getRelatedEmployees = (managerId) => {
  const { employees } = data;
  isManager(managerId);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } return employees.filter((employee) => (employee.managers.includes(managerId)))
    .map((dado) => `${dado.firstName} ${dado.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
