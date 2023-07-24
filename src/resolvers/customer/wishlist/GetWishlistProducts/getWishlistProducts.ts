import { ClientProps } from 'src';
import { GetWishlistProductsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getWishlistProducts.gql';

const GetWishlistProducts = (clientProps: ClientProps) => (resolverProps: GetWishlistProductsQueryVariables) => {
    const { mergeOperations, useLazyQuery } = clientProps;
    const { id, currentPage } = resolverProps;

    const { getWishlistProductsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const [fetchWishlistItems, queryResult] = useLazyQuery(getWishlistProductsQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        variables: {
            id,
            currentPage
        }
    });

    return { fetchWishlistItems, queryResult };
};

export default GetWishlistProducts;
