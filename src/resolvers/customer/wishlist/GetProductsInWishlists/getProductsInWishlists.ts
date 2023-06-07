import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getProductsInWishlists.gql';

const GetProductsInWishlists = (clientProps: ClientProps) => () => {
    const { mergeOperations, useQuery } = clientProps;

    const { getProductsInWishlistsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { client, data } = useQuery(getProductsInWishlistsQuery);

    return { data, client };
};

export default GetProductsInWishlists;
