import { ClientProps } from 'src';
import { GetSavedCartsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getSavedCarts.gql';

const GetSavedCarts = (clientProps: ClientProps) => (resolverProps: GetSavedCartsQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { currentPage, pageSize } = resolverProps;

    const { getSavedCartsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, refetch } = useQuery(getSavedCartsQuery, {
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'cache-first',
        variables: {
            pageSize,
            currentPage
        }
    });

    return { data, refetch };
};

export default GetSavedCarts;
