// Determine the language: use the fetched data if available, otherwise fall back to useParams ('hy' for Armenian, 'am' as needed)
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getLanguageKey } from "../utils/helpers";

export const useLanguage = () => {
    const { language } = useParams();

    const lng = useMemo(() => getLanguageKey(language), [language]);

    return lng;
};