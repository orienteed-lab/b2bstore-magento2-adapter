import { ClientProps } from 'src';
import { AddQuoteToCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './addQuoteToCart.gql';

const AddQuoteToCart = (clientProps: ClientProps) => (resolverProps: AddQuoteToCartMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { addQuoteToCartMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [addMpQuoteToCart] = useMutation(addQuoteToCartMutation);

    return { addMpQuoteToCart };
};

export default AddQuoteToCart;
