const { MODE, VITE_BASE_API_DEV, VITE_BASE_API_RELEASE } = import.meta.env;

export const BASE_API = MODE === "development" ? VITE_BASE_API_DEV : VITE_BASE_API_RELEASE; // api url

export const getAxiosConfig = () => {
  const token = sessionStorage.getItem("") || "";

  return {
    headers: { Authorization: "Bearer " + token },
  };
};
