import { ClientProps } from 'src';
import { UpdateQuoteMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './updateQuote.gql';

const UpdateQuote = (clientProps: ClientProps) => (resolverProps: UpdateQuoteMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { updateQuoteMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [updateItemQuantity, { loading, called }] = useMutation(updateQuoteMutation);

    return { updateItemQuantity, loading, called };
};

export default UpdateQuote;
