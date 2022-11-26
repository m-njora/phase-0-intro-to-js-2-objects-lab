// Write your solution in this file!
var employee = {};
function updateEmployeetWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newEmp = Object.assign({}, employee, {[key]: value});
    return newEmp;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    var newEmp = Object.assign({}, employee);
    delete newEmp[key];
    return newEmp;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  