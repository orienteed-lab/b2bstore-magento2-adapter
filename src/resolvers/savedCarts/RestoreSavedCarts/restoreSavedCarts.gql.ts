import { gql } from '@apollo/client';

export const RESTORE_SAVED_CARTS = gql`
    mutation RestoreSavedCarts($cartId: String!, $token: String!) {
        mpSaveCartRestoreCart(cart_id: $cartId, token: $token)
    }
`;

export default {
    restoreSavedCartsMutation: RESTORE_SAVED_CARTS
};
