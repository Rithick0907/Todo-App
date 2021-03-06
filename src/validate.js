export const mobileNumberValidation = {
  regExp: /^[6-9]\d{9}$/,
  errorMessage: "Mobile Number must have 10 digits starting with 6 to 9",
};
export const passwordValidation = {
  regExp: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  errorMessage:
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
};
