"use client";

import { useSelector } from "react-redux"

export const useFeature = (key: string) => {
    const flags = useSelector((state: any) => state.featureFlags);
    return flags[key];
};