import { gql } from '@apollo/client';

import { CartPageFragmentEE } from '../../../fragments/cartPageFragments.gql';
import { GiftOptionsFragmentEE } from '../../../fragments/giftOptionsFragments.gql';

export const SET_GIFT_OPTIONS_ON_CART = gql`
    mutation SetGiftOptionsOnCart(
        $cartId: String!
        $giftMessage: GiftMessageInput
        $giftReceiptIncluded: Boolean!
        $printedCardIncluded: Boolean!
    ) {
        setGiftOptionsOnCart(
            input: {
                cart_id: $cartId
                gift_message: $giftMessage
                gift_receipt_included: $giftReceiptIncluded
                printed_card_included: $printedCardIncluded
            }
        ) {
            cart {
                id
                ...CartPageFragment
                ...GiftOptionsFragment
            }
        }
    }
    ${CartPageFragmentEE}
    ${GiftOptionsFragmentEE}
`;

export default {
    setGiftOptionsOnCartMutation: SET_GIFT_OPTIONS_ON_CART
};
