import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getStoreId.gql';

const GetStoreId = (clientProps: ClientProps) => () => {
    const { useQuery, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getStoreIdQuery } = operations;

    const { data } = useQuery(getStoreIdQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { data };
};

export default GetStoreId;
