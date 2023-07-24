import { ClientProps } from 'src';
import { GetSelectedAndAvailableShippingMethodsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getSelectedAndAvailableShippingMethods.gql';

const GetSelectedAndAvailableShippingMethods =
    (clientProps: ClientProps) => (resolverProps: GetSelectedAndAvailableShippingMethodsQueryVariables) => {
        const { mergeOperations, useQuery } = clientProps;
        const { cartId } = resolverProps;

        const { getSelectedAndAvailableShippingMethodsQuery } = mergeOperations(DEFAULT_OPERATIONS);

        const { data, loading } = useQuery(
            getSelectedAndAvailableShippingMethodsQuery,
            {
                fetchPolicy: 'cache-and-network',
                nextFetchPolicy: 'cache-first',
                skip: !cartId,
                variables: { cartId }
            }
        );

        return { data, loading };
    };

export default GetSelectedAndAvailableShippingMethods;
