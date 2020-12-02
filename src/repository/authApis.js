// import Auth from "../utils/Auth";
import { getApiError } from "./Api";
import { endPoints } from "./endPoints";

const AuthRepository = function(axiosInstance) {
  let _AuthRepository = {
    signin: async function(data) {
      try {
        const response = await axiosInstance.post(
          endPoints.auth.signin({}),
          data
        );
        //@todo Handle refresh token
        const {
          data: { access, refresh, user }
        } = response.data;
        // Auth.setToken({ access, refresh });
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access?.token}`;
        return user;
      } catch (error) {
        throw getApiError(error);
      }
    }
  };
  return _AuthRepository;
};

export { AuthRepository };
