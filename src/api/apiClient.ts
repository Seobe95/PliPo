import axios from "axios";

export const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.LOCAL_API_URL
      : process.env.DEPLOY_API_URL,
});
