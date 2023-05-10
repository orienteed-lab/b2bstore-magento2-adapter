import { ClientProps } from 'src';
import { GetItemsInCartQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getItemsInCart.gql'

const GetItemsInCart = (clientProps: ClientProps) => (resolverProps: GetItemsInCartQueryVariables) => {
    const { mergeOperations, useLazyQuery } = clientProps;
    const { getItemsInCartQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const [fetchItemsInCart, { data, error, loading }] = useLazyQuery(getItemsInCartQuery, {
        fetchPolicy: 'cache-and-network'
    });

    return { fetchItemsInCart, data, loading, error };
};

export default GetItemsInCart;
