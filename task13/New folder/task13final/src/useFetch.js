import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (signal) => {
    if (!url) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);

    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();

    fetchData(controller.signal);

    return () => {
      controller.abort(); // ✅ correct cleanup
    };
  }, [fetchData]);

  const refetch = () => fetchData();

  return { data, loading, error, refetch };
};
