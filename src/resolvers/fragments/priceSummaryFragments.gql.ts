import { gql } from '@apollo/client';

import { DiscountSummaryFragment } from './discountSummary.gql';
import { GiftCardSummaryFragmentCE, GiftCardSummaryFragmentEE } from './giftCardSummary.gql';
import { GiftOptionsSummaryFragmentCE, GiftOptionsSummaryFragmentEE } from './giftOptionsSummary.gql';
import { ShippingSummaryFragment } from './shippingSummary.gql';
import { TaxSummaryFragment } from './taxSummary.gql';

export const GrandTotalFragment = gql`
    fragment GrandTotalFragment on CartPrices {
        grand_total {
            currency
            value
        }
    }
`;

export const PriceSummaryFragmentCE = gql`
    fragment PriceSummaryFragment on Cart {
        id
        items {
            uid
            quantity
        }
        ...ShippingSummaryFragment
        prices {
            ...TaxSummaryFragment
            ...DiscountSummaryFragment
            ...GrandTotalFragment
            subtotal_excluding_tax {
                currency
                value
            }
            subtotal_including_tax {
                currency
                value
            }
        }
        ...GiftCardSummaryFragment
        ...GiftOptionsSummaryFragment
    }
    ${DiscountSummaryFragment}
    ${GiftCardSummaryFragmentCE}
    ${GiftOptionsSummaryFragmentCE}
    ${GrandTotalFragment}
    ${ShippingSummaryFragment}
    ${TaxSummaryFragment}
`;

export const PriceSummaryFragmentEE = gql`
    fragment PriceSummaryFragment on Cart {
        id
        items {
            uid
            quantity
        }
        ...ShippingSummaryFragment
        prices {
            ...TaxSummaryFragment
            ...DiscountSummaryFragment
            ...GrandTotalFragment
            subtotal_excluding_tax {
                currency
                value
            }
            subtotal_including_tax {
                currency
                value
            }
        }
        ...GiftCardSummaryFragment
        ...GiftOptionsSummaryFragment
    }
    ${DiscountSummaryFragment}
    ${GiftCardSummaryFragmentEE}
    ${GiftOptionsSummaryFragmentEE}
    ${GrandTotalFragment}
    ${ShippingSummaryFragment}
    ${TaxSummaryFragment}
`;
