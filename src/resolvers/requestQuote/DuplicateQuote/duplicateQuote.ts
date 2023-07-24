import { ClientProps } from 'src';
import { DuplicateQuoteMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './duplicateQuote.gql';

const DuplicateQuote = (clientProps: ClientProps) => (resolverProps: DuplicateQuoteMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { duplicateQuoteMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [duplicateMpQuote] = useMutation(duplicateQuoteMutation);

    return { duplicateMpQuote };
};

export default DuplicateQuote;
