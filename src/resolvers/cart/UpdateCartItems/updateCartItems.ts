import { ClientProps } from 'src';
import { UpdateCartItemsMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './updateCartItems.gql';

const UpdateCartItems = (clientProps: ClientProps) => (resolverProps: UpdateCartItemsMutationVariables) => {
    const { mergeOperations, useMutation, backendEdition } = clientProps;

    const { updateCartItemsMutationCE, updateCartItemsMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
    const updateCartItemsMutation = backendEdition === 'EE' ? updateCartItemsMutationEE : updateCartItemsMutationCE;

    const [
        updateItemQuantity,
        { loading, error, called }
    ] = useMutation(updateCartItemsMutation);

    return { updateItemQuantity, called, loading, error };
};

export default UpdateCartItems;
