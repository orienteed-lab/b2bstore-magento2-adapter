import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getConfigDetailsForSavedCarts.gql';

const GetConfigDetailsForSavedCarts = (clientProps: ClientProps) => () => {
    const { mergeOperations, useQuery } = clientProps;

    const { getConfigDetailsForSavedCartsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data } = useQuery(getConfigDetailsForSavedCartsQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { data };
};

export default GetConfigDetailsForSavedCarts;
