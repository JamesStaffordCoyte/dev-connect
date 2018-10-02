const validator = require('validator');
// import isEmpty from './is-empty';
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
  let errors = {};

  // If field is empty set it to an empty string that validator can check
  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  // Checks that certain fields are empty
  if(validator.isEmpty(data.school)) {
    errors.school = 'School field is required';
  }
  if(validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }
  if(validator.isEmpty(data.fieldOfStudy)) {
    errors.fieldOfStudy = 'Field Of Study field is required';
  }
  if(validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
