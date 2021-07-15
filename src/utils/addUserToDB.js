import { baseURL, instance } from "../service/httpConfig";

const addUserToDB = async (
  userAuth,
  { photo, password, confirmPassword, ...additionalData }
) => {
  const { localId: uid, email } = userAuth;
  try {
    const { data } = await instance({
      baseURL,
      url: `users/${uid}.json`,
    });
    if (data === null) {
      await instance({
        baseURL,
        method: "PUT",
        url: `users/${uid}.json`,
        data: {
          email,
          ...additionalData,
        },
      });
    }
  } catch (e) {
    alert(e);
  }
};

export default addUserToDB;
