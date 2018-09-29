const validator = require('validator');
// import isEmpty from './is-empty';
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // If field is empty set it to an empty string that validator can check
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  // Check length of Name
  if(!validator.isLength(data.name, {min: 2, max: 30})){
    errors.name = 'Name must be between 2 and 30 characters';
  }

  // Check whether email is valid
  if(!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  // Checks length of Password
  if(!validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must be at least 6 characters'
  }

  // Compares the two passwords
  if(!validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match'
  }

  // Checks whether inputs are empty
  if(validator.isEmpty(data.name)) {
    errors.name = 'Name field is required'
  }

  if(validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  }

  if(validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }
  if(validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
