import { gql } from '@apollo/client';

import { CartTriggerFragment } from '../../fragments/cartTriggerFragment.gql';
import { MiniCartFragment } from '../../fragments/miniCartFragments.gql';

export const ADD_SIMPLE_PRODUCT_TO_CART = gql`
    mutation AddSimpleProductToCart($cartId: String!, $quantity: Float!, $sku: String!) {
        addSimpleProductsToCart(
            input: { cart_id: $cartId, cart_items: [{ data: { quantity: $quantity, sku: $sku } }] }
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
    addSimpleProductToCartMutation: ADD_SIMPLE_PRODUCT_TO_CART
};
