import { gql } from '@apollo/client';

import { CartTriggerFragment } from '../../fragments/cartTriggerFragment.gql';
import { MiniCartFragment } from '../../fragments/miniCartFragments.gql';

export const ADD_PRODUCT_TO_CART = gql`
    mutation AddProductToCart($cartId: String!, $product: CartItemInput!) {
        addProductsToCart(cartId: $cartId, cartItems: [$product]) {
            cart {
                id
                ...CartTriggerFragment
                ...MiniCartFragment
            }
        }
    }
    ${CartTriggerFragment}
    ${MiniCartFragment}
`;

export default {
    addProductToCartMutation: ADD_PRODUCT_TO_CART
};
