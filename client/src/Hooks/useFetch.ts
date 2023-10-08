import { useState, useEffect } from 'react';
import { request } from '../request';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await request.get(url);
            setData(res.data.data);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    };

    useEffect( () => {
        fetchData().catch(error => console.log(error));

    }, [url]);

    return { data, isLoading, error };
};
