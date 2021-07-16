import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../apiActions";

import axios from "axios";

const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await axios.request({
        url,
        method,
        data,
      });

      dispatch(apiCallSuccess());
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(apiCallFailed());
      dispatch({ type: onError, payload: error.message });
    }
  };

export default apiMiddleware;
