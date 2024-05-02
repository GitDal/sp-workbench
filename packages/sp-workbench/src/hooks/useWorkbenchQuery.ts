import { QueryKey, UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query'
import { WorkbenchQueryClientContext } from '../contexts/WorkbenchQueryClientContext';

export const useWorkbenchQuery = <
    TQueryFnData = unknown,
    TError = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
>(
    options: Omit<
        UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
        'initialData' | "context"
    > & { initialData?: () => undefined },
): UseQueryResult<TData, TError> => {
    Object.assign(options, { context: WorkbenchQueryClientContext })

    return useQuery(options);
}