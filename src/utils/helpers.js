export const getLanguage = (pathname) => {
  const match = pathname.match(/^\/([a-z]{2})/);
  return match ? match[1] : '';
};

import { pathWithoutLang } from "./formatters";
export const getStepInfo = (pathname) => {
  const stepMap = {
    "/": 1,
    "/customisations": 1,
    "/details": 2,
    "/preview": 3,
  };

  const step = stepMap[pathWithoutLang(pathname)] || 4;
  const valuePerStep = 25;
  const value = step * valuePerStep;

  return { step, value };
};

import { routes } from "./constants";
export const getPreviousRoute = (pathname) => {
  const language = getLanguage(pathname);
  const cleanPath = pathWithoutLang(pathname);

  const index = routes.findIndex((r) => r.path === cleanPath);
  const prevRoute = index > 0 ? routes[index - 1] : routes[0];

  return { path: `/${language}${prevRoute.path}`, name: prevRoute.name };
};

export const getNextRoute = (pathname) => {
  const language = getLanguage(pathname);
  const cleanPath = pathWithoutLang(pathname);

  const index = routes.findIndex((r) => r.path === cleanPath);
  const nextRoute = index >= 0 && index < routes.length - 1 ? routes[index + 1] : routes[routes.length - 1];

  return { path: `/${language}${nextRoute.path}`, name: nextRoute.name };
};

export const hasMultipleWords = (text) => {
  if (!text || typeof text !== "string") return false;
  const words = text.trim().split(/\s+/);
  return words.length > 1;
};

import { localesRegex } from "./regex";
export const navigateWithLocal = (pathname) =>
  pathname.replace(localesRegex, "")

export const getLanguageKey  = (language) => {
  if (language === "hy") return "am"; 
  return language;
};

export function random(num) {
  return Math.floor(Math.random() * num);
}

export function getCurrentYear() {
  return new Date().getFullYear();
}
