"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFlags } from "./slices/featureFlagSlice";

export default function FeatureFlagLoader({ children }: any) {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFlags() {
      try {
        const res = await fetch("/api/flags");
        const data = await res.json();

        dispatch(setFlags(data));
      } catch (err) {
        console.error("Failed to fetch flags", err);

        // fallback (important)
        dispatch(
          setFlags({
            newNavbar: false,
          })
        );
      } finally {
        setLoaded(true);
      }
    }

    loadFlags();
  }, [dispatch]);

  if (!loaded) return null;

  return children;
}