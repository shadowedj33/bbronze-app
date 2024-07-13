import { useState, useEffect } from 'react';

const useFetch = (url, options = null) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, { ...options, signal });
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                    setData(null);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        return () => controller.abort();
    }, [url, options]);

    return { data, isLoading, error };
};

export default useFetch;