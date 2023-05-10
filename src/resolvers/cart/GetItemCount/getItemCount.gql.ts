import { gql } from '@apollo/client';
import { CartTriggerFragment } from '../../fragments/cartTriggerFragment.gql'

export const GET_ITEM_COUNT = gql`
    query GetItemCount($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...CartTriggerFragment
        }
    }
    ${CartTriggerFragment}
`;

export default {
    getItemCountQuery: GET_ITEM_COUNT
};
