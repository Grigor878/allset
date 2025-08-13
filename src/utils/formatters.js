export const pathWithoutLang = (pathname) =>
    pathname.replace(/^\/[a-z]{2}/, '') || '/'

export const capitalize = (str) => str?.charAt(0)?.toUpperCase() + str?.slice(1);

export const deepCapitalize = (str) =>
    str?.toLowerCase()?.split(' ')?.map(word =>
        word?.charAt(0)?.toUpperCase() + word?.slice(1)
    )?.join(' ');


export function truncateText(text, maxLength, suffix = "...") {
    if (typeof text !== "string") return text;
    if (text.length <= maxLength) return text;

    return text.slice(0, maxLength) + suffix;
}

export function formatUrl(url) {
    const oldBase = "http://localhost:8080";
    const newBase = "https://allset-bxuk.onrender.com";

    if (url.startsWith(oldBase)) {
        return url.replace(oldBase, newBase);
    }
    return url; // return original if it doesn't match
}
