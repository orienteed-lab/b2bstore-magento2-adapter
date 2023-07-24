import { gql } from '@apollo/client';

import { CartPageFragmentCE, CartPageFragmentEE } from '../../../fragments/cartPageFragments.gql';

export const APPLY_COUPON_TO_CART_CE = gql`
    mutation ApplyCouponToCart($cartId: String!, $couponCode: String!) {
        applyCouponToCart(input: { cart_id: $cartId, coupon_code: $couponCode }) {
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

export const APPLY_COUPON_TO_CART_EE = gql`
    mutation ApplyCouponToCart($cartId: String!, $couponCode: String!) {
        applyCouponToCart(input: { cart_id: $cartId, coupon_code: $couponCode }) {
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
    applyCouponToCartMutationCE: APPLY_COUPON_TO_CART_CE,
    applyCouponToCartMutationEE: APPLY_COUPON_TO_CART_EE
};
