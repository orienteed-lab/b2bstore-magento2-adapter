import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getLocationsCart.gql';

interface GetLocationsCartProps {
    cartId: any;
}

const GetLocationsCart =
    (clientProps: ClientProps) =>
    (resolverProps: GetLocationsCartProps = { cartId: '' }) => {
        const { useQuery, mergeOperations } = clientProps;
        const { cartId } = resolverProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { getLocationsCartQuery } = operations;

        const { data, loading } = useQuery(getLocationsCartQuery, {
            variables: { cartId },
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        });

        return { data, loading };
    };

export default GetLocationsCart;
