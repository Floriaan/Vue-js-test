import axios from "axios";
import retrieveToken from "@/helpers/retrieveToken";
import router from "@/config/router";
import store from "@/store";

const baseURL = "http://luzerner.k-medialabs.com/api/public/api/v1";

export default ({ requiresAuth = true }) => {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  axiosInstance.interceptors.response.use(
    (response) => {
      const { status } = response;
      if (status === 200 || status === 201) return Promise.resolve(response);
      else return Promise.reject(response);
    },
    (err) => {
      const {
        response: {
          data: { error },
        },
      } = err;

      if (error == "token_invalid" || error == "token_not_provided") {
        if(retrieveToken()){
          document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
        }
        setTimeout(() => {
          router.push({
            name: "Login"
          });
        }, 1000);
        store.commit("setPopup", {
          message: "You are not authorized!",
          error: true,
          display: true
        });
        const { response } = err;
        return Promise.reject(response);
      }
    }
  );
  if (requiresAuth) {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${retrieveToken()}`;
  }


  return axiosInstance;
};
