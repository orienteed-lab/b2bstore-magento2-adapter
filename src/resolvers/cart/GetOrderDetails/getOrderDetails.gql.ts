import { gql } from '@apollo/client';
import { OrderConfirmationPageFragment } from '../../fragments/orderConfirmationPageFragments.gql'

export const GET_ORDER_DETAILS = gql`
    query GetOrderDetails($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...OrderConfirmationPageFragment
        }
    }
    ${OrderConfirmationPageFragment}
`;

export default {
    getOrderDetailsQuery: GET_ORDER_DETAILS
};
