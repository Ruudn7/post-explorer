export interface IFetchHttpFn {
    url: string,
    config?: RequestInit,
    autoExecute?: boolean
}

export interface IHttpHookFn<T> extends IFetchHttpFn {
    initialData?: T | null
}