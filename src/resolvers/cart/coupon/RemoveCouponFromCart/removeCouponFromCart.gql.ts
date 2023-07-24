import { gql } from '@apollo/client';

import { CartPageFragmentCE, CartPageFragmentEE } from '../../../fragments/cartPageFragments.gql';

export const REMOVE_COUPON_FROM_CART_CE = gql`
    mutation RemoveCouponFromCart($cartId: String!) {
        removeCouponFromCart(input: { cart_id: $cartId }) {
            cart {
                id
                ...CartPageFragment
                # If this mutation causes "free" to become available we need to know.
                available_payment_methods {
                    code
                    title
                }
            }
        }
    }
    ${CartPageFragmentCE}
`;

export const REMOVE_COUPON_FROM_CART_EE = gql`
    mutation RemoveCouponFromCart($cartId: String!) {
        removeCouponFromCart(input: { cart_id: $cartId }) {
            cart {
                id
                ...CartPageFragment
                # If this mutation causes "free" to become available we need to know.
                available_payment_methods {
                    code
                    title
                }
            }
        }
    }
    ${CartPageFragmentEE}
`;

export default {
    removeCouponFromCartMutationCE: REMOVE_COUPON_FROM_CART_CE,
    removeCouponFromCartMutationEE: REMOVE_COUPON_FROM_CART_EE
};
