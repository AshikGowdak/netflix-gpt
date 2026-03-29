export const checkValidate = (name, email, password) => {
  const isNameValid = /^[a-zA-Z\s]+$/.test(name);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  if (!isNameValid) {
    return "Please enter a valid name.";
  }

  if (!isEmailValid) {
    return "Please enter a valid email address.";
  }

  if (!isPasswordValid) {
    return "Password must be at least 8 characters long and contain both letters and numbers.";
  }

  return null;
};