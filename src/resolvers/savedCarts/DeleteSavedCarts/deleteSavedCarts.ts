import { ClientProps } from 'src';
import { DeleteSavedCartsMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './deleteSavedCarts.gql';

const DeleteSavedCarts = (clientProps: ClientProps) => (resolverProps: DeleteSavedCartsMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;
    const { token } = resolverProps;

    const { deleteSavedCartsMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [deleteSaveCart] = useMutation(deleteSavedCartsMutation, {
        fetchPolicy: 'no-cache',
        variables: {
            token: token
        }
    });

    return { deleteSaveCart };
};

export default DeleteSavedCarts;
