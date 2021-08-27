export default function validateInfo(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'Child name is required';
    }
   
    if (!values.age.trim()) {
      errors.age = 'Age is required';
    }
  
    if (!values.parentEmail) {
      errors.parentEmail = 'parent Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.parentEmail)) {
      errors.parentEmail = 'Email address is invalid';
    }

    if (!values.parentNumber) {
      errors.parentNumber = 'parent Number is required';
    } else if (values.parentNumber.length < 11) {
      errors.parentNumber = 'Number needs to be 11 characters';
    }
  
    if (!values.parentName) {
      errors.parentName = 'parent Name is required';
    } 

    return errors;
  }