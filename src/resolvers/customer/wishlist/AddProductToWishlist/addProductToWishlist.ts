import { ClientProps } from 'src';
import { AddProductToWishlistMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './addProductToWishlist.gql';
import WISHLIST_OPERATIONS from '../GetWishlists/getWishlists.gql';

interface AddProductToWishlistProps extends AddProductToWishlistMutationVariables {
    hasRefetch: boolean;
}

const AddProductToWishlist = (clientProps: ClientProps) => (resolverProps: AddProductToWishlistProps) => {
    const { mergeOperations, useMutation } = clientProps;
    const { hasRefetch } = resolverProps;

    const { addProductToWishlistMutation, getWishlistsQuery } = mergeOperations(DEFAULT_OPERATIONS, WISHLIST_OPERATIONS);

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
