const isResponseError = (error) =>
  error.response &&
  error.response.data &&
  error.response.data.error &&
  error.response.data.error.message;

export default isResponseError;
