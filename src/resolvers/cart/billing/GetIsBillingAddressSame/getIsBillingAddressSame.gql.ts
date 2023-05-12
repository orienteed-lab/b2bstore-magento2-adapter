import { gql } from '@apollo/client';

export const GET_IS_BILLING_ADDRESS_SAME = gql`
    query GetIsBillingAddressSame($cartId: String!) {
        cart(cart_id: $cartId) @client {
            id
            isBillingAddressSame
        }
    }
`;

export default {
    getIsBillingAddressSameQuery: GET_IS_BILLING_ADDRESS_SAME
};
