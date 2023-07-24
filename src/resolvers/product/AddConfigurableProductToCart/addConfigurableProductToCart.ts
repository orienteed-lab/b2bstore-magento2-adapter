import { ClientProps } from 'src';
import { AddConfigurableProductToCartMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './addConfigurableProductToCart.gql';

interface AddConfigurableProductToCartProps extends AddConfigurableProductToCartMutationVariables {
    hasProps: boolean;
}

const AddConfigurableProductToCart = (clientProps: ClientProps) => (resolverProps: AddConfigurableProductToCartProps) => {
    const { mergeOperations, useMutation } = clientProps;
    const { hasProps } = resolverProps;

    const { addConfigurableProductToCartMutation } = mergeOperations(DEFAULT_OPERATIONS);

    if (hasProps) {
        const { cartId, parentSku, quantity, sku } = resolverProps;
        const [addWishlistSimpleProductToCart] = useMutation(addConfigurableProductToCartMutation, {
            variables: {
                cartId,
                quantity,
                sku,
                parentSku
            }
        });

        return { addWishlistSimpleProductToCart };
    } else {
        const [addConfigurableProductToCart, { error, loading }] = useMutation(addConfigurableProductToCartMutation);

        return { addConfigurableProductToCart, error, loading };
    }
};

export default AddConfigurableProductToCart;
