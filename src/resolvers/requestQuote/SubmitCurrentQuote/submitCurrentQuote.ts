import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './submitCurrentQuote.gql';

const SubmitCurrentQuote = (clientProps: ClientProps) => () => {
    const { mergeOperations, useMutation } = clientProps;

    const { submitCurrentQuoteMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [submitCurrentQuote] = useMutation(submitCurrentQuoteMutation);

    return { submitCurrentQuote };
};

export default SubmitCurrentQuote;
