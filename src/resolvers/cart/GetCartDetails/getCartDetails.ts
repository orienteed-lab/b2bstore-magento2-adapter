import { ClientProps } from 'src';
import { GetCartDetailsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getCartDetails.gql';

interface GetCartDetailsProps extends GetCartDetailsQueryVariables {
    isLazy?: boolean;
}

const GetCartDetails =
    (clientProps: ClientProps) =>
    (resolverProps: GetCartDetailsProps = { isLazy: false, cartId: '' }) => {
        const { useAwaitQuery, useLazyQuery, mergeOperations, backendEdition } = clientProps;
        let { isLazy } = resolverProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { getCartDetailsCEQuery, getCartDetailsEEQuery } = operations;

        const getCartDetailsQuery = backendEdition === 'EE' ? getCartDetailsEEQuery : getCartDetailsCEQuery;

        if (isLazy) {
            const [fetchCartDetails, { data, loading, error, called }] = useLazyQuery(getCartDetailsQuery, {
                fetchPolicy: 'cache-and-network',
                nextFetchPolicy: 'cache-first'
            });
            return { fetchCartDetails, data, loading, error, called };
        }

        const fetchCartDetails = useAwaitQuery(getCartDetailsQuery);
        return { fetchCartDetails };
    };

export default GetCartDetails;
