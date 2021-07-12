import { toast } from "react-toastify";

const isError = (error) => {
  if (error) {
    toast.error(error);
  }
};

export default isError;
