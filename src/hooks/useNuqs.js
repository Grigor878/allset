import { useQueryState } from "nuqs";
import cookies from "js-cookie";

export function useNuqs(key, defaultValue = null, options = {}) {
  const cookieValue = cookies.get(key);
  const initialValue = cookieValue ?? defaultValue;

  const [value, setValue] = useQueryState(key, { defaultValue: initialValue, ...options });

  const setValueAndCookie = (newValue) => {
    setValue(newValue);
    if (newValue === null || newValue === undefined) {
      cookies.remove(key);
    } else {
      cookies.set(key, newValue);
    }
  };

  return [value, setValueAndCookie];
}
