import { ClientProps } from 'src';
import { DeleteSubmittedQuoteMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './deleteSubmittedQuote.gql';

const DeleteSubmittedQuote = (clientProps: ClientProps) => (resolverProps: DeleteSubmittedQuoteMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { deleteSubmittedQuoteMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [deleteSubmittedMpQuote] = useMutation(deleteSubmittedQuoteMutation);

    return { deleteSubmittedMpQuote };
};

export default DeleteSubmittedQuote;
