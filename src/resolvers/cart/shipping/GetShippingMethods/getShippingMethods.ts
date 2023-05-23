import { ClientProps } from 'src';
import { GetShippingMethodsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getShippingMethods.gql';

const GetShippingMethods = (clientProps: ClientProps) => (resolverProps: GetShippingMethodsQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getShippingMethodsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data } = useQuery(getShippingMethodsQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !cartId,
        variables: {
            cartId
        }
    });

    return { data };
};

export default GetShippingMethods;
