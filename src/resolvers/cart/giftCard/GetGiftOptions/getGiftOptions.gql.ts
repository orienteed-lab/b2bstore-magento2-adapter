import { gql } from '@apollo/client';

import { GiftOptionsFragmentEE } from '../../../fragments/giftOptionsFragments.gql';

export const GET_GIFT_OPTIONS = gql`
    query GetGiftOptions($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...GiftOptionsFragment
        }
    }
    ${GiftOptionsFragmentEE}
`;

export default {
    getGiftOptionsQuery: GET_GIFT_OPTIONS
};
