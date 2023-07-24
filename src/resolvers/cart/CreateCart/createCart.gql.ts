import { gql } from '@apollo/client';

export const CREATE_CART = gql`
    mutation CreateCart {
        cartId: createEmptyCart
    }
`;

export default {
    createCartMutation: CREATE_CART
};
