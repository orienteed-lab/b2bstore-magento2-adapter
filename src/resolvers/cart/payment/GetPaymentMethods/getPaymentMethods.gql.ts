import { gql } from '@apollo/client';

export const GET_PAYMENT_METHODS = gql`
    query GetPaymentMethods($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            available_payment_methods {
                code
                title
            }
            selected_payment_method {
                code
            }
        }
    }
`;

export default {
    getPaymentMethodsQuery: GET_PAYMENT_METHODS
};
