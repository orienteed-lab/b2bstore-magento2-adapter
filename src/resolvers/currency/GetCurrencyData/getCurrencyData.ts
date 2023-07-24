import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getCurrencyData.gql';

const GetCurrencyData = (clientProps: ClientProps) => () => {
    const { useQuery, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getCurrencyDataQuery } = operations;

    const { data, loading, error } = useQuery(getCurrencyDataQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { data, loading, error };
};

export default GetCurrencyData;
