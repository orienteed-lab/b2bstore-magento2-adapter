import { ClientProps } from 'src';
import { AddSimpleProductToCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './addSimpleProductToCart.gql';

const AddSimpleProductToCart = (clientProps: ClientProps) => (resolverProps: AddSimpleProductToCartMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { addSimpleProductToCartMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [addSimpleProductToCart, { error, loading }] = useMutation(addSimpleProductToCartMutation);

    return { addSimpleProductToCart, loading, error };
};

export default AddSimpleProductToCart;
