export const url =
  process.env.NODE_ENV === "development"
    ? process.env.LOCAL_API_URL
    : process.env.DEPLOY_API_URL;
