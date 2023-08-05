import { useState } from 'react';

const useValidation = () => {
  const [errors, setErrors] = useState({});

  // Email validation function
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email || !email.match(emailPattern)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
      return false;
    }

    setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    return true;
  };

  // Username validation function
  const validateUsername = (username) => {
    if (!username || username.length > 4) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Username must have less than or equal to 4 characters',
      }));
      return false;
    }

    setErrors((prevErrors) => ({ ...prevErrors, username: '' }));
    return true;
  };

  return { errors, validateEmail, validateUsername };
};

export default useValidation;
