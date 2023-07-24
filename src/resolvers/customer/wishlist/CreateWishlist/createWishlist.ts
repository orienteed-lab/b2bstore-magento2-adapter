import { ClientProps } from 'src';
import { CreateWishlistMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './createWishlist.gql';

const CreateWishlist = (clientProps: ClientProps) => (resolverProps: CreateWishlistMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { createWishlistMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [createList, { loading, error }] = useMutation(createWishlistMutation);

    return { createList, loading, error };
};

export default CreateWishlist;
