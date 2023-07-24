import { gql } from '@apollo/client';

import { MiniCartFragment } from '../../fragments/miniCartFragments.gql';
import { CartPageFragmentCE, CartPageFragmentEE } from '../../fragments/cartPageFragments.gql';
import { AvailableShippingMethodsCartFragment } from '../../fragments/shippingMethodsFragments.gql';

export const REMOVE_ITEM_FROM_CART_CE = gql`
    mutation RemoveItemFromCart($cartId: String!, $itemId: ID!) {
        removeItemFromCart(input: { cart_id: $cartId, cart_item_uid: $itemId }) {
            cart {
                id
                available_payment_methods {
                    code
                    title
                }
                ...MiniCartFragment
                ...CartPageFragment
                ...AvailableShippingMethodsCartFragment
            }
        }
    }
    ${MiniCartFragment}
    ${CartPageFragmentCE}
    ${AvailableShippingMethodsCartFragment}
`;

export const REMOVE_ITEM_FROM_CART_EE = gql`
    mutation RemoveItemFromCart($cartId: String!, $itemId: ID!) {
        removeItemFromCart(input: { cart_id: $cartId, cart_item_uid: $itemId }) {
            cart {
                id
                available_payment_methods {
                    code
                    title
                }
                ...MiniCartFragment
                ...CartPageFragment
                ...AvailableShippingMethodsCartFragment
            }
        }
    }
    ${MiniCartFragment}
    ${CartPageFragmentEE}
    ${AvailableShippingMethodsCartFragment}
`;

export default {
    removeItemFromCartMutationCE: REMOVE_ITEM_FROM_CART_CE,
    removeItemFromCartMutationEE: REMOVE_ITEM_FROM_CART_EE
};
