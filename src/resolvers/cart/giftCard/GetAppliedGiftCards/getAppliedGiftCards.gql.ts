import { gql } from '@apollo/client';

import { GiftCardFragmentEE } from '../../../fragments/giftCardFragments.gql';

export const GET_APPLIED_GIFT_CARDS = gql`
    query GetAppliedGiftCards($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...GiftCardFragment
        }
    }
    ${GiftCardFragmentEE}
`;

export default {
    getAppliedGiftCardsQuery: GET_APPLIED_GIFT_CARDS
};
