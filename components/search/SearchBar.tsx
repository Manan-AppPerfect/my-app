"use client";

import { setQuery } from "@/store/slices/searchSlice";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar() {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <input 
            ref={inputRef}
            type="text"
            placeholder="Search your product..."
            className="border p-2 w-full mb-4"
            onChange={(e) => {
                console.log("typing:", e.target.value);
                dispatch(setQuery(e.target.value));}}
        />
    );
}