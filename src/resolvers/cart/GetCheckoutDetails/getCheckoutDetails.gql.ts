import { gql } from '@apollo/client';
import { CheckoutPageFragment } from '../../fragments/checkoutPageFragments.gql'

export const GET_CHECKOUT_DETAILS = gql`
    query GetCheckoutDetails($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...CheckoutPageFragment
        }
    }
    ${CheckoutPageFragment}
`;

export default {
    getCheckoutDetailsQuery: GET_CHECKOUT_DETAILS
};
