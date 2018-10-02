const validator = require('validator');
// import isEmpty from './is-empty';
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  // If field is empty set it to an empty string that validator can check
  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  // Checks that certain fields are empty
  if(validator.isEmpty(data.title)) {
    errors.title = 'Job title field is required';
  }
  if(validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }
  if(validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
