import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getLanguageKey } from "../utils/helpers";

export const useLanguage = () => {
    const { language } = useParams();

    const lng = useMemo(() => getLanguageKey(language), [language]);

    return lng;
};