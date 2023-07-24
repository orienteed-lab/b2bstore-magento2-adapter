import { ClientProps } from 'src';
import { AddProductToWishlistMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './addProductToWishlist.gql';
import WISHLIST_OPERATIONS from '../GetWishlists/getWishlists.gql';

interface AddProductToWishlistProps extends AddProductToWishlistMutationVariables {
    hasRefetch: boolean;
}

const AddProductToWishlist = (clientProps: ClientProps) => (resolverProps: AddProductToWishlistProps) => {
    const { mergeOperations, backendEdition, useMutation } = clientProps;
    const { hasRefetch } = resolverProps;

    const { addProductToWishlistMutation, getWishlistsQueryCE, getWishlistsQueryEE } = mergeOperations(DEFAULT_OPERATIONS, WISHLIST_OPERATIONS);
    const getWishlistsQuery = backendEdition === 'EE' ? getWishlistsQueryEE : getWishlistsQueryCE;

    if (hasRefetch) {
        const [addProductToWishlist, { loading, error }] = useMutation(addProductToWishlistMutation, {
            refetchQueries: [{ query: getWishlistsQuery }]
        });

        return { addProductToWishlist, loading, error };
    } else {
        const [addProductToWishlist, { data, error, loading }] = useMutation(addProductToWishlistMutation);

        return { addProductToWishlist, data, error, loading };
    }
};

export default AddProductToWishlist;
