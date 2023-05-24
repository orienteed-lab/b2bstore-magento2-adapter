import { gql } from '@apollo/client';

export const GET_APPLIED_COUPONS = gql`
    query GetAppliedCoupons($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            applied_coupons {
                code
            }
        }
    }
`;

export default {
    getAppliedCouponsQuery: GET_APPLIED_COUPONS
};
