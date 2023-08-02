import { ClientProps } from 'src';
import { AddProductToCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './addProductToCart.gql';

interface AddProductToCartProps extends AddProductToCartMutationVariables {
    initialRun?: boolean;
}

const AddProductToCart = (clientProps: ClientProps) => (resolverProps: AddProductToCartProps = {initialRun: false, cartId: '', product: {quantity: 0, sku: ''}}) => {
    const { mergeOperations, useMutation } = clientProps;
    const { initialRun } = resolverProps;

    const { addProductToCartMutation } = mergeOperations(DEFAULT_OPERATIONS);

    if (initialRun) {
        const { cartId, product } = resolverProps;
        const [addWishlistItemToCart, { error, loading }] = useMutation(addProductToCartMutation, {
            variables: {
                cartId,
                product
            }
        });

        return { addWishlistItemToCart, error, loading };
    } else {
        const [addProductToCart, { error, loading }] = useMutation(addProductToCartMutation);

        return { addProductToCart, error, loading };
    }
};

export default AddProductToCart;
