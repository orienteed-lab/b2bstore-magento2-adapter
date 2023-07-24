import { gql } from '@apollo/client';

export const DELETE_SAVED_CARTS = gql`
    mutation DeleteSavedCarts($token: String!) {
        mpSaveCartDeleteCart(token: $token)
    }
`;

export default {
    deleteSavedCartsMutation: DELETE_SAVED_CARTS
};
