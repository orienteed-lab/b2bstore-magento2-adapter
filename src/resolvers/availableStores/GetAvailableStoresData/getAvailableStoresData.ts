import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getAvailableStoresData.gql';

const GetAvailableStoresData = (clientProps: ClientProps) => () => {
    const { mergeOperations, useQuery } = clientProps;

    const { getAvailableStoresDataQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data } = useQuery(getAvailableStoresDataQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { data };
};

export default GetAvailableStoresData;
