import { gql } from '@apollo/client';

import { AppliedCouponsFragment } from './couponCodeFragments.gql';
import { GiftCardFragmentCE, GiftCardFragmentEE } from './giftCardFragments.gql';
import { PriceSummaryFragmentCE, PriceSummaryFragmentEE } from './priceSummaryFragments.gql';
import { ProductListingFragment } from './productListingFragments.gql';

export const CartPageFragmentCE = gql`
    fragment CartPageFragment on Cart {
        id
        total_quantity
        ...AppliedCouponsFragment
        ...GiftCardFragment
        ...ProductListingFragment
        ...PriceSummaryFragment
    }
    ${AppliedCouponsFragment}
    ${GiftCardFragmentCE}
    ${ProductListingFragment}
    ${PriceSummaryFragmentCE}
`;

export const CartPageFragmentEE = gql`
    fragment CartPageFragment on Cart {
        id
        total_quantity
        ...AppliedCouponsFragment
        ...GiftCardFragment
        ...ProductListingFragment
        ...PriceSummaryFragment
    }
    ${AppliedCouponsFragment}
    ${GiftCardFragmentEE}
    ${ProductListingFragment}
    ${PriceSummaryFragmentEE}
`;
