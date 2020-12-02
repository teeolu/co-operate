/** @format */

import axios from "axios";

import { AuthRepository } from "./authApis";
// import Auth from "./authApis";

const config = {
  baseURL: process.env.REACT_APP_API_BASE_URL
};

const instance = axios.create(config);

// if (Auth.isAuthenticated() === true) {
//   instance.defaults.headers.common[
//     "Authorization"
//   ] = `Bearer ${Auth.getAccessToken()}`;
// }

export const Api = {
  auth: AuthRepository(instance)
};

export const getApiError = error => {
  if (!!error.response === false) {
    return { status: 1, message: error?.message, details: null };
  }
  if (error.response?.status === 401) {
  }
  return {
    status: error?.response?.status,
    message: error?.response?.data?.message || "",
    details: error?.response?.data?.details || null
  };
};
