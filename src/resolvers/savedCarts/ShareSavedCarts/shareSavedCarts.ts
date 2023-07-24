import { ClientProps } from 'src';
import { ShareSavedCartsMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './shareSavedCarts.gql';

const ShareSavedCarts = (clientProps: ClientProps) => (resolverProps: ShareSavedCartsMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { shareSavedCartsMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [getShareCart] = useMutation(shareSavedCartsMutation);

    return { getShareCart };
};

export default ShareSavedCarts;
