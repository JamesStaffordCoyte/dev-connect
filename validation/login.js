const validator = require('validator');
// import isEmpty from './is-empty';
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // If field is empty set it to an empty string that validator can check
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Check whether email is valid
  if(!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  // Checks whether inputs are empty
  if(validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if(validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
