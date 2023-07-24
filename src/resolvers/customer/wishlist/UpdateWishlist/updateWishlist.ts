import { ClientProps } from 'src';
import { UpdateWishlistMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './updateWishlist.gql';

const UpdateWishlist = (clientProps: ClientProps) => (resolverProps: UpdateWishlistMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { updateWishlistMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [updateWishlist, { error, loading }] = useMutation(updateWishlistMutation);

    return { updateWishlist, loading, error };
};

export default UpdateWishlist;
