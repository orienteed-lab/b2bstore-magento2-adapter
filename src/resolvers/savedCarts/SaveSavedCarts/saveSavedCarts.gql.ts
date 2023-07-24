import { gql } from '@apollo/client';

export const SAVE_CART = gql`
    mutation SaveSavedCarts($cartId: String!, $cartName: String!, $description: String) {
        o_mpSaveCart(cart_id: $cartId, cart_name: $cartName, description: $description)
    }
`;

export default {
    saveSavedCartsMutation: SAVE_CART
};
