import { gql } from '@apollo/client';

export const GiftCardFragmentCE = gql`
    fragment GiftCardFragment on Cart {
        __typename
        id
    }
`;

export const GiftCardFragmentEE = gql`
    fragment GiftCardFragment on Cart {
        applied_gift_cards {
            code
            current_balance {
                currency
                value
            }
        }
        id
    }
`;
