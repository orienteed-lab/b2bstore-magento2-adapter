import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getLocale.gql';

const GetStoreConfig = (clientProps: ClientProps) => () => {
    const { useQuery, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getLocaleQuery } = operations;

    const { data } = useQuery(getLocaleQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { data };
};

export default GetStoreConfig;
