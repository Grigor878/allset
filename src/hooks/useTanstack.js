import { useQuery } from "@tanstack/react-query";
import baseApi from "../services/api/baseApi";

export const useTanstack = (name) => {
    return useQuery({
        queryKey: [name],
        queryFn: async () => {
            const { data } = await baseApi.get(`${name}`);
            return data;
        },
        staleTime: Infinity,
    });
};