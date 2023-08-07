import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getWishlists.gql';

interface GetWishlistsProps {
    isSignedIn?: boolean;
    hasIsSignedIn: boolean;
    performQuery?: boolean;
}

const GetWishlists =
    (clientProps: ClientProps) =>
    (resolverProps: GetWishlistsProps = { hasIsSignedIn: false, performQuery: true }) => {
        const { mergeOperations, backendEdition, useQuery } = clientProps;
        const { hasIsSignedIn, performQuery } = resolverProps;

        const { getWishlistsQueryCE, getWishlistsQueryEE } = mergeOperations(DEFAULT_OPERATIONS);
        const getWishlistsQuery = backendEdition === 'EE' ? getWishlistsQueryEE : getWishlistsQueryCE;

        if (hasIsSignedIn) {
            const { isSignedIn } = resolverProps;

            const { data, error, loading } = useQuery(getWishlistsQuery, {
                fetchPolicy: 'cache-and-network',
                nextFetchPolicy: 'cache-first',
                skip: !isSignedIn
            });

            return { data, error, loading };
        } else {
            if (!performQuery) {
                return { getWishlistsQuery };
            }
            const { data } = useQuery(getWishlistsQuery, {
                fetchPolicy: 'cache-and-network'
            });

            return { data };
        }
    };

export default GetWishlists;
