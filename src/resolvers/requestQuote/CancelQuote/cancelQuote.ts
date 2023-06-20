import { ClientProps } from 'src';
import { CancelQuoteMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './cancelQuote.gql';

const CancelQuote = (clientProps: ClientProps) => (resolverProps: CancelQuoteMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { cancelQuoteMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [cancelMpQuote] = useMutation(cancelQuoteMutation);

    return { cancelMpQuote };
};

export default CancelQuote;
