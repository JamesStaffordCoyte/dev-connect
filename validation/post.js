const validator = require('validator');
// import isEmpty from './is-empty';
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  // If field is empty set it to an empty string that validator can check
  data.text = !isEmpty(data.text) ? data.text : '';


  // Checks whether inputs are empty
  if(validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  if(!validator.isLength(data.text, {min: 10, max: 300})) {
    errors.text = 'Post must be between 10 and 300 characters '
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
