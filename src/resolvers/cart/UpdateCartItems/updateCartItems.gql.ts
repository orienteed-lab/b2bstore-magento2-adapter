import { gql } from '@apollo/client';

import { CartPageFragmentCE, CartPageFragmentEE } from '../../fragments/cartPageFragments.gql';
import { AvailableShippingMethodsCartFragment } from '../../fragments/shippingMethodsFragments.gql';

export const UPDATE_CART_ITEMS_CE = gql`
    mutation UpdateCartItems($cartId: String!, $itemId: ID!, $quantity: Float!) {
        updateCartItems(input: { cart_id: $cartId, cart_items: [{ cart_item_uid: $itemId, quantity: $quantity }] }) {
            cart {
                id
                available_payment_methods {
                    code
                    title
                }
                ...CartPageFragment
                ...AvailableShippingMethodsCartFragment
            }
        }
    }
    ${CartPageFragmentCE}
    ${AvailableShippingMethodsCartFragment}
`;

export const UPDATE_CART_ITEMS_EE = gql`
    mutation UpdateCartItems($cartId: String!, $itemId: ID!, $quantity: Float!) {
        updateCartItems(input: { cart_id: $cartId, cart_items: [{ cart_item_uid: $itemId, quantity: $quantity }] }) {
            cart {
                id
                available_payment_methods {
                    code
                    title
                }
                ...CartPageFragment
                ...AvailableShippingMethodsCartFragment
            }
        }
    }
    ${CartPageFragmentEE}
    ${AvailableShippingMethodsCartFragment}
`;

export default {
    updateCartItemsMutationCE: UPDATE_CART_ITEMS_CE,
    updateCartItemsMutationEE: UPDATE_CART_ITEMS_EE
};
