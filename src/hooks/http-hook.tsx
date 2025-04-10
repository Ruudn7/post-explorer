import { useCallback, useEffect, useState } from "react";
import { IFetchHttpFn, IHttpHookFn } from "./types";

type ErrorResponse = { message?: string };

async function fetchFunction<T>({ url, config }: IFetchHttpFn): Promise<T> {
    const response = await fetch(url, config);
    const resData: T = await response.json();

    if (!response.ok) {
        throw new Error(
            (resData as ErrorResponse).message || "Something went wrong"
        );
    }

    return resData;
}

export default function useHttp<T>({
    url,
    config = {},
    initialData = null,
    autoExecute = true,
}: IHttpHookFn<T> & { autoExecute?: boolean }) {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<T | null>(initialData ?? null);

    const sendRequest = useCallback(async () => {
        setIsLoading(true);
        try {
            const result: T = await fetchFunction({ url, config });
            setData(result);
        } catch (error: any) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Unknown error');
            }
        } finally {
            setIsLoading(false);
        }
    }, [url, config]);

    useEffect(() => {
        if (autoExecute && (config.method === 'GET' || !config.method)) {
            sendRequest();
        }
    }, [sendRequest, config, autoExecute]);

    return {
        data,
        error,
        isLoading,
        sendRequest,
    };
}
