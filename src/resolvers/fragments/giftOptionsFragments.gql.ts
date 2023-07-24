import { gql } from '@apollo/client';

import { GiftOptionsSummaryFragmentCE, GiftOptionsSummaryFragmentEE } from './giftOptionsSummary.gql';

export const GiftOptionsFragmentCE = gql`
    fragment GiftOptionsFragment on Cart {
        __typename
        id
        gift_message {
            from
            to
            message
        }
        gift_receipt_included
        printed_card_included
        ...GiftOptionsSummaryFragment
    }
    ${GiftOptionsSummaryFragmentCE}
`;

export const GiftOptionsFragmentEE = gql`
    fragment GiftOptionsFragment on Cart {
        __typename
        id
        gift_message {
            from
            to
            message
        }
        gift_receipt_included
        printed_card_included
        ...GiftOptionsSummaryFragment
    }
    ${GiftOptionsSummaryFragmentEE}
`;
