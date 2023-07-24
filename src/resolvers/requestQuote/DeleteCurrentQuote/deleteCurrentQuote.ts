import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './deleteCurrentQuote.gql';

const DeleteCurrentQuote = (clientProps: ClientProps) => () => {
    const { mergeOperations, useMutation } = clientProps;

    const { deleteCurrentQuoteMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [deleteCurrentQuote] = useMutation(deleteCurrentQuoteMutation);

    return { deleteCurrentQuote };
};

export default DeleteCurrentQuote;
