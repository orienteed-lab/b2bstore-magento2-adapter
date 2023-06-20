import { ClientProps } from 'src';
import { DeleteItemFromQuoteMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './deleteItemFromQuote.gql';

const DeleteItemFromQuote = (clientProps: ClientProps) => (resolverProps: DeleteItemFromQuoteMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { deleteItemFromQuoteMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [removeItem, { called, loading }] = useMutation(deleteItemFromQuoteMutation);

    return { removeItem, loading, called };
};

export default DeleteItemFromQuote;
