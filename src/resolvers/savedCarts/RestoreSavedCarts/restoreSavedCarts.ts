import { ClientProps } from 'src';
import { RestoreSavedCartsMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './restoreSavedCarts.gql';

const RestoreSavedCarts = (clientProps: ClientProps) => (resolverProps: RestoreSavedCartsMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;
    const { cartId, token } = resolverProps;

    const { restoreSavedCartsMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [restoreSaveCart] = useMutation(restoreSavedCartsMutation, {
        fetchPolicy: 'no-cache',
        variables: {
            token: token,
            cartId: cartId
        }
    });

    return { restoreSaveCart };
};

export default RestoreSavedCarts;
