"use client";

import { useEffect, useRef } from "react";

export default function SearchBar() {
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <input 
            ref={inputRef}
            type="text"
            placeholder="Search your product..."
            className="border p-2 w-full mb-4"
        />
    );
}