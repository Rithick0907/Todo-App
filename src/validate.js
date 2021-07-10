export const mobileNumberValidation = {
  regExp: /^[6-9]\d{9}$/,
  errorMessage: "Mobile Number in India alone accepted",
};
export const passwordValidation = {
  regExp: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  errorMessage:
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
};
export const IMAGE_FORMAT = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png",
];

const FILE_SIZE = 1000000; // 1MB

export const validateImageFormat = (value) =>
  value && IMAGE_FORMAT.includes(value.type);

export const validateImageSize = (value) => value && value.size <= FILE_SIZE;
