import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.interceptors.response.use(undefined, (error: any) => {
  const expectedError =
    error.response &&
    error.response.status >= 404 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,

  delete: axios.delete
};
