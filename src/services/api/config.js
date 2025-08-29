const { MODE, VITE_BASE_API_DEV, VITE_BASE_API_RELEASE, VITE_BASE_URL_DEV, VITE_BASE_URL_RELEASE } = import.meta.env;

export const BASE_API = MODE === "development" ? VITE_BASE_API_DEV : VITE_BASE_API_RELEASE; // api url

export const BASE_URL = MODE === "development" ? VITE_BASE_URL_DEV : VITE_BASE_URL_RELEASE; // web url

export const getAxiosConfig = () => {
  const token = sessionStorage.getItem("") || "";

  return {
    headers: { Authorization: "Bearer " + token },
  };
};
