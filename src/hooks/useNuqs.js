import { useQueryState } from "nuqs";
import cookies from "js-cookie";

export function useNuqs(key, options = {}) {
  const cookieValue = cookies.get(key);

  const [value, setValue] = useQueryState(key, {
    value: cookieValue,
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

  return [value, setValueAndCookie];
}

// useEffect(() => {
//   if (!cookies.get(key) && value !== null && value !== undefined) {
//     setValue(null);
//   }
// }, [key, value, setValue]);