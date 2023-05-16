import { ClientProps } from 'src';
import { RemoveItemFromCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './removeItemFromCart.gql';

const RemoveItemFromCart = (clientProps: ClientProps) => (resolverProps: RemoveItemFromCartMutationVariables) => {
    const { mergeOperations, useMutation, backendEdition } = clientProps;

    const { removeItemFromCartMutationCE, removeItemFromCartMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
    const removeItemFromCartMutation = backendEdition === 'EE' ? removeItemFromCartMutationEE : removeItemFromCartMutationCE;

    const [removeItem, { loading, called, error }] = useMutation(removeItemFromCartMutation);

    return { removeItem, called, loading, error };
};

export default RemoveItemFromCart;
