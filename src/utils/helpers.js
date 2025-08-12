
export const getStepInfo = (pathname) => {
  const stepMap = {
    "/": 1,
    "/customisations": 1,
    "/details": 2,
    "/preview": 3,
  };

  const step = stepMap[pathname] || 4;
  const valuePerStep = 25;
  const value = step * valuePerStep;

  return { step, value };
};

import { routes } from "./constants";

export const getPreviousRoute = (pathname) => {
  const index = routes.findIndex((r) => r.path === pathname);
  return index > 0 ? routes[index - 1] : routes[0];
};

export const getNextRoute = (pathname) => {
  const index = routes.findIndex((r) => r.path === pathname);
  return index >= 0 && index < routes.length - 1
    ? routes[index + 1]
    : routes[routes.length - 1];
};

export function random(num) {
  return Math.floor(Math.random() * num);
}

export function getCurrentYear() {
  return new Date().getFullYear();
}
