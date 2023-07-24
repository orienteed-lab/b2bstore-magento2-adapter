import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getProductsInWishlists.gql';

interface GetProductsInWishlistsProps {
    performQuery?: boolean;
}

const GetProductsInWishlists =
    (clientProps: ClientProps) =>
    (resolverProps: GetProductsInWishlistsProps = { performQuery: true }) => {
        const { mergeOperations, useQuery } = clientProps;
        const { performQuery } = resolverProps;

        const { getProductsInWishlistsQuery } = mergeOperations(DEFAULT_OPERATIONS);

        if (!performQuery) {
            return { getProductsInWishlistsQuery };
        }

        const { client, data } = useQuery(getProductsInWishlistsQuery);

        return { data, client, getProductsInWishlistsQuery };
    };

export default GetProductsInWishlists;
