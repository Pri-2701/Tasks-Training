import { useState, useEffect, useCallback } from "react";

// Custom hook to fetch data from an API
export const useFetch = (url) => {
  const [data, setData] = useState(null);       // Store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  const fetchData = useCallback(async () => {
    if (!url) return;

    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, { signal });
      if (!response.ok) throw new Error(`Network error: ${response.status}`);
      
      const result = await response.json();

      // Normalize result: always return an object
      if (typeof result === "object" && result !== null) {
        setData(result);
      } else {
        setData({ value: result });
      }

    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }

    // Cleanup function to abort fetch if component unmounts
    return () => controller.abort();
  }, [url]);

  useEffect(() => {
    const cleanup = fetchData();
    return () => cleanup && cleanup();
  }, [fetchData]);

  // Provide a way to manually refetch
  const refetch = () => fetchData();

  return { data, loading, error, refetch };
};
