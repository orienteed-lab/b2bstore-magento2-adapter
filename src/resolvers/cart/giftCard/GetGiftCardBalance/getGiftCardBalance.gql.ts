import { gql } from '@apollo/client';

export const GET_GIFT_CARD_BALANCE = gql`
    query GetGiftCardBalance($giftCardCode: String!) {
        giftCardAccount(input: { gift_card_code: $giftCardCode }) {
            balance {
                currency
                value
            }
            code
            expiration_date
            id: code
        }
    }
`;

export default {
    getGiftCardBalanceQuery: GET_GIFT_CARD_BALANCE
};
