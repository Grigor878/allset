import { useQuery } from "@tanstack/react-query";
import baseApi from "../services/api/baseApi";
import { getAxiosConfig } from "../services/api/config";

export const useTanstack = ({ name, ...params }) => {
    return useQuery({
        queryKey: [name, params],
        queryFn: async () => {
            const searchParams = new URLSearchParams();

            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null && value !== "") {
                    searchParams.append(key, value);
                }
            });

            const queryString = searchParams.toString();
            const url = `/${name}${queryString ? `?${queryString}` : ""}`;

            const { data } = await baseApi.get(url, getAxiosConfig());
            return data;
        },
        staleTime: Infinity,
    });
};

export const useTanstackById = ({ name, id }) => {
    return useQuery({
        queryKey: [`${name}ById`, id],
        queryFn: async () => {
            const { data } = await baseApi.get(`/${name}/${id}`, getAxiosConfig());
            return data;
        },
        staleTime: 0,
    });
};

// export const useTanstack = ({ name, page, limit, query, ...rest }) => {
//     return useQuery({
//         queryKey: [name, page, query, limit],
//         queryFn: async () => {
//             const params = new URLSearchParams();

//             if (page) params.append("page", page);
//             if (limit) params.append("limit", limit);
//             if (query) params.append("query", query);

//             Object.entries(rest).forEach(([k, v]) => {
//                 if (v !== undefined && v !== null && v !== "") {
//                     params.append(k, v);
//                 }
//             });

//             const queryString = params.toString();
//             const url = `/${name}${queryString ? `?${queryString}` : ""}`;

//             const { data } = await baseApi.get(url, getAxiosConfig());
//             return data;
//         },
//         staleTime: Infinity,
//     });
// };