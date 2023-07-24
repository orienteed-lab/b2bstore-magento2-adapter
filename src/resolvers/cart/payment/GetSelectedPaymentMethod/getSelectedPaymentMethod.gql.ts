import { gql } from '@apollo/client';

export const GET_SELECTED_PAYMENT_METHOD = gql`
    query GetSelectedPaymentMethod($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            selected_payment_method {
                code
                title
            }
        }
    }
`;

export default {
    getSelectedPaymentMethodQuery: GET_SELECTED_PAYMENT_METHOD
};
