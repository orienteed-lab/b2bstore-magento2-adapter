import { ClientProps } from 'src';
import { AddSimpleProductsToQuoteMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './addSimpleProductsToQuote.gql';

const AddSimpleProductsToQuote = (clientProps: ClientProps) => (resolverProps: AddSimpleProductsToQuoteMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { addSimpleProductsToQuoteMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [addSimpleProductToQuote] = useMutation(addSimpleProductsToQuoteMutation);

    return { addSimpleProductToQuote };
};

export default AddSimpleProductsToQuote;
