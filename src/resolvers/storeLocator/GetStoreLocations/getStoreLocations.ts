import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getStoreLocations.gql';

interface GetStoreLocationsProps {
    filter?: any;
    pageSize?: number;
    currentPage?: number;
}

const GetStoreLocations = (clientProps: ClientProps) => (resolverProps: GetStoreLocationsProps) => {
    const { useLazyQuery, mergeOperations } = clientProps;
    const { filter, pageSize, currentPage } = resolverProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getStoreLocationsQuery } = operations;

    const [runQuery, queryResponse] = useLazyQuery(getStoreLocationsQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        variables: {
            filter,
            pageSize,
            currentPage
        }
    });

    return { runQuery, queryResponse };
};

export default GetStoreLocations;
