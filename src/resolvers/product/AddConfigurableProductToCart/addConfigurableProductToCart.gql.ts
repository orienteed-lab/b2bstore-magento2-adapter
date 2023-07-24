import { gql } from '@apollo/client';

import { CartTriggerFragment } from '../../fragments/cartTriggerFragment.gql';
import { MiniCartFragment } from '../../fragments/miniCartFragments.gql';

export const ADD_CONFIGURABLE_PRODUCT_TO_CART = gql`
    mutation AddConfigurableProductToCart($cartId: String!, $quantity: Float!, $sku: String!, $parentSku: String!) {
        addConfigurableProductsToCart(
            input: {
                cart_id: $cartId
                cart_items: [{ data: { quantity: $quantity, sku: $sku }, parent_sku: $parentSku }]
            }
        ) {
            cart {
                id
                # Update the cart trigger when adding an item.
                ...CartTriggerFragment
                # Update the mini cart when adding an item.
                ...MiniCartFragment
            }
        }
    }
    ${CartTriggerFragment}
    ${MiniCartFragment}
`;

export default {
    addConfigurableProductToCartMutation: ADD_CONFIGURABLE_PRODUCT_TO_CART
};
