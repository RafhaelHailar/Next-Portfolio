"use client";

import { useQuery } from "@tanstack/react-query";
import { getProjects } from "./api";

export const useGetProjects = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: getProjects
    })
};