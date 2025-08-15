import { useQueryState } from "nuqs";
import cookies from "js-cookie";
import { useEffect } from "react";

export function useNuqs(key, defaultValue = null, options = {}) {
  const cookieValue = cookies.get(key);
  const initialValue = cookieValue ?? defaultValue;

  const [value, setValue] = useQueryState(key, {
    defaultValue: initialValue,
    ...options,
  });

  const setValueAndCookie = (newValue) => {
    setValue(newValue);

    if (newValue === null || newValue === undefined) {
      cookies.remove(key);
    } else {
      cookies.set(key, newValue, { expires: 1 }); 
    }
  };

  useEffect(() => {
    if (!cookies.get(key) && value !== null && value !== undefined) {
      setValue(null);
    }
  }, [key, value, setValue]);

  return [value, setValueAndCookie];
}


// import { useQueryState } from "nuqs";
// import cookies from "js-cookie";

// export function useNuqs(key, defaultValue = null, options = {}) {
//   const cookieValue = cookies.get(key);
//   const initialValue = cookieValue ?? defaultValue;

//   const [value, setValue] = useQueryState(key, { defaultValue: initialValue, ...options });

//   const setValueAndCookie = (newValue) => {
//     setValue(newValue);
//     if (newValue === null || newValue === undefined) {
//       cookies.remove(key);
//     } else {
//       cookies.set(key, newValue, { expires: 1 });
//     }
//   };

//   return [value, setValueAndCookie];
// }