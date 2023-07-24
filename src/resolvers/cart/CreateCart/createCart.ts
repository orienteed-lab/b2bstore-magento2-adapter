import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './createCart.gql';

const CreateCart = (clientProps: ClientProps) => () => {
    const { useMutation, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { createCartMutation } = operations;

    const [fetchCartId] = useMutation(createCartMutation);

    return { fetchCartId };
};

export default CreateCart;
