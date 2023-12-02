const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const { employees } = data;

  const array = employees.filter((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return employee;
    }
    return undefined;
  });

  if (array[0] === undefined) {
    return {};
  } return array[0];
};
console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
