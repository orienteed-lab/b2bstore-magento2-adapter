import { gql } from '@apollo/client';

export const PLACE_ORDER = gql`
    mutation PlaceOrder($cartId: String!) {
        placeOrder(input: { cart_id: $cartId }) {
            order {
                order_number
            }
        }
    }
`;

export default {
    placeOrderMutation: PLACE_ORDER
};
