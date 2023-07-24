import { gql } from '@apollo/client';

import { CartPageFragmentEE } from '../../../fragments/cartPageFragments.gql';

export const APPLY_GIFT_CARD_TO_CART = gql`
    mutation ApplyGiftCardToCart($cartId: String!, $giftCardCode: String!) {
        applyGiftCardToCart(input: { cart_id: $cartId, gift_card_code: $giftCardCode }) {
            cart {
                id
                ...CartPageFragment
                # If this mutation causes "free" to become available we need to know.
                available_payment_methods {
                    code
                    title
                }
            }
        }
    }
    ${CartPageFragmentEE}
`;

export default {
    applyGiftCardToCartMutation: APPLY_GIFT_CARD_TO_CART
};
