import { gql } from '@apollo/client';

export const GiftOptionsSummaryFragmentCE = gql`
    fragment GiftOptionsSummaryFragment on Cart {
        id
        __typename
    }
`;

export const GiftOptionsSummaryFragmentEE = gql`
    fragment GiftOptionsSummaryFragment on Cart {
        id
        prices {
            gift_options {
                printed_card {
                    value
                    currency
                }
            }
        }
    }
`;
