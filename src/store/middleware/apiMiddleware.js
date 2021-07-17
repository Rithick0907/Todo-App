import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../apiActions";

import axios from "axios";
import isResponseError from "../../utils/isResponseError";

const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await axios({
        url,
        method,
        data,
      });

      dispatch(apiCallSuccess());
      dispatch({ type: onSuccess, payload: response.data });
      if (data.redirectTo) {
        const { history, path } = data.redirectTo;
        history.push(path);
      }
    } catch (e) {
      dispatch(apiCallFailed());
      const errMsg = isResponseError(e)
        ? e.response.data.error.message
        : "Something went wrong";
      dispatch({ type: onError, payload: errMsg });
    }
  };

export default apiMiddleware;
