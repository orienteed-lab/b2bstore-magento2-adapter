import { ClientProps } from 'src';
import { SaveSavedCartsMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './saveSavedCarts.gql';

const SaveSavedCarts = (clientProps: ClientProps) => (resolverProps: SaveSavedCartsMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { saveSavedCartsMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [getMpSaveCart] = useMutation(saveSavedCartsMutation);

    return { getMpSaveCart };
};

export default SaveSavedCarts;
