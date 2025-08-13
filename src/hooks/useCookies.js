import { useState, useEffect, useCallback } from "react";
import cookies from "js-cookie";

export function useCookies(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const cookieValue = cookies.get(key);
        if (cookieValue !== undefined) {
            try {
                return JSON.parse(cookieValue);
            } catch {
                return cookieValue;
            }
        }

        if (typeof defaultValue === "function") {
            return defaultValue();
        }
        return defaultValue;
    });

    useEffect(() => {
        if (value === undefined) {
            cookies.remove(key);
        } else {
            cookies.set(key, JSON.stringify(value));
        }
    }, [key, value]);

    const remove = useCallback(() => {
        setValue(undefined);
    }, []);

    return [value, setValue, remove];
}

// import { useState } from "react";
// import cookies from "js-cookie";

// export function useCookies(key, defaultValue) {
//   const [value, setValue] = useState(() => {
//     const cookieValue = cookies.get(key);
//     return cookieValue !== undefined ? cookieValue : defaultValue;
//   });

//   const updateCookie = (newValue) => {
//     setValue(newValue);
//     cookies.set(key, newValue);
//   };

//   return [value, updateCookie];
// }

