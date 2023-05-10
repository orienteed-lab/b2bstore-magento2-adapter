import { gql } from '@apollo/client';
import { MiniCartFragment } from '../../fragments/miniCartFragments.gql'

export const GET_MINI_CART = gql`
    query GetMiniCart($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...MiniCartFragment
        }
    }
    ${MiniCartFragment}
`;

export default {
    getMiniCartQuery: GET_MINI_CART
};
