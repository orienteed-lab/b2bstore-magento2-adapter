import { ClientProps } from 'src';
import { GetWishlistProductsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getWishlistProducts.gql';

interface GetWishlistProductsProps extends GetWishlistProductsQueryVariables {
    isUseQuery?:boolean;
}

const GetWishlistProducts = (clientProps: ClientProps) => (resolverProps: GetWishlistProductsProps = {id: '', currentPage: 0, isUseQuery: false}) => {
    const { mergeOperations, useLazyQuery, useQuery } = clientProps;
    const { id, currentPage, isUseQuery } = resolverProps;

    const { getWishlistProductsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    if (isUseQuery) {
        const {data} = useQuery(getWishlistProductsQuery, {
            variables: {
                id: '0'
            }
        });

        return {data};
    }

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
