import { ClientProps } from 'src';
import { GetMiniCartQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getMiniCart.gql';

const GetMiniCart = (clientProps: ClientProps) => (resolverProps: GetMiniCartQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getMiniCartQuery } = mergeOperations(DEFAULT_OPERATIONS);
    const { data, loading } = useQuery(getMiniCartQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        variables: { cartId },
        skip: !cartId,
        errorPolicy: 'all'
    });

    return { data, loading };
};

export default GetMiniCart;
