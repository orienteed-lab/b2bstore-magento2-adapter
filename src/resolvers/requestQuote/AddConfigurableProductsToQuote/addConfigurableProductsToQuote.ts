import { ClientProps } from 'src';
import { AddConfigurableProductsToQuoteMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './addConfigurableProductsToQuote.gql';

const AddConfigurableProductsToQuote = (clientProps: ClientProps) => (resolverProps: AddConfigurableProductsToQuoteMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { addConfigurableProductsToQuoteMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [addConfigProductToQuote] = useMutation(addConfigurableProductsToQuoteMutation);

    return { addConfigProductToQuote };
};

export default AddConfigurableProductsToQuote;
