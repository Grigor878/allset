export const getLanguage = (pathname) => {
  const match = pathname.match(/^\/([a-z]{2})/);
  return match ? match[1] : '';
};

export const getFlagCode = (lang) => {
  const map = {
    hy: "am",
    en: "gb",
    ru: "ru",
  };
  return map[lang] || "un";
};

import { steps } from "./constants";
import { pathWithoutLang } from "./formatters";

export const getStepInfo = (pathname) => {
  const step = steps[pathWithoutLang(pathname)];
  if (!step) return { show: false };

  return {
    step,
    value: (step / 4) * 100,
    show: true,
  };

  // const step = stepMap[pathWithoutLang(pathname)] || 4;
  // const valuePerStep = 25;
  // const value = step * valuePerStep;

  // return { step, value };
};

import { routes } from "./constants";

// export const getPreviousRoute = (pathname) => {
//   const language = getLanguage(pathname);
//   const cleanPath = pathWithoutLang(pathname);

//   const stepRoutes = routes.filter(r =>
//     ["/", "/customisations", "/details", "/preview", "/confirm"].includes(r.path)
//   );

//   const index = stepRoutes.findIndex(r => r.path === cleanPath);

//   if (index <= 0) return null;

//   const prevRoute = stepRoutes[index - 1];
//   return {
//     path: `/${language}${prevRoute.path}`,
//     name: prevRoute.name,
//   };
// };

export const getPreviousRoute = (pathname) => {
  const language = getLanguage(pathname);
  const cleanPath = pathWithoutLang(pathname);

  const index = routes.findIndex(r => r.path === cleanPath);
  if (index <= 0) return null;

  const prevRoute = routes[index - 1];
  return {
    path: `/${language}${prevRoute.path}`,
    name: prevRoute.name,
  };
};

// export const getNextRoute = (pathname) => {
//   const language = getLanguage(pathname);
//   const cleanPath = pathWithoutLang(pathname);

//   const stepRoutes = routes.filter(r =>
//     ["/", "/customisations", "/details", "/preview", "/confirm", "/payment"].includes(r.path)
//   );

//   const index = stepRoutes.findIndex(r => r.path === cleanPath);

//   if (index === -1 || index === stepRoutes.length - 1) return null;

//   const nextRoute = stepRoutes[index + 1];
//   return {
//     path: `/${language}${nextRoute.path}`,
//     name: nextRoute.name,
//   };
// };

export const getNextRoute = (pathname) => {
  const language = getLanguage(pathname);
  const cleanPath = pathWithoutLang(pathname) || "/";

  const index = routes.findIndex(r => r.path === cleanPath);
  if (index === -1 || index === routes.length - 1) return null;

  const nextRoute = routes[index + 1];
  return {
    path: `/${language}${nextRoute.path}`,
    name: nextRoute.name,
  };
};

// export const hasMultipleWords = (text) => {
//   if (!text || typeof text !== "string") return false;
//   const words = text.trim().split(/\s+/);
//   return words.length > 1;
// };

import { localesRegex } from "./regex";
export const navigateWithLocal = (pathname) =>
  pathname.replace(localesRegex, "")

export const getLanguageKey = (language) => {
  if (language === "hy") return "am";
  return language;
};

export function random(num) {
  return Math.floor(Math.random() * num);
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

import cookies from "js-cookie";

export function clearAllSiteCookies() {
  Object.keys(cookies.get()).forEach((cookieName) => {
    cookies.remove(cookieName);
  });
}

export function getTimeUntil(fullDate) {
  if (!fullDate) {
    return {};
  }

  const now = new Date();
  // const target = new Date(fullDate); // "YYYY-mm-dd"
  const [day, month, year] = fullDate.split("-").map(Number);

  const target = new Date(year, month - 1, day);
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  return {
    days,
    hours,
    minutes,
    expired: false,
  };
}

export const currentYear = new Date().getFullYear();

export const today = new Date();
