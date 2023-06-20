import { gql } from '@apollo/client';

export const ADD_QUOTE_TO_CART = gql`
    mutation AddQuoteToCart($quoteId: Int!) {
        addMpQuoteToCart(quote_id: $quoteId) {
            cart {
                id
            }
        }
    }
`;

export default {
    addQuoteToCartMutation: ADD_QUOTE_TO_CART
};
